# PowerShell script to add scroll animations to all pages

$pages = @(
    "src/pages/Blog/Expertguruji.js",
    "src/pages/Blog/ExpertSkilll.js", 
    "src/pages/Blog/Kamdhanda.js",
    "src/pages/Blog/DigitalSchool1.js",
    "src/pages/Blog/Scroller.js",
    "src/pages/Blog/PatTantra .js",
    "src/pages/Blog/Ecare1.js",
    "src/pages/JobDetails/AndroidDeveloper.js",
    "src/pages/JobDetails/Digitalmarket.js",
    "src/pages/JobDetails/JobApplicationForm.js",
    "src/pages/JobDetails/Software.js",
    "src/pages/JobDetails/Ui.js",
    "src/pages/JobDetails/WebDeveloper.js",
    "src/pages/Leadership/Ceo.js",
    "src/pages/Leadership/CeoMadam.js",
    "src/pages/InternshipContent.js",
    "src/pages/Portfolio/DigitalSchool.js",
    "src/pages/refund.js",
    "src/pages/terms.js"
)

foreach ($page in $pages) {
    if (Test-Path $page) {
        Write-Host "Updating $page..."
        
        $content = Get-Content $page -Raw
        
        # Skip if already has scroll animations
        if ($content -match "autoApplyMobileScrollAnimations" -or $content -match "ScrollAnimatedSection") {
            Write-Host "Skipping $page - already has scroll animations"
            continue
        }
        
        # Add import after React import
        $content = $content -replace '(import React[^;]*;)', '$1`nimport { autoApplyMobileScrollAnimations } from "../utils/applyScrollAnimations";'
        
        # Add to existing useEffect or create new one
        if ($content -match 'useEffect\(\(\) => \{([^}]*)\}, \[\]\);') {
            $content = $content -replace '(useEffect\(\(\) => \{)', '$1`n    // Auto-apply scroll animations for mobile`n    autoApplyMobileScrollAnimations();`n'
        } elseif ($content -match 'export default function \w+\(\) \{') {
            $content = $content -replace '(export default function \w+\(\) \{)', '$1`n  useEffect(() => {`n    autoApplyMobileScrollAnimations();`n  }, []);`n'
        }
        
        Set-Content $page $content -NoNewline
        Write-Host "Updated $page successfully"
    } else {
        Write-Host "File not found: $page"
    }
}

Write-Host "Batch update completed!"