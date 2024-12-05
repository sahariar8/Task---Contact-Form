<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Contact Form</title>
    <!-- Include Polaris CSS -->
    <link rel="stylesheet" href="https://unpkg.com/@shopify/polaris/build/esm/styles.css">
    @vite('resources/js/app.jsx') {{-- Include React App --}}
</head>
<body>
    <div id="contact-form">
    </div>
</body>
</html>
