import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.phptravels.net',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/loginPage.js',
  },
  bootstrap:null,
  mocha: {},
  name: 'platzi-framework-bdd',
  plugins:{
    pauseOnFail:{},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    
    allure:{}, 
    atepbyStepallureReport:{
      enabled: true,
      screenshotForAllureReport: true,
    },
    screenshotOnFail:{
      enabled: true
    }
  }
}
