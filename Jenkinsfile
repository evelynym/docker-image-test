node {

    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerlogin') {

        def customImage = docker.build("evelynym/nodeproj")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}