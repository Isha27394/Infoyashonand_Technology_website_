// Batch update script to add scroll animations to all pages
import { promises as fs } from 'fs';
import path from 'path';

const pagePaths = [
  'src/pages/Blog/Esalary.js',
  'src/pages/Blog/Expertguruji.js', 
  'src/pages/Blog/ExpertSkilll.js',
  'src/pages/Blog/Kamdhanda.js',
  'src/pages/Blog/DigitalSchool1.js',
  'src/pages/Blog/Scroller.js',
  'src/pages/Blog/PatTantra .js',
  'src/pages/Blog/Ecare1.js',
  'src/pages/JobDetails/AndroidDeveloper.js',
  'src/pages/JobDetails/Digitalmarket.js',
  'src/pages/JobDetails/JobApplicationForm.js',
  'src/pages/JobDetails/Software.js',
  'src/pages/JobDetails/Ui.js',
  'src/pages/JobDetails/WebDeveloper.js',
  'src/pages/Leadership/Ceo.js',
  'src/pages/Leadership/CeoMadam.js',
  'src/pages/InternshipContent.js',
  'src/pages/Internship.js',
  'src/pages/Portfolio/DigitalSchool.js',
  'src/pages/refund.js',
  'src/pages/terms.js',
  'src/pages/Blog.js'
];

const addScrollAnimationsToFile = async (filePath) => {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    let content = await fs.readFile(fullPath, 'utf8');
    
    // Check if already has scroll animations
    if (content.includes('autoApplyMobileScrollAnimations') || 
        content.includes('ScrollAnimatedSection')) {
      console.log(`Skipping ${filePath} - already has scroll animations`);
      return;
    }
    
    // Add import for auto-apply function
    const importRegex = /import React[^;]*;/;
    if (importRegex.test(content)) {
      content = content.replace(
        importRegex,
        `$&\nimport { autoApplyMobileScrollAnimations } from "../utils/applyScrollAnimations";`
      );
    }
    
    // Find useEffect and add auto-apply call
    const useEffectRegex = /useEffect\(\(\) => \{([^}]*)\}, \[\]\);/;
    if (useEffectRegex.test(content)) {
      content = content.replace(
        useEffectRegex,
        (match, effectBody) => {
          if (!effectBody.includes('autoApplyMobileScrollAnimations')) {
            return match.replace(
              effectBody,
              `${effectBody}\n    // Auto-apply scroll animations for mobile\n    autoApplyMobileScrollAnimations();`
            );
          }
          return match;
        }
      );
    } else {
      // Add new useEffect if none exists
      const componentStart = /export default function \w+\(\) \{/;
      if (componentStart.test(content)) {
        content = content.replace(
          componentStart,
          `$&\n  useEffect(() => {\n    autoApplyMobileScrollAnimations();\n  }, []);\n`
        );
      }
    }
    
    await fs.writeFile(fullPath, content, 'utf8');
    console.log(`Updated ${filePath} with scroll animations`);
    
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
  }
};

// Run the batch update
const runBatchUpdate = async () => {
  console.log('Starting batch update for scroll animations...');
  
  for (const pagePath of pagePaths) {
    await addScrollAnimationsToFile(pagePath);
  }
  
  console.log('Batch update completed!');
};

export { runBatchUpdate, addScrollAnimationsToFile };