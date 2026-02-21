# PowerShell script to add universal scroll animations to all pages

$pages = @(
    "src/pages/Blog/Dhaara1.js",
    "src/pages/Blog/DigitalSchool1.js",
    "src/pages/Blog/Ecare1.js",
    "src/pages/Blog/Expertguruji.js",
    "src/pages/Blog/ExpertSkilll.js",
    "src/pages/Blog/Kamdhanda.js",
    "src/pages/Blog/PatTantra .js",
    "src/pages/Blog/Scroller.js",
    "src/pages/JobDetails/AndroidDeveloper.js",
    "src/pages/JobDetails/Digitalmarket.js",
    "src/pages/JobDetails/JobApplicationForm.js",
    "src/pages/JobDetails/Software.js",
    "src/pages/JobDetails/Ui.js",
    "src/pages/JobDetails/WebDeveloper.js",
    "src/pages/Leadership/Ceo.js",
    "src/pages/Leadership/CeoMadam.js",
    "src/pages/InternshipContent.js",
    "src/pages/Portfolio/ConstructIQ.js",
    "src/pages/Portfolio/Dhaara.js",
    "src/pages/Portfolio/DigitalSchool.js",
    "src/pages/Portfolio/Ecare360.js",
    "src/pages/Portfolio/Esalary.js",
    "src/pages/Portfolio/ExpertGuruji.js",
    "src/pages/Portfolio/ExpertSkill.js",
    "src/pages/Portfolio/KamDhanda.js",
    "src/pages/Portfolio/Marketing.js",
    "src/pages/Portfolio/Matrimonial.js",
    "src/pages/Portfolio/PatTantra.js",
    "src/pages/Portfolio/Scroller.js",
    "src/pages/refund.js",
    "src/pages/terms.js",
    "src/pages/privacy.js",
    "src/pages/shipping.js"
)

$successCount = 0
$totalCount = $pages.Count

Write-Host "🚀 Starting batch update for universal scroll animations..." -ForegroundColor Green
Write-Host ""

foreach ($page in $pages) {
    if (Test-Path $page) {
        Write-Host "Processing $page..." -ForegroundColor Yellow
        
        $content = Get-Content $page -Raw
        
        # Skip if already has universal scroll animations
        if ($content -match "setupPageScrollAnimations" -or $content -match "universalScrollAnimations") {
            Write-Host "  ⏭️  Skipping - already has universal scroll animations" -ForegroundColor Gray
            continue
        }
        
        $updated = $false
        
        # Replace old scroll animation imports
        if ($content -match "autoApplyMobileScrollAnimations") {
            $content = $content -replace 'import \{ autoApplyMobileScrollAnimations \} from "[^"]*";', 'import { setupPageScrollAnimations } from "../utils/universalScrollAnimations";'
            $content = $content -replace 'import \{ autoApplyMobileScrollAnimations \} from "[^"]*";', 'import { setupPageScrollAnimations } from "../../utils/universalScrollAnimations";'
            $updated = $true
        }
        
        # Replace old function calls
        if ($content -match "autoApplyMobileScrollAnimations\(\)") {
            $content = $content -replace 'autoApplyMobileScrollAnimations\(\);', 'setupPageScrollAnimations();'
            $updated = $true
        }
        
        # Add import if not present
        if (-not ($content -match "setupPageScrollAnimations")) {
            if ($content -match 'import React[^;]*;') {
                $importPath = if ($page -match "Blog/|JobDetails/|Leadership/|Portfolio/") { "../../utils/universalScrollAnimations" } else { "../utils/universalScrollAnimations" }
                $content = $content -replace '(import React[^;]*;)', "`$1`nimport { setupPageScrollAnimations } from `"$importPath`";"
                $updated = $true
            }
        }
        
        # Add useEffect if not present
        if (-not ($content -match "setupPageScrollAnimations\(\)")) {
            if ($content -match 'useEffect\(\(\) => \{') {
                $content = $content -replace '(useEffect\(\(\) => \{[^}]*)', "`$1`n    // Setup scroll animations`n    setupPageScrollAnimations();`n"
                $updated = $true
            } elseif ($content -match 'export default function \w+\([^)]*\) \{') {
                $content = $content -replace '(export default function \w+\([^)]*\) \{)', "`$1`n  // Setup scroll animations`n  useEffect(() => {`n    setupPageScrollAnimations();`n  }, []);`n"
                $updated = $true
            }
        }
        
        if ($updated) {
            Set-Content $page $content -NoNewline
            Write-Host "  ✅ Updated successfully" -ForegroundColor Green
            $successCount++
        } else {
            Write-Host "  ⚠️  No changes needed" -ForegroundColor Yellow
        }
    } else {
        Write-Host "  ❌ File not found: $page" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "✅ Batch update completed!" -ForegroundColor Green
Write-Host "📊 Updated $successCount/$totalCount files" -ForegroundColor Cyan
Write-Host ""
Write-Host "🎯 All pages now have universal scroll