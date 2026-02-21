# PowerShell script to fix mobile layout for all job details pages

$jobPages = @(
    "src/pages/JobDetails/Digitalmarket.js",
    "src/pages/JobDetails/JobApplicationForm.js", 
    "src/pages/JobDetails/Software.js",
    "src/pages/JobDetails/Ui.js"
)

$mobileCSS = @'
      {/* Mobile Responsive CSS */}
      <style>
        {`
          /* Desktop layout - default */
          .job-main-container {
            width: 85%;
            margin: 0 auto 60px auto;
            display: flex;
            gap: 35px;
          }
          
          .job-left-content {
            width: 70%;
          }
          
          .job-right-sidebar {
            width: 30%;
          }
          
          /* Mobile layout */
          @media (max-width: 768px) {
            .job-main-container {
              width: 95% !important;
              flex-direction: column !important;
              gap: 20px !important;
              padding: 0 15px !important;
            }
            
            .job-left-content {
              width: 100% !important;
              order: 1;
            }
            
            .job-right-sidebar {
              width: 100% !important;
              order: 2;
            }
          }
          
          /* Extra small mobile */
          @media (max-width: 480px) {
            .job-main-container {
              width: 100% !important;
              padding: 0 10px !important;
              gap: 15px !important;
            }
          }
        `}
      </style>
      
'@

$successCount = 0
$totalCount = $jobPages.Count

Write-Host "🚀 Fixing mobile layout for job details pages..." -ForegroundColor Green
Write-Host ""

foreach ($page in $jobPages) {
    if (Test-Path $page) {
        Write-Host "Processing $page..." -ForegroundColor Yellow
        
        $content = Get-Content $page -Raw
        $updated = $false
        
        # Add mobile CSS after return statement
        if ($content -match 'return \(\s*<>\s*\{/\* ================= HERO SECTION') {
            $content = $content -replace '(return \(\s*<>\s*)', "`$1`n$mobileCSS"
            $updated = $true
            Write-Host "  ✅ Added mobile CSS" -ForegroundColor Green
        }
        
        # Replace main container with class
        if ($content -match 'style=\{\{\s*width:\s*"85%",\s*margin:\s*"0 auto 60px auto",\s*display:\s*"flex",\s*gap:\s*"35px",\s*\}\}') {
            $content = $content -replace 'style=\{\{\s*width:\s*"85%",\s*margin:\s*"0 auto 60px auto",\s*display:\s*"flex",\s*gap:\s*"35px",\s*\}\}', 'className="job-main-container"'
            $updated = $true
            Write-Host "  ✅ Updated main container" -ForegroundColor Green
        }
        
        # Replace left content with class
        if ($content -match 'style=\{\{\s*width:\s*"70%"\s*\}\}') {
            $content = $content -replace 'style=\{\{\s*width:\s*"70%"\s*\}\}', 'className="job-left-content"'
            $updated = $true
            Write-Host "  ✅ Updated left content" -ForegroundColor Green
        }
        
        # Replace right sidebar with class
        if ($content -match 'style=\{\{\s*width:\s*"30%"\s*\}\}') {
            $content = $content -replace 'style=\{\{\s*width:\s*"30%"\s*\}\}', 'className="job-right-sidebar"'
            $updated = $true
            Write-Host "  ✅ Updated right sidebar" -ForegroundColor Green
        }
        
        if ($updated) {
            Set-Content $page $content -NoNewline
            Write-Host "  ✅ Updated successfully" -ForegroundColor Green
            $successCount++
        } else {
            Write-Host "  ⚠️  No changes needed or pattern not found" -ForegroundColor Yellow
        }
    } else {
        Write-Host "  ❌ File not found: $page" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "✅ Mobile layout fix completed!" -ForegroundColor Green
Write-Host "📊 Updated $successCount/$totalCount files" -ForegroundColor Cyan
Write-Host ""
Write-Host "📱 Job details pages now have mobile-responsive layout:" -ForegroundColor Green
Write-Host "   • Desktop: Side-by-side layout (70% + 30%)" -ForegroundColor White
Write-Host "   • Mobile: Stacked layout (100% width each)" -ForegroundColor White