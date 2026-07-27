# Privacy

When using the QuickShop-Hikari service, we will send the necessary and partial optional data to the relevant service provider.  

## bStats

We use [bStats.org](https://bstats.org/) to collect statistical indicators so that we can better improve our products.  

[bStats's Privacy Policy](https://bstats.org/privacy-policy)

All data collected will be displayed on this page: [bStats - QuickShop-Hikari](https://bstats.org/plugin/bukkit/QuickShop-Hikari/14281)

### Disable bStats metrics

To disable bStats metrics, update QuickShop-Hikari's privacy configuration:

```yaml
#The Privacy Controller allows you to enable or disable privacy-related options.
#To audit privacy-related activity, run `/quickshop paste` and check the `Privacy Logs` section.
#To opt out of bStats completely, open /plugins/bStats/config.yml.
privacy:
  # Category Control
  type:
    # Including bStats metrics with `Statistic - ` prefix, see all metrics we collected on https://bstats.org/plugin/bukkit/QuickShop-Hikari/14281
    STATISTIC: true
    # Including bStats metrics with `Research - ` prefix, see all metrics we collected on https://bstats.org/plugin/bukkit/QuickShop-Hikari/14281
    RESEARCH: true
```

Note: Previously collected data is not deleted from bStats. Contact the bStats administrators to request its removal.  
Note: QuickShop respects the global bStats setting. If bStats is disabled globally, QuickShop will not send data to bStats.  

## Rollbar Error Tracking

We use [Rollbar](https://rollbar.com/) to collect error reports. Errors related to QuickShop-Hikari may be submitted automatically to our Rollbar project.

You can check Rollbar's Privacy Policy [here](https://docs.rollbar.com/docs/privacy-policy).

Including:

* Time
* Error and StackTrace
* OS Name
* OS Arch
* OS Version
* System CPU Cores
* Java Version
* Server/Bukkit Build Version
* Server Players
* Online Mode
* Your QuickShop-Hikari unique ID

### Regenerate the QuickShop-Hikari unique ID

When you install QuickShop-Hikari for the first time, a unique ID is generated and written to `config.yml`.  
The ID is completely random and is not derived from any other information. It is used for bug tracking and other situations in which individual QuickShop-Hikari instances must be distinguished.  

In case you are sure that no addon is using this value, you can remove this from the configuration file so that QuickShop-Hikari will generate a new unique ID.

### Disable Rollbar error tracking

To disable Rollbar error tracking, update QuickShop-Hikari's configuration:

```yaml
# Should QS be allowed to automatically report errors to the author?
# It will also create a paste for data-recovery or debug when the server boots up.
auto-report-errors: true
```

Note: Previously collected data is not deleted from Rollbar. Contact a QuickShop-Hikari developer to request its removal.

## Paste

When you create a paste with `/quickshop paste`, your data is uploaded to [Lucko's Bytebin](https://bytebin.lucko.me/).  
To avoid uploading data, create a local paste with `/quickshop paste file`; it will be saved to your local disk instead.

The Paste Viewer is hosted on GitHub Pages and accesses uploaded data through a Cloudflare Worker.

Sensitive data is redacted while the paste is generated. Do not send your paste to anyone you do not trust.

## Updater

To check for updates, QuickShop-Hikari sends a request to CodeMC.io's Nexus service.  

To disable the update checker, adjust the configuration as follows:

```yaml
#Should QS be allowed to check for updates?
updater: false
```
