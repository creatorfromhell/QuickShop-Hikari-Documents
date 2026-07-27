# AngelChest

:::info

Can't find where to download the JAR? [Click here](../faq/where-addons-compacts-at).

:::

This compatibility module is no longer maintained because AngelChest is no longer supported.

This compatibility module adds [AngelChest](https://www.spigotmc.org/resources/88214) support.

## How does it work?

The compatibility module registers listeners for `IslandDeletedEvent`, `IslandResettedEvent`, `TeamLeaveEvent`, and `TeamKickEvent`. It removes shops when an island is deleted or a team member is kicked from that island.

It also lets island owners override all shop permissions on their island, so they can modify or remove any shop there, even one created by another player.
