pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install') {
      steps {
        sh '''
          if [ -f package-lock.json ] || [ -f npm-shrinkwrap.json ]; then
            npm ci
          else
            npm install
          fi
        '''
      }
    }
  }
}
