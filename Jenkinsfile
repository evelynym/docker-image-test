pipeline {
    
  environment {
    registry = "evelynym/nodeproj"
    registryCredential = 'dockerlogin'
  }

  agent any

  stages {

    stage('Checkout Source') {
      steps {
        git 'https://github.com/evelynym/docker-image-test.git'
      }
    }
    
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + "latest"
        }
      }
    }
    stage('Deploy Image') {
      steps{
         script {
            docker.withRegistry( '', registryCredential ) {
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
