pipeline {

  agent any

  stages {

    stage('Checkout Source') {
      steps {
        git 'https://github.com/evelynym/docker-image-test.git'
      }
    }

    stage('Pushing Image') {
      steps{
        script {
          docker.withRegistry( 'https://registry.hub.docker.com', 'dockerlogin') {
            dockerImage.push()
          }
        }
      }
    }

    stage('Deploying App to Kubernetes') {
      steps {
        script {
          kubernetesDeploy(configs: "deploymentservice.yml", kubeconfigId: "kubernetes")
        }
      }
    }

  }

}
