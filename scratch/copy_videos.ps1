$target = "c:\Users\User\Desktop\beru cafe\public\videos"
if (!(Test-Path $target)) {
    New-Item -ItemType Directory -Path $target -Force
}

$files = Get-ChildItem -Path "C:\Users\User\Downloads\New folder (3)" -Filter "*.mp4"

foreach ($f in $files) {
    if ($f.Name -match "Rose Matcha") {
        Copy-Item $f.FullName "$target\rose-matcha.mp4" -Force
        Write-Host "Copied rose-matcha.mp4"
    } elseif ($f.Name -match "This Sunday") {
        Copy-Item $f.FullName "$target\beru-cafe-tour.mp4" -Force
        Write-Host "Copied beru-cafe-tour.mp4"
    }
}

Get-ChildItem -Path $target | Select-Object Name, Length
