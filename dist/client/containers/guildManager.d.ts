import { Guild } from 'discord.js';
import { Command, Plugin, GuildConfiguration } from '../../index';
export interface GuildManager {
    /**
     * The guild that this manager manages
     *
     * @type {Guild}
     * @memberof GuildManager
     */
    guild: Guild;
    /**
     * The configuration for this guild
     *
     * @type {GuildConfiguration}
     * @memberof GuildManager
     */
    config: GuildConfiguration;
    /**
     * Whether the given command or plugin is enabled
     *
     * @param {(Command | Plugin)} object The object to check against
     * @returns {boolean} Whether it is enabled or disabled
     * @memberof GuildManager
     */
    isEnabled(object: Command | Plugin): boolean;
    /**
     * Enable or disable the given command or plugin
     *
     * @param {(Command | Plugin)} object The object to toggle
     * @param {boolean} enabled Whether to enable or disable
     * @returns {Promise<void>} The completion
     * @memberof GuildManager
     */
    setEnabled(object: Command | Plugin, enabled: boolean): Promise<void>;
}
