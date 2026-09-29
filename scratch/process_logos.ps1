Add-Type -AssemblyName System.Drawing

$upDir = "C:\Users\User\.gemini\antigravity-ide\brain\04b210e4-43f9-4619-bf30-70018fcaa539\.user_uploaded"
$pubDir = "c:\Users\User\Desktop\beru cafe\public\images"

# 1. Copy official transparent logo
Copy-Item "$upDir\media_1790652906798.png" "$pubDir\beru-logo-official.png" -Force

# 2. Copy cream badge
Copy-Item "$upDir\media_1790652863327.png" "$pubDir\beru-logo-badge.png" -Force

# 3. Create a cream/gold inverted version for dark backgrounds
$srcBmp = [System.Drawing.Bitmap]::FromFile("$upDir\media_1790652906798.png")
$goldBmp = new-object System.Drawing.Bitmap $srcBmp.Width, $srcBmp.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb

for ($y = 0; $y -lt $srcBmp.Height; $y++) {
    for ($x = 0; $x -lt $srcBmp.Width; $x++) {
        $p = $srcBmp.GetPixel($x, $y)
        if ($p.A -gt 5) {
            # Target colors: Cream #F4EBDD (244, 235, 221) and warm gold #D8C2A4 (216, 194, 164)
            # Source lightness roughly:
            $l = (0.299 * $p.R + 0.587 * $p.G + 0.114 * $p.B) / 255.0
            # Remap darker tones to golden beige and lighter highlights to bright cream
            $nr = [int][Math]::Min(255, 216 + (244 - 216) * $l)
            $ng = [int][Math]::Min(255, 185 + (235 - 185) * $l)
            $nb = [int][Math]::Min(255, 150 + (221 - 150) * $l)
            $goldBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($p.A, $nr, $ng, $nb))
        } else {
            $goldBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

$goldBmp.Save("$pubDir\beru-logo-gold.png", [System.Drawing.Imaging.ImageFormat]::Png)
$srcBmp.Dispose()
$goldBmp.Dispose()
Write-Host "Logos processed successfully!"
