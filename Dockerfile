FROM stormforger/cli AS sf-cli
FROM node:11

WORKDIR /src/
COPY --from=sf-cli /bin/forge /bin/forge

ENTRYPOINT [ "npm" ]
