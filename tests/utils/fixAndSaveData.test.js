const { fixAndSaveData } = require('../../utils/fixAndSaveData');
const outputFile = require('../assets/moviesTest.json');

const inputPath = './tests/assets/moviesTest.csv';
const outputPath = './tests/assets/moviesTest.json';

const expectedOutput = [
  {
    annee: 2020,
    nbre_de_prets: 67,
    titre: "L'amie prodigieuse. Saison 2 : le nouveau nom, intégrale",
    auteur: 'Ferrante, Elena',
    editeur: '-',
    indice: 'Issy-les-Moulineaux : Studio Canal vidéo, 2020',
    bib: 'TV AMIE',
    cote: 'CABANIS',
    cat_1: 'TV AMIE',
    cat_2: 'A',
  },
  {
    annee: 2020,
    nbre_de_prets: 86,
    titre: 'Gaston Lagaffe',
    auteur: 'Martin-Laval, Pierre-François',
    editeur: '-',
    indice: 'Neuilly-sur-Seine : UGC Vidéo, 2018',
    bib: 'C GAST',
    cote: 'CABANIS',
    cat_1: 'C GAST',
    cat_2: 'E',
  },
  {
    annee: 2020,
    nbre_de_prets: 91,
    titre: 'Le vent se lève',
    auteur: 'Miyazaki, Hayao',
    editeur: '-',
    indice: 'Marne-la-Vallée : The Walt Disney Company, 2014',
    bib: 'A VENT',
    cote: 'CABANIS',
    cat_1: 'Anim VENT',
    cat_2: 'E',
  },
  {
    annee: 2020,
    nbre_de_prets: 102,
    titre: 'Dilili à Paris',
    auteur: 'Ocelot, Michel',
    editeur: '-',
    indice: 'Issy-les-Moulineaux : France Télévisions Distribution, 2019',
    bib: 'A DILI',
    cote: 'CABANIS',
    cat_1: 'Anim DILI',
    cat_2: 'E',
  },
  {
    annee: 2019,
    nbre_de_prets: 120,
    titre: 'Kirikou et les bêtes sauvages',
    auteur: 'Ocelot, Michel',
    editeur: '-',
    indice: 'Paris : France Télévision Distribution [éd.], 2006',
    bib: 'A KIRI',
    cote: 'CABANIS',
    cat_1: 'A KIRI',
    cat_2: 'E',
  },
  {
    annee: 2019,
    nbre_de_prets: 136,
    titre: "L'âge de glace 2",
    auteur: 'Saldanha, Carlos',
    editeur: '-',
    indice: 'U.S.A. : Twentieth Century Fox Home Entertainment, 2006',
    bib: 'A AGED',
    cote: 'CABANIS',
    cat_1: 'Anim AGED',
    cat_2: 'E',
  },
  {
    annee: 2019,
    nbre_de_prets: 139,
    titre: 'Le Trône de Fer. Saison 4, intégrale',
    auteur: 'Benioff, David',
    editeur: '-',
    indice: '[S.l.] Etats-Unis : Home Box Office, 2015',
    bib: 'TV TRON',
    cote: 'CABANIS',
    cat_1: 'TV TRON',
    cat_2: 'A',
  },
  {
    annee: 2019,
    nbre_de_prets: 139,
    titre: 'Pirates des Caraïbes 2 : le secret du coffre maudit',
    auteur: 'Verbinski, Gore',
    editeur: '-',
    indice: '[S.l.] : Walt Disney France, 2007',
    bib: 'AV PIRA',
    cote: 'CABANIS',
    cat_1: 'AV PIRA',
    cat_2: 'A',
  },
  {
    annee: 2017,
    nbre_de_prets: 192,
    titre: 'Encore heureux',
    auteur: 'Graffin, Benoît',
    editeur: 'Paris : EuropaCorp, 2016',
    indice: 'C ENCO',
    bib: 'CABANIS',
    cote: 'C ENCO',
    cat_1: 'A',
    cat_2: 'DVDFIC',
  },
  {
    annee: 2017,
    nbre_de_prets: 155,
    titre: 'Mission : Noël : les aventures de la famille Noël',
    auteur: 'Smith, Sarah',
    editeur: 'Suresnes : Sony Pictures Home Entertainment, 2012',
    indice: 'A MISS',
    bib: 'CABANIS',
    cote: 'A MISS',
    cat_1: 'E',
    cat_2: 'DVDFIC',
  },
  {
    annee: 2019,
    nbre_de_prets: 122,
    titre: 'Le labyrinthe : la terre brûlée',
    auteur: 'Ball, Wes',
    editeur: '-',
    indice: 'Paris : 20th Century Fox, 2016',
    bib: 'SF LABY',
    cote: 'CABANIS',
    cat_1: 'SF LABY',
    cat_2: 'A',
  },
];

describe('fixing and saving csv file to json', () => {
  it('should replace character pattern with accent character', async () => {
    await fixAndSaveData(inputPath, outputPath);
    expect(outputFile).toEqual(expectedOutput);
  });
});
