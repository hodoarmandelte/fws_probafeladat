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

<body class="min-h-screen" style="background: #edf2f7;">
    <header>
        <div class="bg-amber-500 flex justify-between px-10 items-center py-6">
            <a href="{{ route('projects.index') }}">
                <div class="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h1 class="text-white font-bold text-xl">FWS-HA Próbafeladat</h1>
                </div>
            </a>
        </div>
    </header>
    <div class="flex items-center justify-center">
        @yield('content')
    </div>
    <footer></footer>
</body>

</html>
