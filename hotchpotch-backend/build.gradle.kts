plugins {
    kotlin("jvm") version "2.0.21"
    application
}

kotlin {
    jvmToolchain(21)
}

group = "it.komidawi"
version = "0.0.1-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(kotlin("test"))
}

tasks.test {
    useJUnitPlatform()
}

// To be able to run `./gradlew run`
application {
    mainClass.set("it.komidawi.MainKt")
}

// To be able to run with `java -jar app.jar`
tasks.withType<Jar> {
    manifest {
        attributes["Main-Class"] = "it.komidawi.MainKt"
    }
}
