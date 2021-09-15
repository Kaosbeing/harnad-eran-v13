const { Command } = require('discord-akairo');

class HelpCommand extends Command {
    constructor() {
        super('help', {
            aliases: ['help', 'aide']
        });
    }

    exec(message) {
        let helpEmbed = this.client.utils.embed()
            .setColor("#717171")
            .setTitle("Aide sur les Commandes")
            .addFields(
                { name: "À propos :", value: "Toutes les commandes peuvent être effectuées avec ou sans majuscules, peu importe.\n <> = Impératif\n [] = Facultatif" },
                { name: "STATS <initiales>", value: "Envoie une fiche contenant toutes les statistiques d'un personnage." },
                { name: "STATUT/STATUS <initiales>", value: "Envoie une fiche contenant toutes les informations relatives à l'état d'un personnage." },
                { name: "DATE", value: "Affiche la date actuelle de l'univers, définie par Ena'" },
                { name: "GOD/DIEU [numéro]", value: "Renvoie une liste de tous les dieux, ou seulement les informations d'un Dieu correspondant au numéro indiqué." },
                { name: "ROLL <stat> <initiales> [modificateur]", value: "Effectue un test (d100) pour la statistique voulue, pour le personnage voulu. Applique un modificateur, si il est fourni." },
                { name: "ROLL <nombre>D<nombre>", value: "Roll un nombre défini de dés, de la valeur souhaitée. Comme DiceParser." },
                { name: "MONEY <initiales>", value: "Envoie une fiche contenant le total d'argent d'un personnage." },
                { name: "SESSION <initiales>", value: "Affiche la prochaine date de JDR de ce personnage." },
                { name: "Initiales", value: "AA - Acateacas Amygdalus\n CR = Carliotte Roseline\n UZ = Uhr'Zak Kashir Ombo\n BB = Belphoebe Brunehilda\n MZ = Mohrus Zamtrak\n AK = Améthyste Kraken\n EK = Elenket Mzururaji\n EL = Eléanor Van Moscović\n KW = Elijah Graussdaron" }
            )
            .setTimestamp()
            .setFooter(message.author.username, message.author.avatarURL());

            return message.reply({ embeds: [helpEmbed] });
    }
}

module.exports = HelpCommand;
