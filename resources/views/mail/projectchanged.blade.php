@component('mail::message')
# Tisztelt {{$contact_name}}!

Az ön projektje frissült.

Az alábbi adatok módosultak:

@component('mail::table')
| Adat          |  Új       |
| ------------- | :--------:|
@foreach ($changeddata as $change => $newvalue)
@php
    switch ($change)
    {
        case 'name':
            $change='Projekt név';
            break;
        case 'desc':
            $change='Projekt leírás';
            break;
        case 'state':
            if ($newvalue =='0')
            {
                $newvalue = 'Fejlesztésre vár.';
            }
            else if ($newvalue =='1')
            {
                $newvalue = 'Folyamatban';
            }
            else if ($newvalue =='2')
            {
                $newvalue = 'Kész';
            }
            $change='Projekt állapot';
            break;
        case 'updated_at':
            $change='Frissítés dátuma';
            break;
    }
@endphp
| {{$change}}      | {{$newvalue}}      |
@endforeach
@endcomponent

Üdvözlettel,<br>
FWS-HA Csapata
@endcomponent
