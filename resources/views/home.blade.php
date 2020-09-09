@extends('layouts.app')

@section('content')
<script>
    if (!localStorage.getItem('appToken')) {
        window.location.replace('/login')
    }
</script>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <router-view></router-view>
        </div>
    </div>
</div>
@endsection
