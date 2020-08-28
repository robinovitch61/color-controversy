## Attempt 1:

Used https://github.com/swagger-api/swagger-codegen

Ran:

```
docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate --config local/config.json \
    -i local/swagger.json \
    -l typescript-node \
    -o /local/generated
```

Then ran:

```
cd generated
npm install
npm run build
```

The run build step hung for a long time or ran out of heap space. Switching to https://github.com/mtennoe/swagger-typescript-codegen.
