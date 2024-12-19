FROM eclipse-temurin:21

ENV APP_DIR=/app

# Use most recent dependencies to reduce vulnerabilities
# Clean leftovers after installation
RUN apt-get update && \
    apt-get --yes --no-install-recommends upgrade && \
    apt-get clean && \
    rm --recursive --force /var/lib/apt/lists/*

# Create app user not to use it as root
RUN mkdir --parents "$APP_DIR" && \
    groupadd --system appgroup && \
    useradd --system --gid appgroup appuser && \
    chown --recursive appuser:appgroup "$APP_DIR"

WORKDIR $APP_DIR

COPY build/libs/hotchpotch-backend-*-SNAPSHOT.jar "$APP_DIR/hotchpotch-backend.jar"

USER appuser

CMD ["java", "-jar", "hotchpotch-backend.jar"]
