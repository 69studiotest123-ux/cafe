Add-Type -AssemblyName System.Drawing
$filePath = "C:\Users\User\.gemini\antigravity-ide\brain\04b210e4-43f9-4619-bf30-70018fcaa539\.user_uploaded\media_1790652906798.png"
$img = [System.Drawing.Bitmap]::FromFile($filePath)
Write-Host "Logo Size: $($img.Width) x $($img.Height)"
$p = $img.GetPixel(0,0)
Write-Host "Top-left pixel: A=$($p.A), R=$($p.R), G=$($p.G), B=$($p.B)"
$img.Dispose()
