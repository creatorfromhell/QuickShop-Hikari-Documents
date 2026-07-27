# Databases

QuickShop-Hikari supports two database types: `H2` and `MySQL`.

## Configuration

```yaml
#MySQL database settings.
database:
  #false = use local SQLite database.
  #true = use local/remote MySQL database.
  mysql: false
  # The database address. (Only required if mysql is true)
  host: localhost
  # The database port. (Only required if mysql is true)
  port: 3306
  # The database names. (Only required if mysql is true)
  database: quickshop
  # The database username. (Only required if mysql is true)
  user: root
  # The database password. (Only required if mysql is true)
  password: passwd
  # Set prefix to "none" to remove prefix (Both local and remote will be used).
  prefix: "qs_"
  # Should QuickShop use SSL for database connections?  (Only required if mysql is true)
  usessl: false
  # Properties for creating connections, you can add your own properties for datasource here. (Both local and remote will be used).
  properties:
    connection-timeout: 60000
    validation-timeout: 3000
    idle-timeout: 60000
    login-timeout: 10
    maxLifeTime: 60000
    maximum-pool-size: 8
    minimum-idle: 2
    cachePrepStmts: true
    prepStmtCacheSize: 250
    prepStmtCacheSqlLimit: 2048
    useUnicode: true
    characterEncoding: utf8
```

## Migrate

To migrate your QuickShop data from one database type to another, export the data and then import it into the new database.

Run `/quickshop export` in the console. QuickShop will create a ZIP archive containing the shop data.

![exported data](img/database-export.png)

Stop the server, switch the data source, and start the server again.  
The shops will initially appear to be missing because the new data source is empty; restore them from the export.

Rename the exported ZIP file to `recovery.zip`, run `/quickshop recovery`, and restart the server. All shops should then be restored.
