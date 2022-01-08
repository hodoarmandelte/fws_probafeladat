<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('js/app.js') }}" rel="script">
    <script type="text/javascript" src="{{ URL::asset('js/jquery-3.6.0.min.js') }}"></script>
    @yield('extra_header')
</head>

<body class="min-h-screen flex items-center justify-center" style="background: #edf2f7;">
    @yield('content')

    {{-- Blade komponensnek színek force compile: --}}
    <p hidden class="text-sky-900 bg-sky-200">p</p>
</body>

</html>
