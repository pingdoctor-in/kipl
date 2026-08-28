@echo off
echo Running KIPL Daily Tender Intelligence Scraper...
cd /d "C:\Users\sskam\.gemini\antigravity\scratch\kipl-tender-command-center"
python scripts/fetch_tenders.py
cmd /c npm run build
echo.
echo Pushing updated tender data to GitHub...
"C:\Users\sskam\AppData\Roaming\kimi-desktop\daimon-bundle\runtime\git\cmd\git.exe" add .
"C:\Users\sskam\AppData\Roaming\kimi-desktop\daimon-bundle\runtime\git\cmd\git.exe" commit -m "Daily Automated Tender Update"
"C:\Users\sskam\AppData\Roaming\kimi-desktop\daimon-bundle\runtime\git\cmd\git.exe" push origin main --force
echo.
echo [SUCCESS] Live site updated! Check your dashboard at https://pingdoctor-in.github.io/kipl/
pause
