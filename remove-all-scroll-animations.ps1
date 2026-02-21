# PowerShell script to remove all scroll animations from all pages

$pages = @(
    "src/pages/Home.js",
    "src/pages/Blog.js", 
    "src/pages/Career.js",
    "src/pages/Internship.js",
    "src/pages/InternshipContent.js",
    "src/pages/refund.js",
    "src/pages/terms.js",
    "src/pages/privacy.js",
    "src/pages/shipping.js",
    "src/pages/Blog/Dhaara1.js",
    "src/pages/Blog/DigitalSchool1.js",
    "src/pages/Blog/Ecare1.js",
    "src/pages/Blog/Esalary.js",
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
    "src/pages/Portfolio/Scroller.js"
)

$successCount = 0
$totalCount = $pages.Count

Write-Host "🚀 Removing all scroll animations from pages..." -ForegroundColor Green
Write-Host ""

foreach ($page in $pages) {
    if (Test-Path $page) {
        Write-Host "Processing $page..." -ForegroundColor Yellow
        
        $content = Get-Content $page -Raw
        $updated = $false
        
        # Remove scroll animation imports
        $oldContent = $content
        $content = $content -replace 'import \{ setupPageScrollAnimations \} from "[^"]*";\s*', ''
        $content = $content -replace 'import \{ autoApplyMobileScrollAnimations \} from "[^"]*";\s*', ''
        $content = $content -replace 'import \{ initMobileScrollAnimations, forceContentVisibility \} from "[^"]*";\s*', ''
        $content = $content -replace 'import ScrollAnimatedSection from "[^"]*";\s*', ''
        
        if ($content -ne $oldContent) {
            $updated = $true
            Write-Host "  ✅ Removed scroll animation imports" -ForegroundColor Green
        }
        
        # Remove scroll animation function calls
        $oldContent = $content
        $content = $content -replace 'setupPageScrollAnimations\(\);\s*', ''
        $content = $content -replace 'autoApplyMobileScrollAnimations\(\);\s*', ''
        $content = $content -replace 'initMobileScrollAnimations\(\);\s*', ''
        $content = $content -replace 'forceContentVisibility\(\);\s*', ''
        
        if ($content -ne $oldContent) {
            $updated = $true
            Write-Host "  ✅ Removed scroll animation function calls" -ForegroundColor Green
        }
        
        # Remove scroll animation comments
        $oldContent = $content
        $content = $content -replace '// Setup scroll animations\s*', ''
        $content = $content -replace '// Auto-apply scroll animations.*\s*', ''
        $content = $content -replace '// Initialize mobile-friendly scroll animations\s*', ''
        $content = $content -replace '// Force content visibility.*\s*', ''
        
        if ($content -ne $oldContent) {
            $updated = $true
            Write-Host "  ✅ Removed scroll animation comments" -ForegroundColor Green
        }
        
        # Remove ScrollAnimatedSection components
        $oldContent = $content
        $content = $content -replace '<ScrollAnimatedSection[^>]*>', '<div>'
        $content = $content -replace '</ScrollAnimatedSection>', '</div>'
        
        if ($content -ne $oldContent) {
            $updated = $true
            Write-Host "  ✅ Removed ScrollAnimatedSection components" -ForegroundColor Green
        }
        
        # Remove animation classes from JSX
        $oldContent = $content
        $content = $content -replace 'className="[^"]*fade-in-[^"]*"', 'className=""'
        $content = $content -replace 'className="[^"]*scale-in[^"]*"', 'className=""'
        $content = $content -replace 'className="[^"]*slide-in-[^"]*"', 'className=""'
        $content = $content -replace 'className="[^"]*scroll-animate[^"]*"', 'className=""'
        
        if ($content -ne $oldContent) {
            $updated = $true
            Write-Host "  ✅ Removed animation classes from JSX" -ForegroundColor Green
        }
        
        if ($updated) {
            Set-Content $page $content -NoNewline
            Write-Host "  ✅ Updated successfully" -ForegroundColor Green
            $successCount++
        } else {
            Write-Host "  ⏭️  No scroll animations found" -ForegroundColor Gray
        }
    } else {
        Write-Host "  ❌ File not found: $page" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "✅ Scroll animation removal completed!" -ForegroundColor Green
Write-Host "📊 Updated $successCount/$totalCount files" -ForegroundColor Cyan
Write-Host ""
Write-Host "🎯 All scroll animations have been removed!" -ForegroundColor Green
Write-Host "📱 All content is now visible immediately on all devices" -ForegroundColor Cyan