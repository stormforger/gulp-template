FROM stormforger/cli AS sf-cli
FROM node

COPY package.json package-lock.json /src/cases/

WORKDIR /src/cases/

RUN npm install

COPY --from=sf-cli /bin/forge /bin/forge

ENTRYPOINT [ "npm", "run" ]
