pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/yourusername/node-docker-jenkins.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Docker Build') {
            steps {
                sh 'docker build -t node-docker-jenkins .'
            }
        }
        stage('Docker Compose Up') {
            steps {
                sh 'docker-compose up -d --build'
            }
        }
    }
}
