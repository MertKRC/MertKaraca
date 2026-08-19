$code = @"
using System;
using System.IO;
using System.Net;
using System.Collections.Generic;
using System.Threading;

public class FastServer {
    private static HttpListener listener;
    private static string rootDir;
    private static readonly Dictionary<string, string> mimeTypes = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) {
        { ".html", "text/html; charset=utf-8" },
        { ".htm", "text/html; charset=utf-8" },
        { ".css", "text/css; charset=utf-8" },
        { ".js", "application/javascript; charset=utf-8" },
        { ".json", "application/json; charset=utf-8" },
        { ".jpg", "image/jpeg" },
        { ".jpeg", "image/jpeg" },
        { ".png", "image/png" },
        { ".webp", "image/webp" },
        { ".svg", "image/svg+xml" },
        { ".ico", "image/x-icon" }
    };

    public static void Start(string root, int port) {
        rootDir = root;
        listener = new HttpListener();
        listener.Prefixes.Add("http://localhost:" + port + "/");
        listener.Prefixes.Add("http://127.0.0.1:" + port + "/");
        listener.Start();
        Console.WriteLine("Server running at http://localhost:" + port + "/");

        while (listener.IsListening) {
            try {
                var context = listener.GetContext();
                ThreadPool.QueueUserWorkItem(ProcessRequest, context);
            } catch { }
        }
    }

    private static void ProcessRequest(object state) {
        var context = (HttpListenerContext)state;
        try {
            var rawPath = context.Request.Url.LocalPath.TrimStart('/');
            if (string.IsNullOrWhiteSpace(rawPath)) rawPath = "index.html";
            var path = Uri.UnescapeDataString(rawPath).Replace('/', Path.DirectorySeparatorChar);
            var filePath = Path.Combine(rootDir, path);

            if (File.Exists(filePath)) {
                var ext = Path.GetExtension(filePath);
                string ct;
                if (!mimeTypes.TryGetValue(ext, out ct)) ct = "application/octet-stream";
                context.Response.ContentType = ct;
                context.Response.Headers.Add("Access-Control-Allow-Origin", "*");
                context.Response.Headers.Add("Cache-Control", "public, max-age=3600");

                byte[] bytes = File.ReadAllBytes(filePath);
                context.Response.ContentLength64 = bytes.Length;
                context.Response.OutputStream.Write(bytes, 0, bytes.Length);
                context.Response.StatusCode = 200;
            } else {
                context.Response.StatusCode = 404;
                byte[] notFound = System.Text.Encoding.UTF8.GetBytes("404 Not Found");
                context.Response.ContentLength64 = notFound.Length;
                context.Response.OutputStream.Write(notFound, 0, notFound.Length);
            }
        } catch { }
        finally {
            try { context.Response.Close(); } catch { }
        }
    }
}
"@

Add-Type -TypeDefinition $code -Language CSharp
$port = 3000
$root = $PSScriptRoot
if (-not $root) { $root = (Get-Location).Path }

[FastServer]::Start($root, $port)
