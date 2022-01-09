
# FWS Próbafeladat
 Egyszerű projektkezelő rendszer Laravel keretrendszerben, FWS állásinterjú, 2022.01.07, Hodoniczki Armand
 
 A próbafeladat Laravel 8 keretrendszerben készült, a megjelenítéshez TailwindCSS-t használ.
 
 a '01_Minta_DB' mappában található egy párszáz rekordos mintaadatbázis, importálható .sql formátumban teszteléshez. Alternatívaként manuálisan is felépíthető a tesztadatbázis, a Project, Contact és ProjectContact Factory-jai segítségével, vagy egyesével: Új Projekt, projekt szerkesztés kontaktokkal.
 
 Az email értesítés funkció ki van kommentezve biztonsági okokól. Valós emailcímekkel való használathoz az app/Http/Controllers/Projectcontroller.php 124-129-es sorairól el kell távolítani a kommentezést.
