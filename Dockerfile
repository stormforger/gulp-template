FROM stormforger/cli AS sf-cli
FROM node:12

WORKDIR /src/
COPY --from=sf-cli /bin/forge /bin/forge

ENTRYPOINT [ "npm" ]
