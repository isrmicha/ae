import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class ControleMetasService {
  //region
  dadosAplicacaoMock : Array<Object> = JSON.parse(`[
    {
      "Dat_Referencia": "2017-01-01 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 20864,
      "QtdFinalizadas": 109623,
      "QtdAbandonadas": 56509
    },
    {
      "Dat_Referencia": "2017-01-02 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 54920,
      "QtdFinalizadas": 214073,
      "QtdAbandonadas": 120770
    },
    {
      "Dat_Referencia": "2017-01-03 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 50746,
      "QtdFinalizadas": 199688,
      "QtdAbandonadas": 111212
    },
    {
      "Dat_Referencia": "2017-01-04 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 46529,
      "QtdFinalizadas": 188415,
      "QtdAbandonadas": 114404
    },
    {
      "Dat_Referencia": "2017-01-05 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 43461,
      "QtdFinalizadas": 175605,
      "QtdAbandonadas": 101398
    },
    {
      "Dat_Referencia": "2017-01-06 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 41013,
      "QtdFinalizadas": 168017,
      "QtdAbandonadas": 97612
    },
    {
      "Dat_Referencia": "2017-01-07 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 36543,
      "QtdFinalizadas": 146810,
      "QtdAbandonadas": 84882
    },
    {
      "Dat_Referencia": "2017-01-08 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 23308,
      "QtdFinalizadas": 101828,
      "QtdAbandonadas": 58417
    },
    {
      "Dat_Referencia": "2017-01-09 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 41741,
      "QtdFinalizadas": 161518,
      "QtdAbandonadas": 95919
    },
    {
      "Dat_Referencia": "2017-01-10 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 39277,
      "QtdFinalizadas": 155602,
      "QtdAbandonadas": 93674
    },
    {
      "Dat_Referencia": "2017-01-11 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 39285,
      "QtdFinalizadas": 155700,
      "QtdAbandonadas": 92086
    },
    {
      "Dat_Referencia": "2017-01-12 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 36503,
      "QtdFinalizadas": 143078,
      "QtdAbandonadas": 86696
    },
    {
      "Dat_Referencia": "2017-01-13 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 35457,
      "QtdFinalizadas": 139501,
      "QtdAbandonadas": 85737
    },
    {
      "Dat_Referencia": "2017-01-14 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27907,
      "QtdFinalizadas": 119038,
      "QtdAbandonadas": 72660
    },
    {
      "Dat_Referencia": "2017-01-15 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 18984,
      "QtdFinalizadas": 88512,
      "QtdAbandonadas": 52954
    },
    {
      "Dat_Referencia": "2017-01-16 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 33287,
      "QtdFinalizadas": 136339,
      "QtdAbandonadas": 86121
    },
    {
      "Dat_Referencia": "2017-01-17 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 34512,
      "QtdFinalizadas": 133653,
      "QtdAbandonadas": 86041
    },
    {
      "Dat_Referencia": "2017-01-18 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 32485,
      "QtdFinalizadas": 131199,
      "QtdAbandonadas": 88215
    },
    {
      "Dat_Referencia": "2017-01-19 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30818,
      "QtdFinalizadas": 128047,
      "QtdAbandonadas": 82848
    },
    {
      "Dat_Referencia": "2017-01-20 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30009,
      "QtdFinalizadas": 122822,
      "QtdAbandonadas": 78678
    },
    {
      "Dat_Referencia": "2017-01-21 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 25064,
      "QtdFinalizadas": 107522,
      "QtdAbandonadas": 68757
    },
    {
      "Dat_Referencia": "2017-01-22 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 17720,
      "QtdFinalizadas": 79776,
      "QtdAbandonadas": 51555
    },
    {
      "Dat_Referencia": "2017-01-23 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 31268,
      "QtdFinalizadas": 124976,
      "QtdAbandonadas": 82997
    },
    {
      "Dat_Referencia": "2017-01-24 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 31173,
      "QtdFinalizadas": 124426,
      "QtdAbandonadas": 87665
    },
    {
      "Dat_Referencia": "2017-01-25 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30575,
      "QtdFinalizadas": 123920,
      "QtdAbandonadas": 80460
    },
    {
      "Dat_Referencia": "2017-01-26 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29188,
      "QtdFinalizadas": 119316,
      "QtdAbandonadas": 80719
    },
    {
      "Dat_Referencia": "2017-01-27 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 31916,
      "QtdFinalizadas": 127775,
      "QtdAbandonadas": 89499
    },
    {
      "Dat_Referencia": "2017-01-28 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27454,
      "QtdFinalizadas": 107694,
      "QtdAbandonadas": 80468
    },
    {
      "Dat_Referencia": "2017-01-29 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 18148,
      "QtdFinalizadas": 81013,
      "QtdAbandonadas": 58304
    },
    {
      "Dat_Referencia": "2017-01-30 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 33170,
      "QtdFinalizadas": 127167,
      "QtdAbandonadas": 95419
    },
    {
      "Dat_Referencia": "2017-01-31 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 36802,
      "QtdFinalizadas": 132059,
      "QtdAbandonadas": 99347
    },
    {
      "Dat_Referencia": "2017-02-01 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 64540,
      "QtdFinalizadas": 221442,
      "QtdAbandonadas": 156759
    },
    {
      "Dat_Referencia": "2017-02-02 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 53874,
      "QtdFinalizadas": 186327,
      "QtdAbandonadas": 137233
    },
    {
      "Dat_Referencia": "2017-02-03 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 43199,
      "QtdFinalizadas": 164981,
      "QtdAbandonadas": 120965
    },
    {
      "Dat_Referencia": "2017-02-04 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 32885,
      "QtdFinalizadas": 132941,
      "QtdAbandonadas": 96473
    },
    {
      "Dat_Referencia": "2017-02-05 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 22711,
      "QtdFinalizadas": 96045,
      "QtdAbandonadas": 70057
    },
    {
      "Dat_Referencia": "2017-02-06 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 39967,
      "QtdFinalizadas": 151505,
      "QtdAbandonadas": 113869
    },
    {
      "Dat_Referencia": "2017-02-07 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 45331,
      "QtdFinalizadas": 152311,
      "QtdAbandonadas": 116969
    },
    {
      "Dat_Referencia": "2017-02-08 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 46612,
      "QtdFinalizadas": 145695,
      "QtdAbandonadas": 109130
    },
    {
      "Dat_Referencia": "2017-02-09 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 44007,
      "QtdFinalizadas": 142405,
      "QtdAbandonadas": 108498
    },
    {
      "Dat_Referencia": "2017-02-10 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 36309,
      "QtdFinalizadas": 126698,
      "QtdAbandonadas": 108751
    },
    {
      "Dat_Referencia": "2017-02-11 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28240,
      "QtdFinalizadas": 101031,
      "QtdAbandonadas": 90180
    },
    {
      "Dat_Referencia": "2017-02-12 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 13323,
      "QtdFinalizadas": 60816,
      "QtdAbandonadas": 50308
    },
    {
      "Dat_Referencia": "2017-02-13 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 36501,
      "QtdFinalizadas": 125777,
      "QtdAbandonadas": 108992
    },
    {
      "Dat_Referencia": "2017-02-14 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 34704,
      "QtdFinalizadas": 122947,
      "QtdAbandonadas": 104921
    },
    {
      "Dat_Referencia": "2017-02-15 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 33956,
      "QtdFinalizadas": 118205,
      "QtdAbandonadas": 104163
    },
    {
      "Dat_Referencia": "2017-02-16 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 31872,
      "QtdFinalizadas": 115475,
      "QtdAbandonadas": 100689
    },
    {
      "Dat_Referencia": "2017-02-17 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29733,
      "QtdFinalizadas": 110750,
      "QtdAbandonadas": 96585
    },
    {
      "Dat_Referencia": "2017-02-18 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 24684,
      "QtdFinalizadas": 100278,
      "QtdAbandonadas": 84618
    },
    {
      "Dat_Referencia": "2017-02-19 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 17453,
      "QtdFinalizadas": 71618,
      "QtdAbandonadas": 61855
    },
    {
      "Dat_Referencia": "2017-02-20 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30706,
      "QtdFinalizadas": 113173,
      "QtdAbandonadas": 99666
    },
    {
      "Dat_Referencia": "2017-02-21 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30553,
      "QtdFinalizadas": 109264,
      "QtdAbandonadas": 99415
    },
    {
      "Dat_Referencia": "2017-02-22 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30564,
      "QtdFinalizadas": 106174,
      "QtdAbandonadas": 96587
    },
    {
      "Dat_Referencia": "2017-02-23 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30285,
      "QtdFinalizadas": 111845,
      "QtdAbandonadas": 93799
    },
    {
      "Dat_Referencia": "2017-02-24 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28703,
      "QtdFinalizadas": 111878,
      "QtdAbandonadas": 102682
    },
    {
      "Dat_Referencia": "2017-02-25 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 24312,
      "QtdFinalizadas": 93122,
      "QtdAbandonadas": 84526
    },
    {
      "Dat_Referencia": "2017-02-26 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 16978,
      "QtdFinalizadas": 73556,
      "QtdAbandonadas": 61303
    },
    {
      "Dat_Referencia": "2017-02-27 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 22353,
      "QtdFinalizadas": 84710,
      "QtdAbandonadas": 73457
    },
    {
      "Dat_Referencia": "2017-02-28 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 18699,
      "QtdFinalizadas": 74924,
      "QtdAbandonadas": 64079
    },
    {
      "Dat_Referencia": "2017-03-01 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 45505,
      "QtdFinalizadas": 183749,
      "QtdAbandonadas": 146036
    },
    {
      "Dat_Referencia": "2017-03-02 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 50071,
      "QtdFinalizadas": 171636,
      "QtdAbandonadas": 138207
    },
    {
      "Dat_Referencia": "2017-03-03 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 45239,
      "QtdFinalizadas": 154607,
      "QtdAbandonadas": 127651
    },
    {
      "Dat_Referencia": "2017-03-04 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 35659,
      "QtdFinalizadas": 130615,
      "QtdAbandonadas": 107183
    },
    {
      "Dat_Referencia": "2017-03-05 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 22680,
      "QtdFinalizadas": 85365,
      "QtdAbandonadas": 73857
    },
    {
      "Dat_Referencia": "2017-03-06 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 38252,
      "QtdFinalizadas": 137579,
      "QtdAbandonadas": 119957
    },
    {
      "Dat_Referencia": "2017-03-07 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 37689,
      "QtdFinalizadas": 136182,
      "QtdAbandonadas": 127302
    },
    {
      "Dat_Referencia": "2017-03-08 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 34886,
      "QtdFinalizadas": 123419,
      "QtdAbandonadas": 111202
    },
    {
      "Dat_Referencia": "2017-03-09 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 32766,
      "QtdFinalizadas": 115239,
      "QtdAbandonadas": 105118
    },
    {
      "Dat_Referencia": "2017-03-10 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 31541,
      "QtdFinalizadas": 115691,
      "QtdAbandonadas": 103684
    },
    {
      "Dat_Referencia": "2017-03-11 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 25395,
      "QtdFinalizadas": 95395,
      "QtdAbandonadas": 88962
    },
    {
      "Dat_Referencia": "2017-03-12 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 17967,
      "QtdFinalizadas": 73625,
      "QtdAbandonadas": 64203
    },
    {
      "Dat_Referencia": "2017-03-13 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 33237,
      "QtdFinalizadas": 114925,
      "QtdAbandonadas": 105073
    },
    {
      "Dat_Referencia": "2017-03-14 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 33427,
      "QtdFinalizadas": 113875,
      "QtdAbandonadas": 104881
    },
    {
      "Dat_Referencia": "2017-03-15 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 34470,
      "QtdFinalizadas": 106723,
      "QtdAbandonadas": 100439
    },
    {
      "Dat_Referencia": "2017-03-16 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 32180,
      "QtdFinalizadas": 107826,
      "QtdAbandonadas": 101392
    },
    {
      "Dat_Referencia": "2017-03-17 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 23200,
      "QtdFinalizadas": 94820,
      "QtdAbandonadas": 103739
    },
    {
      "Dat_Referencia": "2017-03-18 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 24736,
      "QtdFinalizadas": 87928,
      "QtdAbandonadas": 84174
    },
    {
      "Dat_Referencia": "2017-03-19 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 13910,
      "QtdFinalizadas": 51007,
      "QtdAbandonadas": 50018
    },
    {
      "Dat_Referencia": "2017-03-20 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 31887,
      "QtdFinalizadas": 105181,
      "QtdAbandonadas": 103030
    },
    {
      "Dat_Referencia": "2017-03-21 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 31448,
      "QtdFinalizadas": 100338,
      "QtdAbandonadas": 99614
    },
    {
      "Dat_Referencia": "2017-03-22 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30220,
      "QtdFinalizadas": 97029,
      "QtdAbandonadas": 97009
    },
    {
      "Dat_Referencia": "2017-03-23 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27692,
      "QtdFinalizadas": 98681,
      "QtdAbandonadas": 94266
    },
    {
      "Dat_Referencia": "2017-03-24 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 26522,
      "QtdFinalizadas": 97657,
      "QtdAbandonadas": 90650
    },
    {
      "Dat_Referencia": "2017-03-25 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 19950,
      "QtdFinalizadas": 77046,
      "QtdAbandonadas": 75472
    },
    {
      "Dat_Referencia": "2017-03-26 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 14708,
      "QtdFinalizadas": 60828,
      "QtdAbandonadas": 55962
    },
    {
      "Dat_Referencia": "2017-03-27 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 26300,
      "QtdFinalizadas": 90600,
      "QtdAbandonadas": 89288
    },
    {
      "Dat_Referencia": "2017-03-28 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29022,
      "QtdFinalizadas": 92751,
      "QtdAbandonadas": 94244
    },
    {
      "Dat_Referencia": "2017-03-29 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29936,
      "QtdFinalizadas": 86517,
      "QtdAbandonadas": 91879
    },
    {
      "Dat_Referencia": "2017-03-30 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27576,
      "QtdFinalizadas": 90612,
      "QtdAbandonadas": 102653
    },
    {
      "Dat_Referencia": "2017-03-31 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29832,
      "QtdFinalizadas": 94493,
      "QtdAbandonadas": 95277
    },
    {
      "Dat_Referencia": "2017-04-01 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 43978,
      "QtdFinalizadas": 138318,
      "QtdAbandonadas": 129456
    },
    {
      "Dat_Referencia": "2017-04-02 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28255,
      "QtdFinalizadas": 86294,
      "QtdAbandonadas": 83857
    },
    {
      "Dat_Referencia": "2017-04-03 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 48054,
      "QtdFinalizadas": 139248,
      "QtdAbandonadas": 134850
    },
    {
      "Dat_Referencia": "2017-04-04 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 44050,
      "QtdFinalizadas": 127691,
      "QtdAbandonadas": 126322
    },
    {
      "Dat_Referencia": "2017-04-05 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 41535,
      "QtdFinalizadas": 120420,
      "QtdAbandonadas": 121317
    },
    {
      "Dat_Referencia": "2017-04-06 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 40049,
      "QtdFinalizadas": 116681,
      "QtdAbandonadas": 118498
    },
    {
      "Dat_Referencia": "2017-04-07 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 35548,
      "QtdFinalizadas": 113686,
      "QtdAbandonadas": 116992
    },
    {
      "Dat_Referencia": "2017-04-08 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29410,
      "QtdFinalizadas": 95039,
      "QtdAbandonadas": 101235
    },
    {
      "Dat_Referencia": "2017-04-09 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 19853,
      "QtdFinalizadas": 74839,
      "QtdAbandonadas": 75071
    },
    {
      "Dat_Referencia": "2017-04-10 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 34997,
      "QtdFinalizadas": 111219,
      "QtdAbandonadas": 116858
    },
    {
      "Dat_Referencia": "2017-04-11 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 33378,
      "QtdFinalizadas": 106658,
      "QtdAbandonadas": 112478
    },
    {
      "Dat_Referencia": "2017-04-12 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 31568,
      "QtdFinalizadas": 99616,
      "QtdAbandonadas": 107581
    },
    {
      "Dat_Referencia": "2017-04-13 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29148,
      "QtdFinalizadas": 94678,
      "QtdAbandonadas": 100712
    },
    {
      "Dat_Referencia": "2017-04-14 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 20031,
      "QtdFinalizadas": 69892,
      "QtdAbandonadas": 71712
    },
    {
      "Dat_Referencia": "2017-04-15 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 23706,
      "QtdFinalizadas": 78944,
      "QtdAbandonadas": 81426
    },
    {
      "Dat_Referencia": "2017-04-16 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 16185,
      "QtdFinalizadas": 56077,
      "QtdAbandonadas": 61315
    },
    {
      "Dat_Referencia": "2017-04-17 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 32881,
      "QtdFinalizadas": 97557,
      "QtdAbandonadas": 105211
    },
    {
      "Dat_Referencia": "2017-04-18 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 32757,
      "QtdFinalizadas": 93966,
      "QtdAbandonadas": 101694
    },
    {
      "Dat_Referencia": "2017-04-19 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30009,
      "QtdFinalizadas": 92265,
      "QtdAbandonadas": 98472
    },
    {
      "Dat_Referencia": "2017-04-20 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27947,
      "QtdFinalizadas": 90852,
      "QtdAbandonadas": 100704
    },
    {
      "Dat_Referencia": "2017-04-21 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 22032,
      "QtdFinalizadas": 72824,
      "QtdAbandonadas": 77632
    },
    {
      "Dat_Referencia": "2017-04-22 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 21713,
      "QtdFinalizadas": 68740,
      "QtdAbandonadas": 77287
    },
    {
      "Dat_Referencia": "2017-04-23 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 13651,
      "QtdFinalizadas": 45015,
      "QtdAbandonadas": 48397
    },
    {
      "Dat_Referencia": "2017-04-24 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29485,
      "QtdFinalizadas": 88955,
      "QtdAbandonadas": 98244
    },
    {
      "Dat_Referencia": "2017-04-25 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29760,
      "QtdFinalizadas": 89395,
      "QtdAbandonadas": 99414
    },
    {
      "Dat_Referencia": "2017-04-26 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 32022,
      "QtdFinalizadas": 88331,
      "QtdAbandonadas": 102188
    },
    {
      "Dat_Referencia": "2017-04-27 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 31198,
      "QtdFinalizadas": 95347,
      "QtdAbandonadas": 100273
    },
    {
      "Dat_Referencia": "2017-04-28 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 22694,
      "QtdFinalizadas": 87993,
      "QtdAbandonadas": 94660
    },
    {
      "Dat_Referencia": "2017-04-29 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 24801,
      "QtdFinalizadas": 82578,
      "QtdAbandonadas": 90642
    },
    {
      "Dat_Referencia": "2017-04-30 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 17223,
      "QtdFinalizadas": 58192,
      "QtdAbandonadas": 65030
    },
    {
      "Dat_Referencia": "2017-05-01 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 32357,
      "QtdFinalizadas": 108838,
      "QtdAbandonadas": 109177
    },
    {
      "Dat_Referencia": "2017-05-02 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 48915,
      "QtdFinalizadas": 144422,
      "QtdAbandonadas": 154227
    },
    {
      "Dat_Referencia": "2017-05-03 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 48229,
      "QtdFinalizadas": 135261,
      "QtdAbandonadas": 156341
    },
    {
      "Dat_Referencia": "2017-05-04 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 41877,
      "QtdFinalizadas": 121864,
      "QtdAbandonadas": 123957
    },
    {
      "Dat_Referencia": "2017-05-05 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 38568,
      "QtdFinalizadas": 108955,
      "QtdAbandonadas": 118747
    },
    {
      "Dat_Referencia": "2017-05-06 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30105,
      "QtdFinalizadas": 92583,
      "QtdAbandonadas": 104343
    },
    {
      "Dat_Referencia": "2017-05-07 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 21589,
      "QtdFinalizadas": 69405,
      "QtdAbandonadas": 75091
    },
    {
      "Dat_Referencia": "2017-05-08 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 36149,
      "QtdFinalizadas": 104204,
      "QtdAbandonadas": 119772
    },
    {
      "Dat_Referencia": "2017-05-09 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 34467,
      "QtdFinalizadas": 100009,
      "QtdAbandonadas": 115939
    },
    {
      "Dat_Referencia": "2017-05-10 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 33237,
      "QtdFinalizadas": 99536,
      "QtdAbandonadas": 114094
    },
    {
      "Dat_Referencia": "2017-05-11 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 33957,
      "QtdFinalizadas": 97793,
      "QtdAbandonadas": 109200
    },
    {
      "Dat_Referencia": "2017-05-12 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 18327,
      "QtdFinalizadas": 51625,
      "QtdAbandonadas": 61408
    },
    {
      "Dat_Referencia": "2017-05-13 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 26576,
      "QtdFinalizadas": 83762,
      "QtdAbandonadas": 93479
    },
    {
      "Dat_Referencia": "2017-05-14 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 20109,
      "QtdFinalizadas": 73224,
      "QtdAbandonadas": 83572
    },
    {
      "Dat_Referencia": "2017-05-15 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 35079,
      "QtdFinalizadas": 98658,
      "QtdAbandonadas": 114238
    },
    {
      "Dat_Referencia": "2017-05-16 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 34126,
      "QtdFinalizadas": 98209,
      "QtdAbandonadas": 110900
    },
    {
      "Dat_Referencia": "2017-05-17 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 31308,
      "QtdFinalizadas": 92145,
      "QtdAbandonadas": 105696
    },
    {
      "Dat_Referencia": "2017-05-18 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29196,
      "QtdFinalizadas": 87435,
      "QtdAbandonadas": 100679
    },
    {
      "Dat_Referencia": "2017-05-19 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28243,
      "QtdFinalizadas": 89463,
      "QtdAbandonadas": 102058
    },
    {
      "Dat_Referencia": "2017-05-20 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 23560,
      "QtdFinalizadas": 73429,
      "QtdAbandonadas": 86056
    },
    {
      "Dat_Referencia": "2017-05-21 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 13892,
      "QtdFinalizadas": 48383,
      "QtdAbandonadas": 52680
    },
    {
      "Dat_Referencia": "2017-05-22 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 32038,
      "QtdFinalizadas": 92130,
      "QtdAbandonadas": 114994
    },
    {
      "Dat_Referencia": "2017-05-23 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30302,
      "QtdFinalizadas": 90299,
      "QtdAbandonadas": 102578
    },
    {
      "Dat_Referencia": "2017-05-24 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30131,
      "QtdFinalizadas": 88657,
      "QtdAbandonadas": 102243
    },
    {
      "Dat_Referencia": "2017-05-25 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27828,
      "QtdFinalizadas": 85311,
      "QtdAbandonadas": 97962
    },
    {
      "Dat_Referencia": "2017-05-26 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27488,
      "QtdFinalizadas": 82791,
      "QtdAbandonadas": 95881
    },
    {
      "Dat_Referencia": "2017-05-27 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 21167,
      "QtdFinalizadas": 71012,
      "QtdAbandonadas": 82133
    },
    {
      "Dat_Referencia": "2017-05-28 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 17167,
      "QtdFinalizadas": 55844,
      "QtdAbandonadas": 61719
    },
    {
      "Dat_Referencia": "2017-05-29 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30057,
      "QtdFinalizadas": 90620,
      "QtdAbandonadas": 104402
    },
    {
      "Dat_Referencia": "2017-05-30 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29576,
      "QtdFinalizadas": 89481,
      "QtdAbandonadas": 103265
    },
    {
      "Dat_Referencia": "2017-05-31 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30402,
      "QtdFinalizadas": 89467,
      "QtdAbandonadas": 105447
    },
    {
      "Dat_Referencia": "2017-06-01 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 52853,
      "QtdFinalizadas": 161312,
      "QtdAbandonadas": 170305
    },
    {
      "Dat_Referencia": "2017-06-02 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 45856,
      "QtdFinalizadas": 130357,
      "QtdAbandonadas": 136113
    },
    {
      "Dat_Referencia": "2017-06-03 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 32479,
      "QtdFinalizadas": 99558,
      "QtdAbandonadas": 109052
    },
    {
      "Dat_Referencia": "2017-06-04 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 21444,
      "QtdFinalizadas": 71874,
      "QtdAbandonadas": 77495
    },
    {
      "Dat_Referencia": "2017-06-05 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 37303,
      "QtdFinalizadas": 115049,
      "QtdAbandonadas": 129159
    },
    {
      "Dat_Referencia": "2017-06-06 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 36688,
      "QtdFinalizadas": 113262,
      "QtdAbandonadas": 130086
    },
    {
      "Dat_Referencia": "2017-06-07 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 37133,
      "QtdFinalizadas": 110980,
      "QtdAbandonadas": 127237
    },
    {
      "Dat_Referencia": "2017-06-08 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 38046,
      "QtdFinalizadas": 104495,
      "QtdAbandonadas": 118299
    },
    {
      "Dat_Referencia": "2017-06-09 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 31858,
      "QtdFinalizadas": 94489,
      "QtdAbandonadas": 110844
    },
    {
      "Dat_Referencia": "2017-06-10 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 25594,
      "QtdFinalizadas": 84057,
      "QtdAbandonadas": 95527
    },
    {
      "Dat_Referencia": "2017-06-11 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 17679,
      "QtdFinalizadas": 59507,
      "QtdAbandonadas": 68027
    },
    {
      "Dat_Referencia": "2017-06-12 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30212,
      "QtdFinalizadas": 93978,
      "QtdAbandonadas": 107983
    },
    {
      "Dat_Referencia": "2017-06-13 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30660,
      "QtdFinalizadas": 92976,
      "QtdAbandonadas": 108292
    },
    {
      "Dat_Referencia": "2017-06-14 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30019,
      "QtdFinalizadas": 91487,
      "QtdAbandonadas": 110629
    },
    {
      "Dat_Referencia": "2017-06-15 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 23617,
      "QtdFinalizadas": 73872,
      "QtdAbandonadas": 83801
    },
    {
      "Dat_Referencia": "2017-06-16 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 26834,
      "QtdFinalizadas": 85858,
      "QtdAbandonadas": 102966
    },
    {
      "Dat_Referencia": "2017-06-17 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 22564,
      "QtdFinalizadas": 71240,
      "QtdAbandonadas": 85914
    },
    {
      "Dat_Referencia": "2017-06-18 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 15835,
      "QtdFinalizadas": 56968,
      "QtdAbandonadas": 65339
    },
    {
      "Dat_Referencia": "2017-06-19 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30656,
      "QtdFinalizadas": 88560,
      "QtdAbandonadas": 105096
    },
    {
      "Dat_Referencia": "2017-06-20 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29357,
      "QtdFinalizadas": 86671,
      "QtdAbandonadas": 103995
    },
    {
      "Dat_Referencia": "2017-06-21 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28358,
      "QtdFinalizadas": 83873,
      "QtdAbandonadas": 103565
    },
    {
      "Dat_Referencia": "2017-06-22 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27469,
      "QtdFinalizadas": 81905,
      "QtdAbandonadas": 101846
    },
    {
      "Dat_Referencia": "2017-06-23 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 23675,
      "QtdFinalizadas": 74231,
      "QtdAbandonadas": 91383
    },
    {
      "Dat_Referencia": "2017-06-24 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 18477,
      "QtdFinalizadas": 59235,
      "QtdAbandonadas": 74331
    },
    {
      "Dat_Referencia": "2017-06-25 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 13403,
      "QtdFinalizadas": 43397,
      "QtdAbandonadas": 53402
    },
    {
      "Dat_Referencia": "2017-06-26 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29108,
      "QtdFinalizadas": 78176,
      "QtdAbandonadas": 100984
    },
    {
      "Dat_Referencia": "2017-06-27 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29394,
      "QtdFinalizadas": 78775,
      "QtdAbandonadas": 99516
    },
    {
      "Dat_Referencia": "2017-06-28 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29418,
      "QtdFinalizadas": 80394,
      "QtdAbandonadas": 101861
    },
    {
      "Dat_Referencia": "2017-06-29 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28365,
      "QtdFinalizadas": 80671,
      "QtdAbandonadas": 101969
    },
    {
      "Dat_Referencia": "2017-06-30 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 24511,
      "QtdFinalizadas": 80316,
      "QtdAbandonadas": 101503
    },
    {
      "Dat_Referencia": "2017-07-01 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 43101,
      "QtdFinalizadas": 121669,
      "QtdAbandonadas": 140971
    },
    {
      "Dat_Referencia": "2017-07-02 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27337,
      "QtdFinalizadas": 80017,
      "QtdAbandonadas": 89822
    },
    {
      "Dat_Referencia": "2017-07-03 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 39434,
      "QtdFinalizadas": 124975,
      "QtdAbandonadas": 141729
    },
    {
      "Dat_Referencia": "2017-07-04 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 34877,
      "QtdFinalizadas": 108749,
      "QtdAbandonadas": 121516
    },
    {
      "Dat_Referencia": "2017-07-05 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 32481,
      "QtdFinalizadas": 102986,
      "QtdAbandonadas": 118968
    },
    {
      "Dat_Referencia": "2017-07-06 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 36027,
      "QtdFinalizadas": 102480,
      "QtdAbandonadas": 127012
    },
    {
      "Dat_Referencia": "2017-07-07 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 32763,
      "QtdFinalizadas": 97043,
      "QtdAbandonadas": 121274
    },
    {
      "Dat_Referencia": "2017-07-08 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27183,
      "QtdFinalizadas": 83752,
      "QtdAbandonadas": 104707
    },
    {
      "Dat_Referencia": "2017-07-09 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 18858,
      "QtdFinalizadas": 60975,
      "QtdAbandonadas": 74847
    },
    {
      "Dat_Referencia": "2017-07-10 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 34974,
      "QtdFinalizadas": 99066,
      "QtdAbandonadas": 125008
    },
    {
      "Dat_Referencia": "2017-07-11 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 35015,
      "QtdFinalizadas": 96527,
      "QtdAbandonadas": 120965
    },
    {
      "Dat_Referencia": "2017-07-12 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 39734,
      "QtdFinalizadas": 108939,
      "QtdAbandonadas": 134305
    },
    {
      "Dat_Referencia": "2017-07-13 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 34176,
      "QtdFinalizadas": 93287,
      "QtdAbandonadas": 115584
    },
    {
      "Dat_Referencia": "2017-07-14 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30461,
      "QtdFinalizadas": 88581,
      "QtdAbandonadas": 110892
    },
    {
      "Dat_Referencia": "2017-07-15 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 24503,
      "QtdFinalizadas": 76838,
      "QtdAbandonadas": 97267
    },
    {
      "Dat_Referencia": "2017-07-16 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 18571,
      "QtdFinalizadas": 57924,
      "QtdAbandonadas": 70096
    },
    {
      "Dat_Referencia": "2017-07-17 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 31616,
      "QtdFinalizadas": 90505,
      "QtdAbandonadas": 114625
    },
    {
      "Dat_Referencia": "2017-07-18 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29678,
      "QtdFinalizadas": 87308,
      "QtdAbandonadas": 109829
    },
    {
      "Dat_Referencia": "2017-07-19 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30909,
      "QtdFinalizadas": 86302,
      "QtdAbandonadas": 109501
    },
    {
      "Dat_Referencia": "2017-07-20 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29049,
      "QtdFinalizadas": 83825,
      "QtdAbandonadas": 106944
    },
    {
      "Dat_Referencia": "2017-07-21 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27826,
      "QtdFinalizadas": 82429,
      "QtdAbandonadas": 104763
    },
    {
      "Dat_Referencia": "2017-07-22 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 22471,
      "QtdFinalizadas": 70651,
      "QtdAbandonadas": 90177
    },
    {
      "Dat_Referencia": "2017-07-23 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 13010,
      "QtdFinalizadas": 41634,
      "QtdAbandonadas": 52816
    },
    {
      "Dat_Referencia": "2017-07-24 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28925,
      "QtdFinalizadas": 81884,
      "QtdAbandonadas": 109283
    },
    {
      "Dat_Referencia": "2017-07-25 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29120,
      "QtdFinalizadas": 82617,
      "QtdAbandonadas": 107028
    },
    {
      "Dat_Referencia": "2017-07-26 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 32074,
      "QtdFinalizadas": 82501,
      "QtdAbandonadas": 109638
    },
    {
      "Dat_Referencia": "2017-07-27 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 31423,
      "QtdFinalizadas": 87519,
      "QtdAbandonadas": 106476
    },
    {
      "Dat_Referencia": "2017-07-28 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 26243,
      "QtdFinalizadas": 76786,
      "QtdAbandonadas": 97050
    },
    {
      "Dat_Referencia": "2017-07-29 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 21479,
      "QtdFinalizadas": 66939,
      "QtdAbandonadas": 85447
    },
    {
      "Dat_Referencia": "2017-07-30 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 15380,
      "QtdFinalizadas": 53366,
      "QtdAbandonadas": 64393
    },
    {
      "Dat_Referencia": "2017-07-31 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27089,
      "QtdFinalizadas": 85125,
      "QtdAbandonadas": 112394
    },
    {
      "Dat_Referencia": "2017-08-01 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 54437,
      "QtdFinalizadas": 154826,
      "QtdAbandonadas": 178128
    },
    {
      "Dat_Referencia": "2017-08-02 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 47934,
      "QtdFinalizadas": 132190,
      "QtdAbandonadas": 155887
    },
    {
      "Dat_Referencia": "2017-08-03 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 38755,
      "QtdFinalizadas": 115662,
      "QtdAbandonadas": 138385
    },
    {
      "Dat_Referencia": "2017-08-04 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 33238,
      "QtdFinalizadas": 105637,
      "QtdAbandonadas": 130198
    },
    {
      "Dat_Referencia": "2017-08-05 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27579,
      "QtdFinalizadas": 91056,
      "QtdAbandonadas": 110043
    },
    {
      "Dat_Referencia": "2017-08-06 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 18945,
      "QtdFinalizadas": 62936,
      "QtdAbandonadas": 77176
    },
    {
      "Dat_Referencia": "2017-08-07 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 31794,
      "QtdFinalizadas": 101058,
      "QtdAbandonadas": 126975
    },
    {
      "Dat_Referencia": "2017-08-08 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 32328,
      "QtdFinalizadas": 99928,
      "QtdAbandonadas": 126797
    },
    {
      "Dat_Referencia": "2017-08-09 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30782,
      "QtdFinalizadas": 95379,
      "QtdAbandonadas": 120586
    },
    {
      "Dat_Referencia": "2017-08-10 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28206,
      "QtdFinalizadas": 89065,
      "QtdAbandonadas": 113583
    },
    {
      "Dat_Referencia": "2017-08-11 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 26086,
      "QtdFinalizadas": 85880,
      "QtdAbandonadas": 110170
    },
    {
      "Dat_Referencia": "2017-08-12 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 21319,
      "QtdFinalizadas": 72226,
      "QtdAbandonadas": 94727
    },
    {
      "Dat_Referencia": "2017-08-13 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 15066,
      "QtdFinalizadas": 57159,
      "QtdAbandonadas": 70540
    },
    {
      "Dat_Referencia": "2017-08-14 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27080,
      "QtdFinalizadas": 86059,
      "QtdAbandonadas": 113054
    },
    {
      "Dat_Referencia": "2017-08-15 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 26020,
      "QtdFinalizadas": 83317,
      "QtdAbandonadas": 106606
    },
    {
      "Dat_Referencia": "2017-08-16 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27153,
      "QtdFinalizadas": 88924,
      "QtdAbandonadas": 114224
    },
    {
      "Dat_Referencia": "2017-08-17 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 25690,
      "QtdFinalizadas": 83491,
      "QtdAbandonadas": 109895
    },
    {
      "Dat_Referencia": "2017-08-18 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 23553,
      "QtdFinalizadas": 78850,
      "QtdAbandonadas": 104122
    },
    {
      "Dat_Referencia": "2017-08-19 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 19084,
      "QtdFinalizadas": 66502,
      "QtdAbandonadas": 86273
    },
    {
      "Dat_Referencia": "2017-08-20 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 12491,
      "QtdFinalizadas": 42186,
      "QtdAbandonadas": 55876
    },
    {
      "Dat_Referencia": "2017-08-21 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 25588,
      "QtdFinalizadas": 79089,
      "QtdAbandonadas": 106927
    },
    {
      "Dat_Referencia": "2017-08-22 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28345,
      "QtdFinalizadas": 79252,
      "QtdAbandonadas": 103748
    },
    {
      "Dat_Referencia": "2017-08-23 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27935,
      "QtdFinalizadas": 76412,
      "QtdAbandonadas": 99303
    },
    {
      "Dat_Referencia": "2017-08-24 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 25787,
      "QtdFinalizadas": 72923,
      "QtdAbandonadas": 96960
    },
    {
      "Dat_Referencia": "2017-08-25 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 16070,
      "QtdFinalizadas": 47302,
      "QtdAbandonadas": 65193
    },
    {
      "Dat_Referencia": "2017-08-26 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 20547,
      "QtdFinalizadas": 62406,
      "QtdAbandonadas": 83451
    },
    {
      "Dat_Referencia": "2017-08-27 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 14233,
      "QtdFinalizadas": 47007,
      "QtdAbandonadas": 61038
    },
    {
      "Dat_Referencia": "2017-08-28 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28394,
      "QtdFinalizadas": 80119,
      "QtdAbandonadas": 104605
    },
    {
      "Dat_Referencia": "2017-08-29 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28304,
      "QtdFinalizadas": 80439,
      "QtdAbandonadas": 104847
    },
    {
      "Dat_Referencia": "2017-08-30 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28965,
      "QtdFinalizadas": 80179,
      "QtdAbandonadas": 106198
    },
    {
      "Dat_Referencia": "2017-08-31 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29571,
      "QtdFinalizadas": 81757,
      "QtdAbandonadas": 111507
    },
    {
      "Dat_Referencia": "2017-09-01 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 53550,
      "QtdFinalizadas": 137730,
      "QtdAbandonadas": 165876
    },
    {
      "Dat_Referencia": "2017-09-02 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 37938,
      "QtdFinalizadas": 102900,
      "QtdAbandonadas": 126893
    },
    {
      "Dat_Referencia": "2017-09-03 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 22749,
      "QtdFinalizadas": 67310,
      "QtdAbandonadas": 84919
    },
    {
      "Dat_Referencia": "2017-09-04 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 41013,
      "QtdFinalizadas": 105879,
      "QtdAbandonadas": 135024
    },
    {
      "Dat_Referencia": "2017-09-05 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 36424,
      "QtdFinalizadas": 97564,
      "QtdAbandonadas": 125839
    },
    {
      "Dat_Referencia": "2017-09-06 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 34569,
      "QtdFinalizadas": 95617,
      "QtdAbandonadas": 124607
    },
    {
      "Dat_Referencia": "2017-09-07 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 24361,
      "QtdFinalizadas": 72075,
      "QtdAbandonadas": 91585
    },
    {
      "Dat_Referencia": "2017-09-08 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30875,
      "QtdFinalizadas": 87357,
      "QtdAbandonadas": 115530
    },
    {
      "Dat_Referencia": "2017-09-09 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 25332,
      "QtdFinalizadas": 72268,
      "QtdAbandonadas": 96936
    },
    {
      "Dat_Referencia": "2017-09-10 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 18023,
      "QtdFinalizadas": 55002,
      "QtdAbandonadas": 69523
    },
    {
      "Dat_Referencia": "2017-09-11 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 32844,
      "QtdFinalizadas": 91548,
      "QtdAbandonadas": 121832
    },
    {
      "Dat_Referencia": "2017-09-12 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 32468,
      "QtdFinalizadas": 86777,
      "QtdAbandonadas": 115893
    },
    {
      "Dat_Referencia": "2017-09-13 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 31165,
      "QtdFinalizadas": 85082,
      "QtdAbandonadas": 112590
    },
    {
      "Dat_Referencia": "2017-09-14 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30102,
      "QtdFinalizadas": 80832,
      "QtdAbandonadas": 109137
    },
    {
      "Dat_Referencia": "2017-09-15 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28925,
      "QtdFinalizadas": 78373,
      "QtdAbandonadas": 106886
    },
    {
      "Dat_Referencia": "2017-09-16 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 23934,
      "QtdFinalizadas": 67467,
      "QtdAbandonadas": 93173
    },
    {
      "Dat_Referencia": "2017-09-17 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 16325,
      "QtdFinalizadas": 49069,
      "QtdAbandonadas": 66568
    },
    {
      "Dat_Referencia": "2017-09-18 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29532,
      "QtdFinalizadas": 79798,
      "QtdAbandonadas": 110195
    },
    {
      "Dat_Referencia": "2017-09-19 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28371,
      "QtdFinalizadas": 79886,
      "QtdAbandonadas": 107379
    },
    {
      "Dat_Referencia": "2017-09-20 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28117,
      "QtdFinalizadas": 81320,
      "QtdAbandonadas": 109324
    },
    {
      "Dat_Referencia": "2017-09-21 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 33614,
      "QtdFinalizadas": 82474,
      "QtdAbandonadas": 111575
    },
    {
      "Dat_Referencia": "2017-09-22 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28948,
      "QtdFinalizadas": 74792,
      "QtdAbandonadas": 103464
    },
    {
      "Dat_Referencia": "2017-09-23 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 21086,
      "QtdFinalizadas": 61349,
      "QtdAbandonadas": 87536
    },
    {
      "Dat_Referencia": "2017-09-24 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 11184,
      "QtdFinalizadas": 36427,
      "QtdAbandonadas": 48860
    },
    {
      "Dat_Referencia": "2017-09-25 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28210,
      "QtdFinalizadas": 78009,
      "QtdAbandonadas": 109087
    },
    {
      "Dat_Referencia": "2017-09-26 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28882,
      "QtdFinalizadas": 76407,
      "QtdAbandonadas": 104840
    },
    {
      "Dat_Referencia": "2017-09-27 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27143,
      "QtdFinalizadas": 73314,
      "QtdAbandonadas": 102706
    },
    {
      "Dat_Referencia": "2017-09-28 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29476,
      "QtdFinalizadas": 76697,
      "QtdAbandonadas": 109308
    },
    {
      "Dat_Referencia": "2017-09-29 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 26794,
      "QtdFinalizadas": 73828,
      "QtdAbandonadas": 106248
    },
    {
      "Dat_Referencia": "2017-09-30 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 23546,
      "QtdFinalizadas": 68915,
      "QtdAbandonadas": 99831
    },
    {
      "Dat_Referencia": "2017-10-01 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28408,
      "QtdFinalizadas": 84418,
      "QtdAbandonadas": 106326
    },
    {
      "Dat_Referencia": "2017-10-02 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 50419,
      "QtdFinalizadas": 124786,
      "QtdAbandonadas": 162657
    },
    {
      "Dat_Referencia": "2017-10-03 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 48893,
      "QtdFinalizadas": 112873,
      "QtdAbandonadas": 151314
    },
    {
      "Dat_Referencia": "2017-10-04 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 40355,
      "QtdFinalizadas": 101327,
      "QtdAbandonadas": 135588
    },
    {
      "Dat_Referencia": "2017-10-05 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 37427,
      "QtdFinalizadas": 95082,
      "QtdAbandonadas": 128370
    },
    {
      "Dat_Referencia": "2017-10-06 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 33235,
      "QtdFinalizadas": 89655,
      "QtdAbandonadas": 125491
    },
    {
      "Dat_Referencia": "2017-10-07 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27851,
      "QtdFinalizadas": 76647,
      "QtdAbandonadas": 110072
    },
    {
      "Dat_Referencia": "2017-10-08 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 19044,
      "QtdFinalizadas": 58082,
      "QtdAbandonadas": 78757
    },
    {
      "Dat_Referencia": "2017-10-09 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 32600,
      "QtdFinalizadas": 90469,
      "QtdAbandonadas": 125551
    },
    {
      "Dat_Referencia": "2017-10-10 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 34490,
      "QtdFinalizadas": 94440,
      "QtdAbandonadas": 126349
    },
    {
      "Dat_Referencia": "2017-10-11 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29736,
      "QtdFinalizadas": 84381,
      "QtdAbandonadas": 120288
    },
    {
      "Dat_Referencia": "2017-10-12 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 20383,
      "QtdFinalizadas": 63063,
      "QtdAbandonadas": 88337
    },
    {
      "Dat_Referencia": "2017-10-13 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 26521,
      "QtdFinalizadas": 76931,
      "QtdAbandonadas": 109142
    },
    {
      "Dat_Referencia": "2017-10-14 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 22530,
      "QtdFinalizadas": 67438,
      "QtdAbandonadas": 96300
    },
    {
      "Dat_Referencia": "2017-10-15 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 16390,
      "QtdFinalizadas": 48345,
      "QtdAbandonadas": 71153
    },
    {
      "Dat_Referencia": "2017-10-16 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 32808,
      "QtdFinalizadas": 77935,
      "QtdAbandonadas": 114725
    },
    {
      "Dat_Referencia": "2017-10-17 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 29537,
      "QtdFinalizadas": 79541,
      "QtdAbandonadas": 114099
    },
    {
      "Dat_Referencia": "2017-10-18 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28225,
      "QtdFinalizadas": 76295,
      "QtdAbandonadas": 110257
    },
    {
      "Dat_Referencia": "2017-10-19 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 26765,
      "QtdFinalizadas": 76816,
      "QtdAbandonadas": 115820
    },
    {
      "Dat_Referencia": "2017-10-20 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 25162,
      "QtdFinalizadas": 69203,
      "QtdAbandonadas": 103656
    },
    {
      "Dat_Referencia": "2017-10-21 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 20205,
      "QtdFinalizadas": 56901,
      "QtdAbandonadas": 88538
    },
    {
      "Dat_Referencia": "2017-10-22 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 11999,
      "QtdFinalizadas": 37666,
      "QtdAbandonadas": 54569
    },
    {
      "Dat_Referencia": "2017-10-23 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27311,
      "QtdFinalizadas": 74009,
      "QtdAbandonadas": 109957
    },
    {
      "Dat_Referencia": "2017-10-24 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 26953,
      "QtdFinalizadas": 71387,
      "QtdAbandonadas": 106355
    },
    {
      "Dat_Referencia": "2017-10-25 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 26155,
      "QtdFinalizadas": 68995,
      "QtdAbandonadas": 103242
    },
    {
      "Dat_Referencia": "2017-10-26 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 25697,
      "QtdFinalizadas": 67602,
      "QtdAbandonadas": 101710
    },
    {
      "Dat_Referencia": "2017-10-27 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 26579,
      "QtdFinalizadas": 67134,
      "QtdAbandonadas": 101120
    },
    {
      "Dat_Referencia": "2017-10-28 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 20968,
      "QtdFinalizadas": 59667,
      "QtdAbandonadas": 87568
    },
    {
      "Dat_Referencia": "2017-10-29 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 15460,
      "QtdFinalizadas": 52920,
      "QtdAbandonadas": 83904
    },
    {
      "Dat_Referencia": "2017-10-30 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28076,
      "QtdFinalizadas": 73765,
      "QtdAbandonadas": 110076
    },
    {
      "Dat_Referencia": "2017-10-31 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27574,
      "QtdFinalizadas": 74773,
      "QtdAbandonadas": 110116
    },
    {
      "Dat_Referencia": "2017-11-01 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 49598,
      "QtdFinalizadas": 135782,
      "QtdAbandonadas": 168897
    },
    {
      "Dat_Referencia": "2017-11-02 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 36469,
      "QtdFinalizadas": 94688,
      "QtdAbandonadas": 110603
    },
    {
      "Dat_Referencia": "2017-11-03 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 35657,
      "QtdFinalizadas": 95534,
      "QtdAbandonadas": 130320
    },
    {
      "Dat_Referencia": "2017-11-04 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27347,
      "QtdFinalizadas": 72634,
      "QtdAbandonadas": 105476
    },
    {
      "Dat_Referencia": "2017-11-05 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 19430,
      "QtdFinalizadas": 52038,
      "QtdAbandonadas": 72891
    },
    {
      "Dat_Referencia": "2017-11-06 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 45496,
      "QtdFinalizadas": 108395,
      "QtdAbandonadas": 141589
    },
    {
      "Dat_Referencia": "2017-11-07 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 33490,
      "QtdFinalizadas": 124350,
      "QtdAbandonadas": 95023
    },
    {
      "Dat_Referencia": "2017-11-08 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 32205,
      "QtdFinalizadas": 123727,
      "QtdAbandonadas": 92105
    },
    {
      "Dat_Referencia": "2017-11-09 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30889,
      "QtdFinalizadas": 118757,
      "QtdAbandonadas": 87758
    },
    {
      "Dat_Referencia": "2017-11-10 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27342,
      "QtdFinalizadas": 112408,
      "QtdAbandonadas": 82214
    },
    {
      "Dat_Referencia": "2017-11-11 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 22160,
      "QtdFinalizadas": 94860,
      "QtdAbandonadas": 67332
    },
    {
      "Dat_Referencia": "2017-11-12 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 13807,
      "QtdFinalizadas": 61667,
      "QtdAbandonadas": 44372
    },
    {
      "Dat_Referencia": "2017-11-13 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 26459,
      "QtdFinalizadas": 107519,
      "QtdAbandonadas": 78486
    },
    {
      "Dat_Referencia": "2017-11-14 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 24951,
      "QtdFinalizadas": 104224,
      "QtdAbandonadas": 76039
    },
    {
      "Dat_Referencia": "2017-11-15 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 18543,
      "QtdFinalizadas": 81160,
      "QtdAbandonadas": 58436
    },
    {
      "Dat_Referencia": "2017-11-16 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 24640,
      "QtdFinalizadas": 102884,
      "QtdAbandonadas": 75061
    },
    {
      "Dat_Referencia": "2017-11-17 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 25421,
      "QtdFinalizadas": 103717,
      "QtdAbandonadas": 73658
    },
    {
      "Dat_Referencia": "2017-11-18 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 20635,
      "QtdFinalizadas": 86858,
      "QtdAbandonadas": 63273
    },
    {
      "Dat_Referencia": "2017-11-19 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 11070,
      "QtdFinalizadas": 52080,
      "QtdAbandonadas": 35973
    },
    {
      "Dat_Referencia": "2017-11-20 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 24603,
      "QtdFinalizadas": 100644,
      "QtdAbandonadas": 71932
    },
    {
      "Dat_Referencia": "2017-11-21 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 22621,
      "QtdFinalizadas": 93890,
      "QtdAbandonadas": 69673
    },
    {
      "Dat_Referencia": "2017-11-22 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 22162,
      "QtdFinalizadas": 90532,
      "QtdAbandonadas": 66709
    },
    {
      "Dat_Referencia": "2017-11-23 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 25793,
      "QtdFinalizadas": 96575,
      "QtdAbandonadas": 71750
    },
    {
      "Dat_Referencia": "2017-11-24 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 24461,
      "QtdFinalizadas": 98243,
      "QtdAbandonadas": 69666
    },
    {
      "Dat_Referencia": "2017-11-25 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 19391,
      "QtdFinalizadas": 83130,
      "QtdAbandonadas": 59166
    },
    {
      "Dat_Referencia": "2017-11-26 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 14320,
      "QtdFinalizadas": 64459,
      "QtdAbandonadas": 46561
    },
    {
      "Dat_Referencia": "2017-11-27 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 24816,
      "QtdFinalizadas": 100208,
      "QtdAbandonadas": 71000
    },
    {
      "Dat_Referencia": "2017-11-28 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 25354,
      "QtdFinalizadas": 101243,
      "QtdAbandonadas": 71713
    },
    {
      "Dat_Referencia": "2017-11-29 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 25101,
      "QtdFinalizadas": 105696,
      "QtdAbandonadas": 78306
    },
    {
      "Dat_Referencia": "2017-11-30 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 27072,
      "QtdFinalizadas": 107572,
      "QtdAbandonadas": 79876
    },
    {
      "Dat_Referencia": "2017-12-01 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 42509,
      "QtdFinalizadas": 147478,
      "QtdAbandonadas": 115571
    },
    {
      "Dat_Referencia": "2017-12-02 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30788,
      "QtdFinalizadas": 113128,
      "QtdAbandonadas": 88327
    },
    {
      "Dat_Referencia": "2017-12-03 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 19059,
      "QtdFinalizadas": 76726,
      "QtdAbandonadas": 57721
    },
    {
      "Dat_Referencia": "2017-12-04 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 32466,
      "QtdFinalizadas": 116029,
      "QtdAbandonadas": 93454
    },
    {
      "Dat_Referencia": "2017-12-05 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 30569,
      "QtdFinalizadas": 110542,
      "QtdAbandonadas": 85756
    },
    {
      "Dat_Referencia": "2017-12-06 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 28943,
      "QtdFinalizadas": 109750,
      "QtdAbandonadas": 83524
    },
    {
      "Dat_Referencia": "2017-12-07 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 26751,
      "QtdFinalizadas": 102514,
      "QtdAbandonadas": 78117
    },
    {
      "Dat_Referencia": "2017-12-08 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 24191,
      "QtdFinalizadas": 95011,
      "QtdAbandonadas": 71191
    },
    {
      "Dat_Referencia": "2017-12-09 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 20052,
      "QtdFinalizadas": 84356,
      "QtdAbandonadas": 61844
    },
    {
      "Dat_Referencia": "2017-12-10 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 14716,
      "QtdFinalizadas": 62880,
      "QtdAbandonadas": 46491
    },
    {
      "Dat_Referencia": "2017-12-11 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 25428,
      "QtdFinalizadas": 99732,
      "QtdAbandonadas": 75733
    },
    {
      "Dat_Referencia": "2017-12-12 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 24669,
      "QtdFinalizadas": 98998,
      "QtdAbandonadas": 75674
    },
    {
      "Dat_Referencia": "2017-12-13 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 24151,
      "QtdFinalizadas": 94247,
      "QtdAbandonadas": 70036
    },
    {
      "Dat_Referencia": "2017-12-14 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 22429,
      "QtdFinalizadas": 91039,
      "QtdAbandonadas": 66190
    },
    {
      "Dat_Referencia": "2017-12-15 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 21389,
      "QtdFinalizadas": 89250,
      "QtdAbandonadas": 65005
    },
    {
      "Dat_Referencia": "2017-12-16 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 17431,
      "QtdFinalizadas": 75940,
      "QtdAbandonadas": 56091
    },
    {
      "Dat_Referencia": "2017-12-17 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 12413,
      "QtdFinalizadas": 58241,
      "QtdAbandonadas": 42073
    },
    {
      "Dat_Referencia": "2017-12-18 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 21334,
      "QtdFinalizadas": 86625,
      "QtdAbandonadas": 64301
    },
    {
      "Dat_Referencia": "2017-12-19 00:00:00.000",
      "Grupo": "Pré",
      "QtdDerivadas": 22092,
      "QtdFinalizadas": 87984,
      "QtdAbandonadas": 66026
    },
    {
      "Dat_Referencia": "2017-01-01 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 5497,
      "QtdFinalizadas": 4498,
      "QtdAbandonadas": 12047
    },
    {
      "Dat_Referencia": "2017-01-02 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 18083,
      "QtdFinalizadas": 10920,
      "QtdAbandonadas": 30175
    },
    {
      "Dat_Referencia": "2017-01-03 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 16784,
      "QtdFinalizadas": 10230,
      "QtdAbandonadas": 28434
    },
    {
      "Dat_Referencia": "2017-01-04 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 16481,
      "QtdFinalizadas": 10565,
      "QtdAbandonadas": 30874
    },
    {
      "Dat_Referencia": "2017-01-05 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 16208,
      "QtdFinalizadas": 10409,
      "QtdAbandonadas": 28266
    },
    {
      "Dat_Referencia": "2017-01-06 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14115,
      "QtdFinalizadas": 9585,
      "QtdAbandonadas": 26162
    },
    {
      "Dat_Referencia": "2017-01-07 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11153,
      "QtdFinalizadas": 7796,
      "QtdAbandonadas": 20386
    },
    {
      "Dat_Referencia": "2017-01-08 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7578,
      "QtdFinalizadas": 5482,
      "QtdAbandonadas": 14612
    },
    {
      "Dat_Referencia": "2017-01-09 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 17005,
      "QtdFinalizadas": 10669,
      "QtdAbandonadas": 28324
    },
    {
      "Dat_Referencia": "2017-01-10 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 16168,
      "QtdFinalizadas": 10364,
      "QtdAbandonadas": 27996
    },
    {
      "Dat_Referencia": "2017-01-11 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15979,
      "QtdFinalizadas": 10567,
      "QtdAbandonadas": 27203
    },
    {
      "Dat_Referencia": "2017-01-12 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15258,
      "QtdFinalizadas": 10065,
      "QtdAbandonadas": 25566
    },
    {
      "Dat_Referencia": "2017-01-13 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14168,
      "QtdFinalizadas": 9666,
      "QtdAbandonadas": 24734
    },
    {
      "Dat_Referencia": "2017-01-14 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 9748,
      "QtdFinalizadas": 6995,
      "QtdAbandonadas": 17820
    },
    {
      "Dat_Referencia": "2017-01-15 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 6554,
      "QtdFinalizadas": 5045,
      "QtdAbandonadas": 12610
    },
    {
      "Dat_Referencia": "2017-01-16 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14444,
      "QtdFinalizadas": 9663,
      "QtdAbandonadas": 24540
    },
    {
      "Dat_Referencia": "2017-01-17 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14287,
      "QtdFinalizadas": 9541,
      "QtdAbandonadas": 23766
    },
    {
      "Dat_Referencia": "2017-01-18 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13797,
      "QtdFinalizadas": 9285,
      "QtdAbandonadas": 25804
    },
    {
      "Dat_Referencia": "2017-01-19 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13730,
      "QtdFinalizadas": 9223,
      "QtdAbandonadas": 23619
    },
    {
      "Dat_Referencia": "2017-01-20 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13420,
      "QtdFinalizadas": 8958,
      "QtdAbandonadas": 22746
    },
    {
      "Dat_Referencia": "2017-01-21 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 10063,
      "QtdFinalizadas": 7091,
      "QtdAbandonadas": 17618
    },
    {
      "Dat_Referencia": "2017-01-22 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7527,
      "QtdFinalizadas": 5521,
      "QtdAbandonadas": 13456
    },
    {
      "Dat_Referencia": "2017-01-23 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 18002,
      "QtdFinalizadas": 11286,
      "QtdAbandonadas": 28210
    },
    {
      "Dat_Referencia": "2017-01-24 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 16887,
      "QtdFinalizadas": 11586,
      "QtdAbandonadas": 27818
    },
    {
      "Dat_Referencia": "2017-01-25 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 17327,
      "QtdFinalizadas": 11006,
      "QtdAbandonadas": 26922
    },
    {
      "Dat_Referencia": "2017-01-26 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 16272,
      "QtdFinalizadas": 10367,
      "QtdAbandonadas": 27202
    },
    {
      "Dat_Referencia": "2017-01-27 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14551,
      "QtdFinalizadas": 9246,
      "QtdAbandonadas": 24696
    },
    {
      "Dat_Referencia": "2017-01-28 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 10079,
      "QtdFinalizadas": 6811,
      "QtdAbandonadas": 18104
    },
    {
      "Dat_Referencia": "2017-01-29 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 6721,
      "QtdFinalizadas": 5131,
      "QtdAbandonadas": 12814
    },
    {
      "Dat_Referencia": "2017-01-30 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 16756,
      "QtdFinalizadas": 10675,
      "QtdAbandonadas": 27538
    },
    {
      "Dat_Referencia": "2017-01-31 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 19788,
      "QtdFinalizadas": 11688,
      "QtdAbandonadas": 30372
    },
    {
      "Dat_Referencia": "2017-02-01 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 25415,
      "QtdFinalizadas": 14075,
      "QtdAbandonadas": 37938
    },
    {
      "Dat_Referencia": "2017-02-02 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 19921,
      "QtdFinalizadas": 11732,
      "QtdAbandonadas": 31096
    },
    {
      "Dat_Referencia": "2017-02-03 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15717,
      "QtdFinalizadas": 10219,
      "QtdAbandonadas": 28546
    },
    {
      "Dat_Referencia": "2017-02-04 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11308,
      "QtdFinalizadas": 7971,
      "QtdAbandonadas": 20909
    },
    {
      "Dat_Referencia": "2017-02-05 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 8659,
      "QtdFinalizadas": 6071,
      "QtdAbandonadas": 15581
    },
    {
      "Dat_Referencia": "2017-02-06 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 18644,
      "QtdFinalizadas": 11544,
      "QtdAbandonadas": 31405
    },
    {
      "Dat_Referencia": "2017-02-07 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 19789,
      "QtdFinalizadas": 11488,
      "QtdAbandonadas": 32415
    },
    {
      "Dat_Referencia": "2017-02-08 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 20846,
      "QtdFinalizadas": 11301,
      "QtdAbandonadas": 29882
    },
    {
      "Dat_Referencia": "2017-02-09 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 19962,
      "QtdFinalizadas": 11617,
      "QtdAbandonadas": 30083
    },
    {
      "Dat_Referencia": "2017-02-10 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 17133,
      "QtdFinalizadas": 11044,
      "QtdAbandonadas": 28433
    },
    {
      "Dat_Referencia": "2017-02-11 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11438,
      "QtdFinalizadas": 7890,
      "QtdAbandonadas": 20175
    },
    {
      "Dat_Referencia": "2017-02-12 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 5144,
      "QtdFinalizadas": 4156,
      "QtdAbandonadas": 10241
    },
    {
      "Dat_Referencia": "2017-02-13 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 18982,
      "QtdFinalizadas": 12299,
      "QtdAbandonadas": 30478
    },
    {
      "Dat_Referencia": "2017-02-14 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 17100,
      "QtdFinalizadas": 11800,
      "QtdAbandonadas": 28504
    },
    {
      "Dat_Referencia": "2017-02-15 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 16728,
      "QtdFinalizadas": 11227,
      "QtdAbandonadas": 28000
    },
    {
      "Dat_Referencia": "2017-02-16 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15757,
      "QtdFinalizadas": 10639,
      "QtdAbandonadas": 26756
    },
    {
      "Dat_Referencia": "2017-02-17 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14225,
      "QtdFinalizadas": 9985,
      "QtdAbandonadas": 25129
    },
    {
      "Dat_Referencia": "2017-02-18 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 10780,
      "QtdFinalizadas": 8376,
      "QtdAbandonadas": 20029
    },
    {
      "Dat_Referencia": "2017-02-19 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7306,
      "QtdFinalizadas": 5537,
      "QtdAbandonadas": 13559
    },
    {
      "Dat_Referencia": "2017-02-20 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15846,
      "QtdFinalizadas": 10624,
      "QtdAbandonadas": 27385
    },
    {
      "Dat_Referencia": "2017-02-21 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14801,
      "QtdFinalizadas": 9418,
      "QtdAbandonadas": 26628
    },
    {
      "Dat_Referencia": "2017-02-22 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14232,
      "QtdFinalizadas": 9288,
      "QtdAbandonadas": 25197
    },
    {
      "Dat_Referencia": "2017-02-23 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12953,
      "QtdFinalizadas": 8617,
      "QtdAbandonadas": 23079
    },
    {
      "Dat_Referencia": "2017-02-24 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11516,
      "QtdFinalizadas": 8755,
      "QtdAbandonadas": 23815
    },
    {
      "Dat_Referencia": "2017-02-25 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 8671,
      "QtdFinalizadas": 6725,
      "QtdAbandonadas": 17681
    },
    {
      "Dat_Referencia": "2017-02-26 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 5707,
      "QtdFinalizadas": 4985,
      "QtdAbandonadas": 12165
    },
    {
      "Dat_Referencia": "2017-02-27 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 8288,
      "QtdFinalizadas": 6221,
      "QtdAbandonadas": 16042
    },
    {
      "Dat_Referencia": "2017-02-28 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7904,
      "QtdFinalizadas": 5910,
      "QtdAbandonadas": 15267
    },
    {
      "Dat_Referencia": "2017-03-01 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 17192,
      "QtdFinalizadas": 10950,
      "QtdAbandonadas": 30237
    },
    {
      "Dat_Referencia": "2017-03-02 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 18681,
      "QtdFinalizadas": 11881,
      "QtdAbandonadas": 31391
    },
    {
      "Dat_Referencia": "2017-03-03 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 17335,
      "QtdFinalizadas": 10599,
      "QtdAbandonadas": 29058
    },
    {
      "Dat_Referencia": "2017-03-04 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12863,
      "QtdFinalizadas": 8400,
      "QtdAbandonadas": 21535
    },
    {
      "Dat_Referencia": "2017-03-05 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7708,
      "QtdFinalizadas": 5075,
      "QtdAbandonadas": 13992
    },
    {
      "Dat_Referencia": "2017-03-06 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15285,
      "QtdFinalizadas": 9873,
      "QtdAbandonadas": 26893
    },
    {
      "Dat_Referencia": "2017-03-07 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14987,
      "QtdFinalizadas": 9940,
      "QtdAbandonadas": 30101
    },
    {
      "Dat_Referencia": "2017-03-08 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13924,
      "QtdFinalizadas": 8927,
      "QtdAbandonadas": 24578
    },
    {
      "Dat_Referencia": "2017-03-09 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13351,
      "QtdFinalizadas": 8788,
      "QtdAbandonadas": 24148
    },
    {
      "Dat_Referencia": "2017-03-10 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12863,
      "QtdFinalizadas": 8646,
      "QtdAbandonadas": 23485
    },
    {
      "Dat_Referencia": "2017-03-11 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 9701,
      "QtdFinalizadas": 6768,
      "QtdAbandonadas": 18134
    },
    {
      "Dat_Referencia": "2017-03-12 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 6697,
      "QtdFinalizadas": 5008,
      "QtdAbandonadas": 12327
    },
    {
      "Dat_Referencia": "2017-03-13 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14974,
      "QtdFinalizadas": 9894,
      "QtdAbandonadas": 25804
    },
    {
      "Dat_Referencia": "2017-03-14 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14231,
      "QtdFinalizadas": 9585,
      "QtdAbandonadas": 24054
    },
    {
      "Dat_Referencia": "2017-03-15 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14465,
      "QtdFinalizadas": 9176,
      "QtdAbandonadas": 23563
    },
    {
      "Dat_Referencia": "2017-03-16 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14167,
      "QtdFinalizadas": 9141,
      "QtdAbandonadas": 24090
    },
    {
      "Dat_Referencia": "2017-03-17 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 9895,
      "QtdFinalizadas": 6728,
      "QtdAbandonadas": 25257
    },
    {
      "Dat_Referencia": "2017-03-18 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 9707,
      "QtdFinalizadas": 6804,
      "QtdAbandonadas": 16834
    },
    {
      "Dat_Referencia": "2017-03-19 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 4786,
      "QtdFinalizadas": 3472,
      "QtdAbandonadas": 9544
    },
    {
      "Dat_Referencia": "2017-03-20 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14405,
      "QtdFinalizadas": 9289,
      "QtdAbandonadas": 24426
    },
    {
      "Dat_Referencia": "2017-03-21 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13815,
      "QtdFinalizadas": 8952,
      "QtdAbandonadas": 22329
    },
    {
      "Dat_Referencia": "2017-03-22 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12951,
      "QtdFinalizadas": 8577,
      "QtdAbandonadas": 21157
    },
    {
      "Dat_Referencia": "2017-03-23 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11902,
      "QtdFinalizadas": 9306,
      "QtdAbandonadas": 20727
    },
    {
      "Dat_Referencia": "2017-03-24 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 10601,
      "QtdFinalizadas": 8748,
      "QtdAbandonadas": 19795
    },
    {
      "Dat_Referencia": "2017-03-25 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7711,
      "QtdFinalizadas": 6403,
      "QtdAbandonadas": 14887
    },
    {
      "Dat_Referencia": "2017-03-26 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 5602,
      "QtdFinalizadas": 5067,
      "QtdAbandonadas": 10299
    },
    {
      "Dat_Referencia": "2017-03-27 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12492,
      "QtdFinalizadas": 9415,
      "QtdAbandonadas": 19758
    },
    {
      "Dat_Referencia": "2017-03-28 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13066,
      "QtdFinalizadas": 8884,
      "QtdAbandonadas": 20511
    },
    {
      "Dat_Referencia": "2017-03-29 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13170,
      "QtdFinalizadas": 8250,
      "QtdAbandonadas": 20218
    },
    {
      "Dat_Referencia": "2017-03-30 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13199,
      "QtdFinalizadas": 8176,
      "QtdAbandonadas": 24755
    },
    {
      "Dat_Referencia": "2017-03-31 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12743,
      "QtdFinalizadas": 8535,
      "QtdAbandonadas": 20895
    },
    {
      "Dat_Referencia": "2017-04-01 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13314,
      "QtdFinalizadas": 9018,
      "QtdAbandonadas": 21660
    },
    {
      "Dat_Referencia": "2017-04-02 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 8553,
      "QtdFinalizadas": 5881,
      "QtdAbandonadas": 13854
    },
    {
      "Dat_Referencia": "2017-04-03 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 18075,
      "QtdFinalizadas": 11403,
      "QtdAbandonadas": 27324
    },
    {
      "Dat_Referencia": "2017-04-04 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 16439,
      "QtdFinalizadas": 10282,
      "QtdAbandonadas": 25230
    },
    {
      "Dat_Referencia": "2017-04-05 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 17350,
      "QtdFinalizadas": 10837,
      "QtdAbandonadas": 25842
    },
    {
      "Dat_Referencia": "2017-04-06 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 16222,
      "QtdFinalizadas": 10165,
      "QtdAbandonadas": 24502
    },
    {
      "Dat_Referencia": "2017-04-07 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14186,
      "QtdFinalizadas": 9880,
      "QtdAbandonadas": 23596
    },
    {
      "Dat_Referencia": "2017-04-08 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 10871,
      "QtdFinalizadas": 7576,
      "QtdAbandonadas": 18656
    },
    {
      "Dat_Referencia": "2017-04-09 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 6962,
      "QtdFinalizadas": 5778,
      "QtdAbandonadas": 12216
    },
    {
      "Dat_Referencia": "2017-04-10 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15812,
      "QtdFinalizadas": 10694,
      "QtdAbandonadas": 25051
    },
    {
      "Dat_Referencia": "2017-04-11 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15007,
      "QtdFinalizadas": 9830,
      "QtdAbandonadas": 25121
    },
    {
      "Dat_Referencia": "2017-04-12 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15033,
      "QtdFinalizadas": 10108,
      "QtdAbandonadas": 24014
    },
    {
      "Dat_Referencia": "2017-04-13 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13183,
      "QtdFinalizadas": 9175,
      "QtdAbandonadas": 20979
    },
    {
      "Dat_Referencia": "2017-04-14 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7677,
      "QtdFinalizadas": 6203,
      "QtdAbandonadas": 13155
    },
    {
      "Dat_Referencia": "2017-04-15 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 9285,
      "QtdFinalizadas": 6894,
      "QtdAbandonadas": 15302
    },
    {
      "Dat_Referencia": "2017-04-16 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 6202,
      "QtdFinalizadas": 4489,
      "QtdAbandonadas": 10442
    },
    {
      "Dat_Referencia": "2017-04-17 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15441,
      "QtdFinalizadas": 9988,
      "QtdAbandonadas": 23086
    },
    {
      "Dat_Referencia": "2017-04-18 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15042,
      "QtdFinalizadas": 9830,
      "QtdAbandonadas": 22248
    },
    {
      "Dat_Referencia": "2017-04-19 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13892,
      "QtdFinalizadas": 9068,
      "QtdAbandonadas": 21389
    },
    {
      "Dat_Referencia": "2017-04-20 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12650,
      "QtdFinalizadas": 8481,
      "QtdAbandonadas": 21022
    },
    {
      "Dat_Referencia": "2017-04-21 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 8428,
      "QtdFinalizadas": 6264,
      "QtdAbandonadas": 14117
    },
    {
      "Dat_Referencia": "2017-04-22 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 8444,
      "QtdFinalizadas": 6121,
      "QtdAbandonadas": 14099
    },
    {
      "Dat_Referencia": "2017-04-23 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 5240,
      "QtdFinalizadas": 3866,
      "QtdAbandonadas": 8560
    },
    {
      "Dat_Referencia": "2017-04-24 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14162,
      "QtdFinalizadas": 9301,
      "QtdAbandonadas": 21467
    },
    {
      "Dat_Referencia": "2017-04-25 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13805,
      "QtdFinalizadas": 8959,
      "QtdAbandonadas": 21343
    },
    {
      "Dat_Referencia": "2017-04-26 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14042,
      "QtdFinalizadas": 9312,
      "QtdAbandonadas": 20398
    },
    {
      "Dat_Referencia": "2017-04-27 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12981,
      "QtdFinalizadas": 8892,
      "QtdAbandonadas": 19993
    },
    {
      "Dat_Referencia": "2017-04-28 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 9473,
      "QtdFinalizadas": 7296,
      "QtdAbandonadas": 18979
    },
    {
      "Dat_Referencia": "2017-04-29 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 9130,
      "QtdFinalizadas": 7054,
      "QtdAbandonadas": 15881
    },
    {
      "Dat_Referencia": "2017-04-30 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 6895,
      "QtdFinalizadas": 5444,
      "QtdAbandonadas": 12351
    },
    {
      "Dat_Referencia": "2017-05-01 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 10535,
      "QtdFinalizadas": 7563,
      "QtdAbandonadas": 17366
    },
    {
      "Dat_Referencia": "2017-05-02 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 17949,
      "QtdFinalizadas": 11664,
      "QtdAbandonadas": 29141
    },
    {
      "Dat_Referencia": "2017-05-03 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 17525,
      "QtdFinalizadas": 11554,
      "QtdAbandonadas": 30050
    },
    {
      "Dat_Referencia": "2017-05-04 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15682,
      "QtdFinalizadas": 11224,
      "QtdAbandonadas": 23339
    },
    {
      "Dat_Referencia": "2017-05-05 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14802,
      "QtdFinalizadas": 9440,
      "QtdAbandonadas": 23146
    },
    {
      "Dat_Referencia": "2017-05-06 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11336,
      "QtdFinalizadas": 7565,
      "QtdAbandonadas": 18059
    },
    {
      "Dat_Referencia": "2017-05-07 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7552,
      "QtdFinalizadas": 5363,
      "QtdAbandonadas": 12416
    },
    {
      "Dat_Referencia": "2017-05-08 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 16405,
      "QtdFinalizadas": 10311,
      "QtdAbandonadas": 24674
    },
    {
      "Dat_Referencia": "2017-05-09 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15892,
      "QtdFinalizadas": 10197,
      "QtdAbandonadas": 24893
    },
    {
      "Dat_Referencia": "2017-05-10 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15083,
      "QtdFinalizadas": 9951,
      "QtdAbandonadas": 24484
    },
    {
      "Dat_Referencia": "2017-05-11 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14585,
      "QtdFinalizadas": 10059,
      "QtdAbandonadas": 22887
    },
    {
      "Dat_Referencia": "2017-05-12 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7518,
      "QtdFinalizadas": 5302,
      "QtdAbandonadas": 12870
    },
    {
      "Dat_Referencia": "2017-05-13 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12173,
      "QtdFinalizadas": 8305,
      "QtdAbandonadas": 17721
    },
    {
      "Dat_Referencia": "2017-05-14 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7419,
      "QtdFinalizadas": 6038,
      "QtdAbandonadas": 13866
    },
    {
      "Dat_Referencia": "2017-05-15 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 19578,
      "QtdFinalizadas": 11659,
      "QtdAbandonadas": 25720
    },
    {
      "Dat_Referencia": "2017-05-16 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 17231,
      "QtdFinalizadas": 10962,
      "QtdAbandonadas": 23854
    },
    {
      "Dat_Referencia": "2017-05-17 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14846,
      "QtdFinalizadas": 10135,
      "QtdAbandonadas": 22552
    },
    {
      "Dat_Referencia": "2017-05-18 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13449,
      "QtdFinalizadas": 9190,
      "QtdAbandonadas": 20940
    },
    {
      "Dat_Referencia": "2017-05-19 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12020,
      "QtdFinalizadas": 8682,
      "QtdAbandonadas": 20620
    },
    {
      "Dat_Referencia": "2017-05-20 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 9088,
      "QtdFinalizadas": 6690,
      "QtdAbandonadas": 15633
    },
    {
      "Dat_Referencia": "2017-05-21 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 5337,
      "QtdFinalizadas": 4096,
      "QtdAbandonadas": 8913
    },
    {
      "Dat_Referencia": "2017-05-22 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14624,
      "QtdFinalizadas": 9607,
      "QtdAbandonadas": 23184
    },
    {
      "Dat_Referencia": "2017-05-23 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13516,
      "QtdFinalizadas": 9228,
      "QtdAbandonadas": 21158
    },
    {
      "Dat_Referencia": "2017-05-24 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12950,
      "QtdFinalizadas": 9021,
      "QtdAbandonadas": 21045
    },
    {
      "Dat_Referencia": "2017-05-25 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12441,
      "QtdFinalizadas": 8965,
      "QtdAbandonadas": 19923
    },
    {
      "Dat_Referencia": "2017-05-26 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11484,
      "QtdFinalizadas": 8132,
      "QtdAbandonadas": 18579
    },
    {
      "Dat_Referencia": "2017-05-27 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 8071,
      "QtdFinalizadas": 6254,
      "QtdAbandonadas": 14479
    },
    {
      "Dat_Referencia": "2017-05-28 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 6479,
      "QtdFinalizadas": 4522,
      "QtdAbandonadas": 10191
    },
    {
      "Dat_Referencia": "2017-05-29 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12925,
      "QtdFinalizadas": 8682,
      "QtdAbandonadas": 20072
    },
    {
      "Dat_Referencia": "2017-05-30 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13161,
      "QtdFinalizadas": 9013,
      "QtdAbandonadas": 21114
    },
    {
      "Dat_Referencia": "2017-05-31 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15106,
      "QtdFinalizadas": 10067,
      "QtdAbandonadas": 23230
    },
    {
      "Dat_Referencia": "2017-06-01 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 18982,
      "QtdFinalizadas": 11905,
      "QtdAbandonadas": 32100
    },
    {
      "Dat_Referencia": "2017-06-02 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15944,
      "QtdFinalizadas": 10480,
      "QtdAbandonadas": 24217
    },
    {
      "Dat_Referencia": "2017-06-03 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11124,
      "QtdFinalizadas": 7721,
      "QtdAbandonadas": 18672
    },
    {
      "Dat_Referencia": "2017-06-04 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7897,
      "QtdFinalizadas": 5656,
      "QtdAbandonadas": 12276
    },
    {
      "Dat_Referencia": "2017-06-05 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 18231,
      "QtdFinalizadas": 11501,
      "QtdAbandonadas": 28660
    },
    {
      "Dat_Referencia": "2017-06-06 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 17091,
      "QtdFinalizadas": 11165,
      "QtdAbandonadas": 27623
    },
    {
      "Dat_Referencia": "2017-06-07 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 17494,
      "QtdFinalizadas": 11684,
      "QtdAbandonadas": 27959
    },
    {
      "Dat_Referencia": "2017-06-08 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 16994,
      "QtdFinalizadas": 11141,
      "QtdAbandonadas": 24901
    },
    {
      "Dat_Referencia": "2017-06-09 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14087,
      "QtdFinalizadas": 9514,
      "QtdAbandonadas": 22837
    },
    {
      "Dat_Referencia": "2017-06-10 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 10588,
      "QtdFinalizadas": 7882,
      "QtdAbandonadas": 17556
    },
    {
      "Dat_Referencia": "2017-06-11 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7431,
      "QtdFinalizadas": 5376,
      "QtdAbandonadas": 12022
    },
    {
      "Dat_Referencia": "2017-06-12 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14952,
      "QtdFinalizadas": 10748,
      "QtdAbandonadas": 23408
    },
    {
      "Dat_Referencia": "2017-06-13 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15302,
      "QtdFinalizadas": 10611,
      "QtdAbandonadas": 23718
    },
    {
      "Dat_Referencia": "2017-06-14 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14983,
      "QtdFinalizadas": 10376,
      "QtdAbandonadas": 25271
    },
    {
      "Dat_Referencia": "2017-06-15 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 10458,
      "QtdFinalizadas": 7872,
      "QtdAbandonadas": 16571
    },
    {
      "Dat_Referencia": "2017-06-16 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13250,
      "QtdFinalizadas": 9310,
      "QtdAbandonadas": 22269
    },
    {
      "Dat_Referencia": "2017-06-17 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 10374,
      "QtdFinalizadas": 7095,
      "QtdAbandonadas": 15912
    },
    {
      "Dat_Referencia": "2017-06-18 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 6660,
      "QtdFinalizadas": 5229,
      "QtdAbandonadas": 11190
    },
    {
      "Dat_Referencia": "2017-06-19 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 16125,
      "QtdFinalizadas": 10645,
      "QtdAbandonadas": 23941
    },
    {
      "Dat_Referencia": "2017-06-20 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15571,
      "QtdFinalizadas": 10144,
      "QtdAbandonadas": 23157
    },
    {
      "Dat_Referencia": "2017-06-21 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14557,
      "QtdFinalizadas": 9899,
      "QtdAbandonadas": 22684
    },
    {
      "Dat_Referencia": "2017-06-22 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13394,
      "QtdFinalizadas": 9432,
      "QtdAbandonadas": 21760
    },
    {
      "Dat_Referencia": "2017-06-23 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11101,
      "QtdFinalizadas": 8132,
      "QtdAbandonadas": 18103
    },
    {
      "Dat_Referencia": "2017-06-24 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7772,
      "QtdFinalizadas": 5876,
      "QtdAbandonadas": 13223
    },
    {
      "Dat_Referencia": "2017-06-25 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 5799,
      "QtdFinalizadas": 4216,
      "QtdAbandonadas": 9149
    },
    {
      "Dat_Referencia": "2017-06-26 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15245,
      "QtdFinalizadas": 9460,
      "QtdAbandonadas": 21760
    },
    {
      "Dat_Referencia": "2017-06-27 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14492,
      "QtdFinalizadas": 9719,
      "QtdAbandonadas": 21299
    },
    {
      "Dat_Referencia": "2017-06-28 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13628,
      "QtdFinalizadas": 9336,
      "QtdAbandonadas": 21017
    },
    {
      "Dat_Referencia": "2017-06-29 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12426,
      "QtdFinalizadas": 8548,
      "QtdAbandonadas": 19023
    },
    {
      "Dat_Referencia": "2017-06-30 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11856,
      "QtdFinalizadas": 8607,
      "QtdAbandonadas": 21212
    },
    {
      "Dat_Referencia": "2017-07-01 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14198,
      "QtdFinalizadas": 9445,
      "QtdAbandonadas": 22393
    },
    {
      "Dat_Referencia": "2017-07-02 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 8514,
      "QtdFinalizadas": 5709,
      "QtdAbandonadas": 13042
    },
    {
      "Dat_Referencia": "2017-07-03 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 16142,
      "QtdFinalizadas": 10464,
      "QtdAbandonadas": 26453
    },
    {
      "Dat_Referencia": "2017-07-04 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14339,
      "QtdFinalizadas": 9823,
      "QtdAbandonadas": 23640
    },
    {
      "Dat_Referencia": "2017-07-05 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14473,
      "QtdFinalizadas": 9630,
      "QtdAbandonadas": 23618
    },
    {
      "Dat_Referencia": "2017-07-06 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15718,
      "QtdFinalizadas": 9878,
      "QtdAbandonadas": 24926
    },
    {
      "Dat_Referencia": "2017-07-07 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13765,
      "QtdFinalizadas": 9160,
      "QtdAbandonadas": 22762
    },
    {
      "Dat_Referencia": "2017-07-08 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 10195,
      "QtdFinalizadas": 7317,
      "QtdAbandonadas": 17429
    },
    {
      "Dat_Referencia": "2017-07-09 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7684,
      "QtdFinalizadas": 5532,
      "QtdAbandonadas": 12421
    },
    {
      "Dat_Referencia": "2017-07-10 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 17323,
      "QtdFinalizadas": 11062,
      "QtdAbandonadas": 26102
    },
    {
      "Dat_Referencia": "2017-07-11 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 16403,
      "QtdFinalizadas": 10365,
      "QtdAbandonadas": 24531
    },
    {
      "Dat_Referencia": "2017-07-12 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 16464,
      "QtdFinalizadas": 11607,
      "QtdAbandonadas": 24987
    },
    {
      "Dat_Referencia": "2017-07-13 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14648,
      "QtdFinalizadas": 9787,
      "QtdAbandonadas": 21955
    },
    {
      "Dat_Referencia": "2017-07-14 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12854,
      "QtdFinalizadas": 8821,
      "QtdAbandonadas": 20953
    },
    {
      "Dat_Referencia": "2017-07-15 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 9402,
      "QtdFinalizadas": 6834,
      "QtdAbandonadas": 15924
    },
    {
      "Dat_Referencia": "2017-07-16 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 6256,
      "QtdFinalizadas": 4851,
      "QtdAbandonadas": 10782
    },
    {
      "Dat_Referencia": "2017-07-17 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14217,
      "QtdFinalizadas": 9869,
      "QtdAbandonadas": 22590
    },
    {
      "Dat_Referencia": "2017-07-18 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13207,
      "QtdFinalizadas": 9328,
      "QtdAbandonadas": 21747
    },
    {
      "Dat_Referencia": "2017-07-19 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13354,
      "QtdFinalizadas": 9369,
      "QtdAbandonadas": 20985
    },
    {
      "Dat_Referencia": "2017-07-20 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12390,
      "QtdFinalizadas": 8711,
      "QtdAbandonadas": 20227
    },
    {
      "Dat_Referencia": "2017-07-21 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11245,
      "QtdFinalizadas": 8142,
      "QtdAbandonadas": 19149
    },
    {
      "Dat_Referencia": "2017-07-22 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 8037,
      "QtdFinalizadas": 6370,
      "QtdAbandonadas": 14751
    },
    {
      "Dat_Referencia": "2017-07-23 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 4447,
      "QtdFinalizadas": 3517,
      "QtdAbandonadas": 7950
    },
    {
      "Dat_Referencia": "2017-07-24 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12888,
      "QtdFinalizadas": 9031,
      "QtdAbandonadas": 21248
    },
    {
      "Dat_Referencia": "2017-07-25 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12490,
      "QtdFinalizadas": 8810,
      "QtdAbandonadas": 21249
    },
    {
      "Dat_Referencia": "2017-07-26 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12981,
      "QtdFinalizadas": 8671,
      "QtdAbandonadas": 20579
    },
    {
      "Dat_Referencia": "2017-07-27 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13216,
      "QtdFinalizadas": 9340,
      "QtdAbandonadas": 20449
    },
    {
      "Dat_Referencia": "2017-07-28 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11057,
      "QtdFinalizadas": 7683,
      "QtdAbandonadas": 17954
    },
    {
      "Dat_Referencia": "2017-07-29 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7934,
      "QtdFinalizadas": 5929,
      "QtdAbandonadas": 14166
    },
    {
      "Dat_Referencia": "2017-07-30 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 5173,
      "QtdFinalizadas": 4321,
      "QtdAbandonadas": 10053
    },
    {
      "Dat_Referencia": "2017-07-31 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 10623,
      "QtdFinalizadas": 9674,
      "QtdAbandonadas": 27054
    },
    {
      "Dat_Referencia": "2017-08-01 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15227,
      "QtdFinalizadas": 12722,
      "QtdAbandonadas": 33705
    },
    {
      "Dat_Referencia": "2017-08-02 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13330,
      "QtdFinalizadas": 10970,
      "QtdAbandonadas": 30344
    },
    {
      "Dat_Referencia": "2017-08-03 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11563,
      "QtdFinalizadas": 9919,
      "QtdAbandonadas": 28016
    },
    {
      "Dat_Referencia": "2017-08-04 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 10398,
      "QtdFinalizadas": 9254,
      "QtdAbandonadas": 26777
    },
    {
      "Dat_Referencia": "2017-08-05 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 8044,
      "QtdFinalizadas": 7228,
      "QtdAbandonadas": 20052
    },
    {
      "Dat_Referencia": "2017-08-06 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 5327,
      "QtdFinalizadas": 5052,
      "QtdAbandonadas": 13493
    },
    {
      "Dat_Referencia": "2017-08-07 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11154,
      "QtdFinalizadas": 10268,
      "QtdAbandonadas": 28068
    },
    {
      "Dat_Referencia": "2017-08-08 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 10958,
      "QtdFinalizadas": 10657,
      "QtdAbandonadas": 29081
    },
    {
      "Dat_Referencia": "2017-08-09 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 10522,
      "QtdFinalizadas": 10079,
      "QtdAbandonadas": 28074
    },
    {
      "Dat_Referencia": "2017-08-10 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12686,
      "QtdFinalizadas": 9545,
      "QtdAbandonadas": 23546
    },
    {
      "Dat_Referencia": "2017-08-11 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11137,
      "QtdFinalizadas": 8915,
      "QtdAbandonadas": 22049
    },
    {
      "Dat_Referencia": "2017-08-12 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 8378,
      "QtdFinalizadas": 6545,
      "QtdAbandonadas": 16739
    },
    {
      "Dat_Referencia": "2017-08-13 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 5511,
      "QtdFinalizadas": 5037,
      "QtdAbandonadas": 11274
    },
    {
      "Dat_Referencia": "2017-08-14 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13118,
      "QtdFinalizadas": 9577,
      "QtdAbandonadas": 23440
    },
    {
      "Dat_Referencia": "2017-08-15 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12363,
      "QtdFinalizadas": 8981,
      "QtdAbandonadas": 22371
    },
    {
      "Dat_Referencia": "2017-08-16 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12814,
      "QtdFinalizadas": 9812,
      "QtdAbandonadas": 24580
    },
    {
      "Dat_Referencia": "2017-08-17 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13164,
      "QtdFinalizadas": 9420,
      "QtdAbandonadas": 23524
    },
    {
      "Dat_Referencia": "2017-08-18 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 10997,
      "QtdFinalizadas": 8284,
      "QtdAbandonadas": 21336
    },
    {
      "Dat_Referencia": "2017-08-19 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7659,
      "QtdFinalizadas": 6502,
      "QtdAbandonadas": 15861
    },
    {
      "Dat_Referencia": "2017-08-20 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 4907,
      "QtdFinalizadas": 3779,
      "QtdAbandonadas": 9398
    },
    {
      "Dat_Referencia": "2017-08-21 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12328,
      "QtdFinalizadas": 9500,
      "QtdAbandonadas": 23155
    },
    {
      "Dat_Referencia": "2017-08-22 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13428,
      "QtdFinalizadas": 9244,
      "QtdAbandonadas": 21121
    },
    {
      "Dat_Referencia": "2017-08-23 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13440,
      "QtdFinalizadas": 9176,
      "QtdAbandonadas": 20498
    },
    {
      "Dat_Referencia": "2017-08-24 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12339,
      "QtdFinalizadas": 8829,
      "QtdAbandonadas": 20141
    },
    {
      "Dat_Referencia": "2017-08-25 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7577,
      "QtdFinalizadas": 5504,
      "QtdAbandonadas": 12568
    },
    {
      "Dat_Referencia": "2017-08-26 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 8535,
      "QtdFinalizadas": 6277,
      "QtdAbandonadas": 14660
    },
    {
      "Dat_Referencia": "2017-08-27 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 5490,
      "QtdFinalizadas": 4562,
      "QtdAbandonadas": 10017
    },
    {
      "Dat_Referencia": "2017-08-28 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13820,
      "QtdFinalizadas": 9564,
      "QtdAbandonadas": 21938
    },
    {
      "Dat_Referencia": "2017-08-29 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13207,
      "QtdFinalizadas": 9361,
      "QtdAbandonadas": 20730
    },
    {
      "Dat_Referencia": "2017-08-30 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13724,
      "QtdFinalizadas": 10056,
      "QtdAbandonadas": 22136
    },
    {
      "Dat_Referencia": "2017-08-31 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15076,
      "QtdFinalizadas": 10859,
      "QtdAbandonadas": 23954
    },
    {
      "Dat_Referencia": "2017-09-01 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 18167,
      "QtdFinalizadas": 11250,
      "QtdAbandonadas": 28291
    },
    {
      "Dat_Referencia": "2017-09-02 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12371,
      "QtdFinalizadas": 8305,
      "QtdAbandonadas": 19870
    },
    {
      "Dat_Referencia": "2017-09-03 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7600,
      "QtdFinalizadas": 5258,
      "QtdAbandonadas": 12612
    },
    {
      "Dat_Referencia": "2017-09-04 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 17912,
      "QtdFinalizadas": 11670,
      "QtdAbandonadas": 27311
    },
    {
      "Dat_Referencia": "2017-09-05 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 17394,
      "QtdFinalizadas": 10803,
      "QtdAbandonadas": 25915
    },
    {
      "Dat_Referencia": "2017-09-06 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 16129,
      "QtdFinalizadas": 10410,
      "QtdAbandonadas": 24867
    },
    {
      "Dat_Referencia": "2017-09-07 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 9967,
      "QtdFinalizadas": 6565,
      "QtdAbandonadas": 15481
    },
    {
      "Dat_Referencia": "2017-09-08 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14016,
      "QtdFinalizadas": 9322,
      "QtdAbandonadas": 22427
    },
    {
      "Dat_Referencia": "2017-09-09 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 10104,
      "QtdFinalizadas": 6998,
      "QtdAbandonadas": 16756
    },
    {
      "Dat_Referencia": "2017-09-10 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7423,
      "QtdFinalizadas": 5741,
      "QtdAbandonadas": 12121
    },
    {
      "Dat_Referencia": "2017-09-11 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 17600,
      "QtdFinalizadas": 11550,
      "QtdAbandonadas": 27210
    },
    {
      "Dat_Referencia": "2017-09-12 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 17324,
      "QtdFinalizadas": 10514,
      "QtdAbandonadas": 24889
    },
    {
      "Dat_Referencia": "2017-09-13 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 16251,
      "QtdFinalizadas": 10392,
      "QtdAbandonadas": 24186
    },
    {
      "Dat_Referencia": "2017-09-14 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15104,
      "QtdFinalizadas": 9952,
      "QtdAbandonadas": 23014
    },
    {
      "Dat_Referencia": "2017-09-15 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13670,
      "QtdFinalizadas": 9556,
      "QtdAbandonadas": 22196
    },
    {
      "Dat_Referencia": "2017-09-16 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 9745,
      "QtdFinalizadas": 6902,
      "QtdAbandonadas": 16385
    },
    {
      "Dat_Referencia": "2017-09-17 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 6078,
      "QtdFinalizadas": 4767,
      "QtdAbandonadas": 10769
    },
    {
      "Dat_Referencia": "2017-09-18 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15043,
      "QtdFinalizadas": 10110,
      "QtdAbandonadas": 23115
    },
    {
      "Dat_Referencia": "2017-09-19 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14168,
      "QtdFinalizadas": 9876,
      "QtdAbandonadas": 23501
    },
    {
      "Dat_Referencia": "2017-09-20 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13517,
      "QtdFinalizadas": 9486,
      "QtdAbandonadas": 23900
    },
    {
      "Dat_Referencia": "2017-09-21 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12746,
      "QtdFinalizadas": 9054,
      "QtdAbandonadas": 22191
    },
    {
      "Dat_Referencia": "2017-09-22 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11324,
      "QtdFinalizadas": 8221,
      "QtdAbandonadas": 19987
    },
    {
      "Dat_Referencia": "2017-09-23 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7956,
      "QtdFinalizadas": 6051,
      "QtdAbandonadas": 14762
    },
    {
      "Dat_Referencia": "2017-09-24 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 3986,
      "QtdFinalizadas": 3620,
      "QtdAbandonadas": 7463
    },
    {
      "Dat_Referencia": "2017-09-25 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13149,
      "QtdFinalizadas": 9667,
      "QtdAbandonadas": 22672
    },
    {
      "Dat_Referencia": "2017-09-26 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13109,
      "QtdFinalizadas": 9193,
      "QtdAbandonadas": 22345
    },
    {
      "Dat_Referencia": "2017-09-27 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12570,
      "QtdFinalizadas": 8859,
      "QtdAbandonadas": 21049
    },
    {
      "Dat_Referencia": "2017-09-28 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12281,
      "QtdFinalizadas": 9038,
      "QtdAbandonadas": 21122
    },
    {
      "Dat_Referencia": "2017-09-29 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11286,
      "QtdFinalizadas": 8548,
      "QtdAbandonadas": 20368
    },
    {
      "Dat_Referencia": "2017-09-30 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 10002,
      "QtdFinalizadas": 7421,
      "QtdAbandonadas": 18225
    },
    {
      "Dat_Referencia": "2017-10-01 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 8370,
      "QtdFinalizadas": 6130,
      "QtdAbandonadas": 15532
    },
    {
      "Dat_Referencia": "2017-10-02 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 16613,
      "QtdFinalizadas": 11593,
      "QtdAbandonadas": 29655
    },
    {
      "Dat_Referencia": "2017-10-03 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15978,
      "QtdFinalizadas": 11074,
      "QtdAbandonadas": 26918
    },
    {
      "Dat_Referencia": "2017-10-04 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14256,
      "QtdFinalizadas": 10154,
      "QtdAbandonadas": 25232
    },
    {
      "Dat_Referencia": "2017-10-05 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14289,
      "QtdFinalizadas": 9906,
      "QtdAbandonadas": 24556
    },
    {
      "Dat_Referencia": "2017-10-06 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12784,
      "QtdFinalizadas": 9102,
      "QtdAbandonadas": 22665
    },
    {
      "Dat_Referencia": "2017-10-07 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 9205,
      "QtdFinalizadas": 6836,
      "QtdAbandonadas": 17449
    },
    {
      "Dat_Referencia": "2017-10-08 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 6332,
      "QtdFinalizadas": 5249,
      "QtdAbandonadas": 12038
    },
    {
      "Dat_Referencia": "2017-10-09 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14441,
      "QtdFinalizadas": 10900,
      "QtdAbandonadas": 25589
    },
    {
      "Dat_Referencia": "2017-10-10 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 16102,
      "QtdFinalizadas": 11546,
      "QtdAbandonadas": 29224
    },
    {
      "Dat_Referencia": "2017-10-11 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13210,
      "QtdFinalizadas": 9596,
      "QtdAbandonadas": 23108
    },
    {
      "Dat_Referencia": "2017-10-12 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 8090,
      "QtdFinalizadas": 6616,
      "QtdAbandonadas": 14750
    },
    {
      "Dat_Referencia": "2017-10-13 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11791,
      "QtdFinalizadas": 8527,
      "QtdAbandonadas": 21189
    },
    {
      "Dat_Referencia": "2017-10-14 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 9173,
      "QtdFinalizadas": 6812,
      "QtdAbandonadas": 16269
    },
    {
      "Dat_Referencia": "2017-10-15 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 6187,
      "QtdFinalizadas": 4947,
      "QtdAbandonadas": 11282
    },
    {
      "Dat_Referencia": "2017-10-16 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15120,
      "QtdFinalizadas": 9665,
      "QtdAbandonadas": 23506
    },
    {
      "Dat_Referencia": "2017-10-17 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13785,
      "QtdFinalizadas": 9734,
      "QtdAbandonadas": 22977
    },
    {
      "Dat_Referencia": "2017-10-18 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13006,
      "QtdFinalizadas": 8996,
      "QtdAbandonadas": 22161
    },
    {
      "Dat_Referencia": "2017-10-19 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12352,
      "QtdFinalizadas": 8624,
      "QtdAbandonadas": 23488
    },
    {
      "Dat_Referencia": "2017-10-20 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11359,
      "QtdFinalizadas": 7985,
      "QtdAbandonadas": 20893
    },
    {
      "Dat_Referencia": "2017-10-21 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7795,
      "QtdFinalizadas": 5911,
      "QtdAbandonadas": 15559
    },
    {
      "Dat_Referencia": "2017-10-22 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 4430,
      "QtdFinalizadas": 3414,
      "QtdAbandonadas": 8836
    },
    {
      "Dat_Referencia": "2017-10-23 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12863,
      "QtdFinalizadas": 8952,
      "QtdAbandonadas": 22245
    },
    {
      "Dat_Referencia": "2017-10-24 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12427,
      "QtdFinalizadas": 8760,
      "QtdAbandonadas": 21987
    },
    {
      "Dat_Referencia": "2017-10-25 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12605,
      "QtdFinalizadas": 8517,
      "QtdAbandonadas": 21044
    },
    {
      "Dat_Referencia": "2017-10-26 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12053,
      "QtdFinalizadas": 8034,
      "QtdAbandonadas": 20492
    },
    {
      "Dat_Referencia": "2017-10-27 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11489,
      "QtdFinalizadas": 7817,
      "QtdAbandonadas": 19795
    },
    {
      "Dat_Referencia": "2017-10-28 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7973,
      "QtdFinalizadas": 5921,
      "QtdAbandonadas": 15829
    },
    {
      "Dat_Referencia": "2017-10-29 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 5411,
      "QtdFinalizadas": 4821,
      "QtdAbandonadas": 12880
    },
    {
      "Dat_Referencia": "2017-10-30 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13677,
      "QtdFinalizadas": 9124,
      "QtdAbandonadas": 23360
    },
    {
      "Dat_Referencia": "2017-10-31 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14879,
      "QtdFinalizadas": 10292,
      "QtdAbandonadas": 25438
    },
    {
      "Dat_Referencia": "2017-11-01 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 17830,
      "QtdFinalizadas": 11656,
      "QtdAbandonadas": 29953
    },
    {
      "Dat_Referencia": "2017-11-02 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11732,
      "QtdFinalizadas": 9052,
      "QtdAbandonadas": 16929
    },
    {
      "Dat_Referencia": "2017-11-03 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14068,
      "QtdFinalizadas": 9519,
      "QtdAbandonadas": 24348
    },
    {
      "Dat_Referencia": "2017-11-04 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 10126,
      "QtdFinalizadas": 6971,
      "QtdAbandonadas": 18106
    },
    {
      "Dat_Referencia": "2017-11-05 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7970,
      "QtdFinalizadas": 5088,
      "QtdAbandonadas": 12776
    },
    {
      "Dat_Referencia": "2017-11-06 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 19270,
      "QtdFinalizadas": 13066,
      "QtdAbandonadas": 29664
    },
    {
      "Dat_Referencia": "2017-11-07 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 17729,
      "QtdFinalizadas": 11408,
      "QtdAbandonadas": 29758
    },
    {
      "Dat_Referencia": "2017-11-08 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 16470,
      "QtdFinalizadas": 10979,
      "QtdAbandonadas": 29076
    },
    {
      "Dat_Referencia": "2017-11-09 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15425,
      "QtdFinalizadas": 10328,
      "QtdAbandonadas": 27573
    },
    {
      "Dat_Referencia": "2017-11-10 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13822,
      "QtdFinalizadas": 9322,
      "QtdAbandonadas": 25107
    },
    {
      "Dat_Referencia": "2017-11-11 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 9634,
      "QtdFinalizadas": 6785,
      "QtdAbandonadas": 17613
    },
    {
      "Dat_Referencia": "2017-11-12 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 6677,
      "QtdFinalizadas": 4612,
      "QtdAbandonadas": 11124
    },
    {
      "Dat_Referencia": "2017-11-13 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15865,
      "QtdFinalizadas": 9888,
      "QtdAbandonadas": 24334
    },
    {
      "Dat_Referencia": "2017-11-14 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12836,
      "QtdFinalizadas": 9028,
      "QtdAbandonadas": 23230
    },
    {
      "Dat_Referencia": "2017-11-15 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 8701,
      "QtdFinalizadas": 6378,
      "QtdAbandonadas": 14946
    },
    {
      "Dat_Referencia": "2017-11-16 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13090,
      "QtdFinalizadas": 9033,
      "QtdAbandonadas": 23208
    },
    {
      "Dat_Referencia": "2017-11-17 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11840,
      "QtdFinalizadas": 8174,
      "QtdAbandonadas": 20853
    },
    {
      "Dat_Referencia": "2017-11-18 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 9045,
      "QtdFinalizadas": 6687,
      "QtdAbandonadas": 16350
    },
    {
      "Dat_Referencia": "2017-11-19 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 4545,
      "QtdFinalizadas": 3735,
      "QtdAbandonadas": 8683
    },
    {
      "Dat_Referencia": "2017-11-20 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12711,
      "QtdFinalizadas": 9049,
      "QtdAbandonadas": 22070
    },
    {
      "Dat_Referencia": "2017-11-21 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12233,
      "QtdFinalizadas": 8253,
      "QtdAbandonadas": 21658
    },
    {
      "Dat_Referencia": "2017-11-22 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11663,
      "QtdFinalizadas": 8142,
      "QtdAbandonadas": 20759
    },
    {
      "Dat_Referencia": "2017-11-23 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11997,
      "QtdFinalizadas": 8459,
      "QtdAbandonadas": 21382
    },
    {
      "Dat_Referencia": "2017-11-24 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 10615,
      "QtdFinalizadas": 7868,
      "QtdAbandonadas": 20338
    },
    {
      "Dat_Referencia": "2017-11-25 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 8373,
      "QtdFinalizadas": 6036,
      "QtdAbandonadas": 16065
    },
    {
      "Dat_Referencia": "2017-11-26 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 5583,
      "QtdFinalizadas": 4449,
      "QtdAbandonadas": 10951
    },
    {
      "Dat_Referencia": "2017-11-27 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11801,
      "QtdFinalizadas": 8058,
      "QtdAbandonadas": 20765
    },
    {
      "Dat_Referencia": "2017-11-28 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12387,
      "QtdFinalizadas": 8446,
      "QtdAbandonadas": 21667
    },
    {
      "Dat_Referencia": "2017-11-29 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12328,
      "QtdFinalizadas": 8727,
      "QtdAbandonadas": 21180
    },
    {
      "Dat_Referencia": "2017-11-30 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13313,
      "QtdFinalizadas": 8969,
      "QtdAbandonadas": 24443
    },
    {
      "Dat_Referencia": "2017-12-01 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15345,
      "QtdFinalizadas": 9588,
      "QtdAbandonadas": 27174
    },
    {
      "Dat_Referencia": "2017-12-02 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 10636,
      "QtdFinalizadas": 7321,
      "QtdAbandonadas": 19382
    },
    {
      "Dat_Referencia": "2017-12-03 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 6489,
      "QtdFinalizadas": 5082,
      "QtdAbandonadas": 12119
    },
    {
      "Dat_Referencia": "2017-12-04 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 14679,
      "QtdFinalizadas": 9554,
      "QtdAbandonadas": 25014
    },
    {
      "Dat_Referencia": "2017-12-05 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 15484,
      "QtdFinalizadas": 10059,
      "QtdAbandonadas": 24514
    },
    {
      "Dat_Referencia": "2017-12-06 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13985,
      "QtdFinalizadas": 9642,
      "QtdAbandonadas": 23338
    },
    {
      "Dat_Referencia": "2017-12-07 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12937,
      "QtdFinalizadas": 8990,
      "QtdAbandonadas": 22397
    },
    {
      "Dat_Referencia": "2017-12-08 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 10871,
      "QtdFinalizadas": 7950,
      "QtdAbandonadas": 19488
    },
    {
      "Dat_Referencia": "2017-12-09 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 8338,
      "QtdFinalizadas": 6638,
      "QtdAbandonadas": 15744
    },
    {
      "Dat_Referencia": "2017-12-10 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 5935,
      "QtdFinalizadas": 4581,
      "QtdAbandonadas": 10614
    },
    {
      "Dat_Referencia": "2017-12-11 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 13136,
      "QtdFinalizadas": 9462,
      "QtdAbandonadas": 23097
    },
    {
      "Dat_Referencia": "2017-12-12 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 12605,
      "QtdFinalizadas": 9182,
      "QtdAbandonadas": 22182
    },
    {
      "Dat_Referencia": "2017-12-13 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11972,
      "QtdFinalizadas": 8843,
      "QtdAbandonadas": 20703
    },
    {
      "Dat_Referencia": "2017-12-14 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11556,
      "QtdFinalizadas": 8193,
      "QtdAbandonadas": 19524
    },
    {
      "Dat_Referencia": "2017-12-15 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11122,
      "QtdFinalizadas": 8193,
      "QtdAbandonadas": 19265
    },
    {
      "Dat_Referencia": "2017-12-16 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 7894,
      "QtdFinalizadas": 6147,
      "QtdAbandonadas": 14715
    },
    {
      "Dat_Referencia": "2017-12-17 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 5038,
      "QtdFinalizadas": 4509,
      "QtdAbandonadas": 9999
    },
    {
      "Dat_Referencia": "2017-12-18 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11378,
      "QtdFinalizadas": 8213,
      "QtdAbandonadas": 18876
    },
    {
      "Dat_Referencia": "2017-12-19 00:00:00.000",
      "Grupo": "Controle",
      "QtdDerivadas": 11853,
      "QtdFinalizadas": 8196,
      "QtdAbandonadas": 20280
    },
    {
      "Dat_Referencia": "2017-01-01 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 4932,
      "QtdFinalizadas": 1563,
      "QtdAbandonadas": 4086
    },
    {
      "Dat_Referencia": "2017-01-02 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 25607,
      "QtdFinalizadas": 6576,
      "QtdAbandonadas": 13804
    },
    {
      "Dat_Referencia": "2017-01-03 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 26337,
      "QtdFinalizadas": 6665,
      "QtdAbandonadas": 13730
    },
    {
      "Dat_Referencia": "2017-01-04 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 30465,
      "QtdFinalizadas": 17370,
      "QtdAbandonadas": 22376
    },
    {
      "Dat_Referencia": "2017-01-05 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 25598,
      "QtdFinalizadas": 9675,
      "QtdAbandonadas": 14951
    },
    {
      "Dat_Referencia": "2017-01-06 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22319,
      "QtdFinalizadas": 8038,
      "QtdAbandonadas": 13003
    },
    {
      "Dat_Referencia": "2017-01-07 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 13217,
      "QtdFinalizadas": 4194,
      "QtdAbandonadas": 8388
    },
    {
      "Dat_Referencia": "2017-01-08 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 7346,
      "QtdFinalizadas": 2470,
      "QtdAbandonadas": 5122
    },
    {
      "Dat_Referencia": "2017-01-09 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 31962,
      "QtdFinalizadas": 17042,
      "QtdAbandonadas": 17447
    },
    {
      "Dat_Referencia": "2017-01-10 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 27234,
      "QtdFinalizadas": 8893,
      "QtdAbandonadas": 15235
    },
    {
      "Dat_Referencia": "2017-01-11 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 29097,
      "QtdFinalizadas": 13655,
      "QtdAbandonadas": 16404
    },
    {
      "Dat_Referencia": "2017-01-12 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 26440,
      "QtdFinalizadas": 7405,
      "QtdAbandonadas": 14052
    },
    {
      "Dat_Referencia": "2017-01-13 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22813,
      "QtdFinalizadas": 6274,
      "QtdAbandonadas": 12979
    },
    {
      "Dat_Referencia": "2017-01-14 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 12928,
      "QtdFinalizadas": 3394,
      "QtdAbandonadas": 8062
    },
    {
      "Dat_Referencia": "2017-01-15 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 8066,
      "QtdFinalizadas": 2145,
      "QtdAbandonadas": 5314
    },
    {
      "Dat_Referencia": "2017-01-16 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22789,
      "QtdFinalizadas": 6221,
      "QtdAbandonadas": 12788
    },
    {
      "Dat_Referencia": "2017-01-17 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23048,
      "QtdFinalizadas": 5886,
      "QtdAbandonadas": 12608
    },
    {
      "Dat_Referencia": "2017-01-18 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 25043,
      "QtdFinalizadas": 11355,
      "QtdAbandonadas": 15788
    },
    {
      "Dat_Referencia": "2017-01-19 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23325,
      "QtdFinalizadas": 6823,
      "QtdAbandonadas": 13126
    },
    {
      "Dat_Referencia": "2017-01-20 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21201,
      "QtdFinalizadas": 5848,
      "QtdAbandonadas": 11839
    },
    {
      "Dat_Referencia": "2017-01-21 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 12339,
      "QtdFinalizadas": 3246,
      "QtdAbandonadas": 7837
    },
    {
      "Dat_Referencia": "2017-01-22 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 8207,
      "QtdFinalizadas": 1947,
      "QtdAbandonadas": 5391
    },
    {
      "Dat_Referencia": "2017-01-23 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23530,
      "QtdFinalizadas": 5987,
      "QtdAbandonadas": 13085
    },
    {
      "Dat_Referencia": "2017-01-24 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 25903,
      "QtdFinalizadas": 13468,
      "QtdAbandonadas": 14961
    },
    {
      "Dat_Referencia": "2017-01-25 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21965,
      "QtdFinalizadas": 6476,
      "QtdAbandonadas": 12811
    },
    {
      "Dat_Referencia": "2017-01-26 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21529,
      "QtdFinalizadas": 6154,
      "QtdAbandonadas": 12828
    },
    {
      "Dat_Referencia": "2017-01-27 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 19706,
      "QtdFinalizadas": 5724,
      "QtdAbandonadas": 11893
    },
    {
      "Dat_Referencia": "2017-01-28 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 12346,
      "QtdFinalizadas": 3230,
      "QtdAbandonadas": 7463
    },
    {
      "Dat_Referencia": "2017-01-29 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 8728,
      "QtdFinalizadas": 2239,
      "QtdAbandonadas": 5255
    },
    {
      "Dat_Referencia": "2017-01-30 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 29607,
      "QtdFinalizadas": 14134,
      "QtdAbandonadas": 15776
    },
    {
      "Dat_Referencia": "2017-01-31 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 27015,
      "QtdFinalizadas": 8290,
      "QtdAbandonadas": 14422
    },
    {
      "Dat_Referencia": "2017-02-01 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 33593,
      "QtdFinalizadas": 19414,
      "QtdAbandonadas": 19435
    },
    {
      "Dat_Referencia": "2017-02-02 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 27486,
      "QtdFinalizadas": 11991,
      "QtdAbandonadas": 15825
    },
    {
      "Dat_Referencia": "2017-02-03 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21595,
      "QtdFinalizadas": 7738,
      "QtdAbandonadas": 13729
    },
    {
      "Dat_Referencia": "2017-02-04 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 13075,
      "QtdFinalizadas": 4032,
      "QtdAbandonadas": 8956
    },
    {
      "Dat_Referencia": "2017-02-05 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 8536,
      "QtdFinalizadas": 2340,
      "QtdAbandonadas": 5816
    },
    {
      "Dat_Referencia": "2017-02-06 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23785,
      "QtdFinalizadas": 7169,
      "QtdAbandonadas": 13901
    },
    {
      "Dat_Referencia": "2017-02-07 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 25125,
      "QtdFinalizadas": 7631,
      "QtdAbandonadas": 14806
    },
    {
      "Dat_Referencia": "2017-02-08 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 27323,
      "QtdFinalizadas": 6783,
      "QtdAbandonadas": 14528
    },
    {
      "Dat_Referencia": "2017-02-09 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 37368,
      "QtdFinalizadas": 18293,
      "QtdAbandonadas": 19931
    },
    {
      "Dat_Referencia": "2017-02-10 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 24576,
      "QtdFinalizadas": 8137,
      "QtdAbandonadas": 13636
    },
    {
      "Dat_Referencia": "2017-02-11 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 14273,
      "QtdFinalizadas": 4107,
      "QtdAbandonadas": 8558
    },
    {
      "Dat_Referencia": "2017-02-12 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 6223,
      "QtdFinalizadas": 1466,
      "QtdAbandonadas": 3665
    },
    {
      "Dat_Referencia": "2017-02-13 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 28742,
      "QtdFinalizadas": 13159,
      "QtdAbandonadas": 16435
    },
    {
      "Dat_Referencia": "2017-02-14 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 26539,
      "QtdFinalizadas": 7683,
      "QtdAbandonadas": 14364
    },
    {
      "Dat_Referencia": "2017-02-15 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 24760,
      "QtdFinalizadas": 6240,
      "QtdAbandonadas": 13565
    },
    {
      "Dat_Referencia": "2017-02-16 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22434,
      "QtdFinalizadas": 5781,
      "QtdAbandonadas": 12622
    },
    {
      "Dat_Referencia": "2017-02-17 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21969,
      "QtdFinalizadas": 6905,
      "QtdAbandonadas": 12713
    },
    {
      "Dat_Referencia": "2017-02-18 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 12845,
      "QtdFinalizadas": 3246,
      "QtdAbandonadas": 8222
    },
    {
      "Dat_Referencia": "2017-02-19 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 8457,
      "QtdFinalizadas": 2005,
      "QtdAbandonadas": 5503
    },
    {
      "Dat_Referencia": "2017-02-20 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 28631,
      "QtdFinalizadas": 11634,
      "QtdAbandonadas": 16269
    },
    {
      "Dat_Referencia": "2017-02-21 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 27347,
      "QtdFinalizadas": 7175,
      "QtdAbandonadas": 15281
    },
    {
      "Dat_Referencia": "2017-02-22 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 25867,
      "QtdFinalizadas": 6163,
      "QtdAbandonadas": 13734
    },
    {
      "Dat_Referencia": "2017-02-23 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22086,
      "QtdFinalizadas": 4936,
      "QtdAbandonadas": 12437
    },
    {
      "Dat_Referencia": "2017-02-24 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23110,
      "QtdFinalizadas": 13985,
      "QtdAbandonadas": 16003
    },
    {
      "Dat_Referencia": "2017-02-25 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 12712,
      "QtdFinalizadas": 4202,
      "QtdAbandonadas": 8516
    },
    {
      "Dat_Referencia": "2017-02-26 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 7585,
      "QtdFinalizadas": 2428,
      "QtdAbandonadas": 5792
    },
    {
      "Dat_Referencia": "2017-02-27 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 11120,
      "QtdFinalizadas": 3272,
      "QtdAbandonadas": 7602
    },
    {
      "Dat_Referencia": "2017-02-28 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 9995,
      "QtdFinalizadas": 2686,
      "QtdAbandonadas": 6475
    },
    {
      "Dat_Referencia": "2017-03-01 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22860,
      "QtdFinalizadas": 6297,
      "QtdAbandonadas": 12733
    },
    {
      "Dat_Referencia": "2017-03-02 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 41516,
      "QtdFinalizadas": 18313,
      "QtdAbandonadas": 21603
    },
    {
      "Dat_Referencia": "2017-03-03 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 29098,
      "QtdFinalizadas": 8698,
      "QtdAbandonadas": 16402
    },
    {
      "Dat_Referencia": "2017-03-04 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 16874,
      "QtdFinalizadas": 4419,
      "QtdAbandonadas": 9915
    },
    {
      "Dat_Referencia": "2017-03-05 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 9686,
      "QtdFinalizadas": 2554,
      "QtdAbandonadas": 5984
    },
    {
      "Dat_Referencia": "2017-03-06 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 31530,
      "QtdFinalizadas": 8296,
      "QtdAbandonadas": 16448
    },
    {
      "Dat_Referencia": "2017-03-07 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 36890,
      "QtdFinalizadas": 20114,
      "QtdAbandonadas": 24753
    },
    {
      "Dat_Referencia": "2017-03-08 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 30985,
      "QtdFinalizadas": 12524,
      "QtdAbandonadas": 18358
    },
    {
      "Dat_Referencia": "2017-03-09 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 30322,
      "QtdFinalizadas": 8661,
      "QtdAbandonadas": 16959
    },
    {
      "Dat_Referencia": "2017-03-10 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 30894,
      "QtdFinalizadas": 8133,
      "QtdAbandonadas": 16087
    },
    {
      "Dat_Referencia": "2017-03-11 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 17208,
      "QtdFinalizadas": 4122,
      "QtdAbandonadas": 9473
    },
    {
      "Dat_Referencia": "2017-03-12 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 9758,
      "QtdFinalizadas": 2249,
      "QtdAbandonadas": 5715
    },
    {
      "Dat_Referencia": "2017-03-13 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 38029,
      "QtdFinalizadas": 18451,
      "QtdAbandonadas": 20054
    },
    {
      "Dat_Referencia": "2017-03-14 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 33456,
      "QtdFinalizadas": 9656,
      "QtdAbandonadas": 16652
    },
    {
      "Dat_Referencia": "2017-03-15 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 37990,
      "QtdFinalizadas": 13166,
      "QtdAbandonadas": 18286
    },
    {
      "Dat_Referencia": "2017-03-16 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 30799,
      "QtdFinalizadas": 8659,
      "QtdAbandonadas": 16200
    },
    {
      "Dat_Referencia": "2017-03-17 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23401,
      "QtdFinalizadas": 6008,
      "QtdAbandonadas": 13807
    },
    {
      "Dat_Referencia": "2017-03-18 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 15854,
      "QtdFinalizadas": 3738,
      "QtdAbandonadas": 8779
    },
    {
      "Dat_Referencia": "2017-03-19 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 9370,
      "QtdFinalizadas": 1923,
      "QtdAbandonadas": 5046
    },
    {
      "Dat_Referencia": "2017-03-20 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 33615,
      "QtdFinalizadas": 8133,
      "QtdAbandonadas": 16580
    },
    {
      "Dat_Referencia": "2017-03-21 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 32612,
      "QtdFinalizadas": 6646,
      "QtdAbandonadas": 15523
    },
    {
      "Dat_Referencia": "2017-03-22 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 31966,
      "QtdFinalizadas": 12278,
      "QtdAbandonadas": 17207
    },
    {
      "Dat_Referencia": "2017-03-23 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23994,
      "QtdFinalizadas": 6655,
      "QtdAbandonadas": 13612
    },
    {
      "Dat_Referencia": "2017-03-24 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21764,
      "QtdFinalizadas": 4838,
      "QtdAbandonadas": 11930
    },
    {
      "Dat_Referencia": "2017-03-25 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 11946,
      "QtdFinalizadas": 2976,
      "QtdAbandonadas": 7913
    },
    {
      "Dat_Referencia": "2017-03-26 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 7309,
      "QtdFinalizadas": 2025,
      "QtdAbandonadas": 5039
    },
    {
      "Dat_Referencia": "2017-03-27 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 26562,
      "QtdFinalizadas": 12559,
      "QtdAbandonadas": 15611
    },
    {
      "Dat_Referencia": "2017-03-28 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 26754,
      "QtdFinalizadas": 8401,
      "QtdAbandonadas": 14956
    },
    {
      "Dat_Referencia": "2017-03-29 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 26982,
      "QtdFinalizadas": 6532,
      "QtdAbandonadas": 14618
    },
    {
      "Dat_Referencia": "2017-03-30 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22339,
      "QtdFinalizadas": 7793,
      "QtdAbandonadas": 15337
    },
    {
      "Dat_Referencia": "2017-03-31 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 19850,
      "QtdFinalizadas": 7140,
      "QtdAbandonadas": 11996
    },
    {
      "Dat_Referencia": "2017-04-01 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 13484,
      "QtdFinalizadas": 4657,
      "QtdAbandonadas": 8747
    },
    {
      "Dat_Referencia": "2017-04-02 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 8681,
      "QtdFinalizadas": 2535,
      "QtdAbandonadas": 5421
    },
    {
      "Dat_Referencia": "2017-04-03 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 27649,
      "QtdFinalizadas": 16946,
      "QtdAbandonadas": 16765
    },
    {
      "Dat_Referencia": "2017-04-04 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 25202,
      "QtdFinalizadas": 10993,
      "QtdAbandonadas": 15298
    },
    {
      "Dat_Referencia": "2017-04-05 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 28608,
      "QtdFinalizadas": 22849,
      "QtdAbandonadas": 19190
    },
    {
      "Dat_Referencia": "2017-04-06 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 26067,
      "QtdFinalizadas": 13692,
      "QtdAbandonadas": 15740
    },
    {
      "Dat_Referencia": "2017-04-07 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22638,
      "QtdFinalizadas": 9940,
      "QtdAbandonadas": 14062
    },
    {
      "Dat_Referencia": "2017-04-08 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 13970,
      "QtdFinalizadas": 5224,
      "QtdAbandonadas": 9068
    },
    {
      "Dat_Referencia": "2017-04-09 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 9217,
      "QtdFinalizadas": 2828,
      "QtdAbandonadas": 5731
    },
    {
      "Dat_Referencia": "2017-04-10 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 29924,
      "QtdFinalizadas": 23334,
      "QtdAbandonadas": 18275
    },
    {
      "Dat_Referencia": "2017-04-11 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 26249,
      "QtdFinalizadas": 13304,
      "QtdAbandonadas": 16390
    },
    {
      "Dat_Referencia": "2017-04-12 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 26612,
      "QtdFinalizadas": 16290,
      "QtdAbandonadas": 16224
    },
    {
      "Dat_Referencia": "2017-04-13 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21506,
      "QtdFinalizadas": 9780,
      "QtdAbandonadas": 12541
    },
    {
      "Dat_Referencia": "2017-04-14 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 9757,
      "QtdFinalizadas": 3545,
      "QtdAbandonadas": 6174
    },
    {
      "Dat_Referencia": "2017-04-15 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 11498,
      "QtdFinalizadas": 3548,
      "QtdAbandonadas": 7144
    },
    {
      "Dat_Referencia": "2017-04-16 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 6879,
      "QtdFinalizadas": 2262,
      "QtdAbandonadas": 4683
    },
    {
      "Dat_Referencia": "2017-04-17 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 24412,
      "QtdFinalizadas": 8615,
      "QtdAbandonadas": 13063
    },
    {
      "Dat_Referencia": "2017-04-18 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23787,
      "QtdFinalizadas": 9489,
      "QtdAbandonadas": 13283
    },
    {
      "Dat_Referencia": "2017-04-19 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23163,
      "QtdFinalizadas": 10832,
      "QtdAbandonadas": 13376
    },
    {
      "Dat_Referencia": "2017-04-20 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21663,
      "QtdFinalizadas": 8154,
      "QtdAbandonadas": 12831
    },
    {
      "Dat_Referencia": "2017-04-21 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 10877,
      "QtdFinalizadas": 3365,
      "QtdAbandonadas": 6937
    },
    {
      "Dat_Referencia": "2017-04-22 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 10929,
      "QtdFinalizadas": 3130,
      "QtdAbandonadas": 6833
    },
    {
      "Dat_Referencia": "2017-04-23 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 6385,
      "QtdFinalizadas": 1779,
      "QtdAbandonadas": 4047
    },
    {
      "Dat_Referencia": "2017-04-24 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23961,
      "QtdFinalizadas": 15729,
      "QtdAbandonadas": 15290
    },
    {
      "Dat_Referencia": "2017-04-25 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22189,
      "QtdFinalizadas": 8863,
      "QtdAbandonadas": 13465
    },
    {
      "Dat_Referencia": "2017-04-26 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21985,
      "QtdFinalizadas": 8068,
      "QtdAbandonadas": 12839
    },
    {
      "Dat_Referencia": "2017-04-27 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 19579,
      "QtdFinalizadas": 8192,
      "QtdAbandonadas": 11960
    },
    {
      "Dat_Referencia": "2017-04-28 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 16340,
      "QtdFinalizadas": 12945,
      "QtdAbandonadas": 12700
    },
    {
      "Dat_Referencia": "2017-04-29 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 13116,
      "QtdFinalizadas": 5491,
      "QtdAbandonadas": 8168
    },
    {
      "Dat_Referencia": "2017-04-30 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 7361,
      "QtdFinalizadas": 2541,
      "QtdAbandonadas": 4858
    },
    {
      "Dat_Referencia": "2017-05-01 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 9662,
      "QtdFinalizadas": 3292,
      "QtdAbandonadas": 6194
    },
    {
      "Dat_Referencia": "2017-05-02 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 27618,
      "QtdFinalizadas": 24377,
      "QtdAbandonadas": 18661
    },
    {
      "Dat_Referencia": "2017-05-03 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 29516,
      "QtdFinalizadas": 21314,
      "QtdAbandonadas": 21863
    },
    {
      "Dat_Referencia": "2017-05-04 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23851,
      "QtdFinalizadas": 10702,
      "QtdAbandonadas": 14340
    },
    {
      "Dat_Referencia": "2017-05-05 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 19166,
      "QtdFinalizadas": 12952,
      "QtdAbandonadas": 17157
    },
    {
      "Dat_Referencia": "2017-05-06 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 13094,
      "QtdFinalizadas": 5872,
      "QtdAbandonadas": 9081
    },
    {
      "Dat_Referencia": "2017-05-07 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 8362,
      "QtdFinalizadas": 3048,
      "QtdAbandonadas": 5464
    },
    {
      "Dat_Referencia": "2017-05-08 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 25366,
      "QtdFinalizadas": 11332,
      "QtdAbandonadas": 14898
    },
    {
      "Dat_Referencia": "2017-05-09 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23927,
      "QtdFinalizadas": 10323,
      "QtdAbandonadas": 15141
    },
    {
      "Dat_Referencia": "2017-05-10 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 29529,
      "QtdFinalizadas": 25799,
      "QtdAbandonadas": 20763
    },
    {
      "Dat_Referencia": "2017-05-11 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 28095,
      "QtdFinalizadas": 21524,
      "QtdAbandonadas": 17525
    },
    {
      "Dat_Referencia": "2017-05-12 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 13568,
      "QtdFinalizadas": 7154,
      "QtdAbandonadas": 9048
    },
    {
      "Dat_Referencia": "2017-05-13 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 13531,
      "QtdFinalizadas": 5325,
      "QtdAbandonadas": 8337
    },
    {
      "Dat_Referencia": "2017-05-14 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 7726,
      "QtdFinalizadas": 2737,
      "QtdAbandonadas": 5610
    },
    {
      "Dat_Referencia": "2017-05-15 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 28030,
      "QtdFinalizadas": 9884,
      "QtdAbandonadas": 16437
    },
    {
      "Dat_Referencia": "2017-05-16 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 26979,
      "QtdFinalizadas": 9431,
      "QtdAbandonadas": 14508
    },
    {
      "Dat_Referencia": "2017-05-17 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22990,
      "QtdFinalizadas": 7191,
      "QtdAbandonadas": 12591
    },
    {
      "Dat_Referencia": "2017-05-18 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 19989,
      "QtdFinalizadas": 7053,
      "QtdAbandonadas": 11493
    },
    {
      "Dat_Referencia": "2017-05-19 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 18027,
      "QtdFinalizadas": 6959,
      "QtdAbandonadas": 11734
    },
    {
      "Dat_Referencia": "2017-05-20 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 11766,
      "QtdFinalizadas": 3716,
      "QtdAbandonadas": 7418
    },
    {
      "Dat_Referencia": "2017-05-21 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 6389,
      "QtdFinalizadas": 1647,
      "QtdAbandonadas": 3860
    },
    {
      "Dat_Referencia": "2017-05-22 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 27590,
      "QtdFinalizadas": 16228,
      "QtdAbandonadas": 17122
    },
    {
      "Dat_Referencia": "2017-05-23 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22546,
      "QtdFinalizadas": 9648,
      "QtdAbandonadas": 13265
    },
    {
      "Dat_Referencia": "2017-05-24 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 25126,
      "QtdFinalizadas": 18335,
      "QtdAbandonadas": 16451
    },
    {
      "Dat_Referencia": "2017-05-25 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21336,
      "QtdFinalizadas": 9834,
      "QtdAbandonadas": 13119
    },
    {
      "Dat_Referencia": "2017-05-26 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 18019,
      "QtdFinalizadas": 7422,
      "QtdAbandonadas": 11052
    },
    {
      "Dat_Referencia": "2017-05-27 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 10456,
      "QtdFinalizadas": 4018,
      "QtdAbandonadas": 6902
    },
    {
      "Dat_Referencia": "2017-05-28 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 6854,
      "QtdFinalizadas": 2185,
      "QtdAbandonadas": 4411
    },
    {
      "Dat_Referencia": "2017-05-29 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 19805,
      "QtdFinalizadas": 7810,
      "QtdAbandonadas": 11720
    },
    {
      "Dat_Referencia": "2017-05-30 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21093,
      "QtdFinalizadas": 7917,
      "QtdAbandonadas": 11832
    },
    {
      "Dat_Referencia": "2017-05-31 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 20987,
      "QtdFinalizadas": 9593,
      "QtdAbandonadas": 12428
    },
    {
      "Dat_Referencia": "2017-06-01 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22637,
      "QtdFinalizadas": 17433,
      "QtdAbandonadas": 15707
    },
    {
      "Dat_Referencia": "2017-06-02 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 19664,
      "QtdFinalizadas": 9509,
      "QtdAbandonadas": 12124
    },
    {
      "Dat_Referencia": "2017-06-03 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 11249,
      "QtdFinalizadas": 4462,
      "QtdAbandonadas": 7890
    },
    {
      "Dat_Referencia": "2017-06-04 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 7064,
      "QtdFinalizadas": 2426,
      "QtdAbandonadas": 4915
    },
    {
      "Dat_Referencia": "2017-06-05 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23351,
      "QtdFinalizadas": 16261,
      "QtdAbandonadas": 16289
    },
    {
      "Dat_Referencia": "2017-06-06 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 26833,
      "QtdFinalizadas": 22574,
      "QtdAbandonadas": 18890
    },
    {
      "Dat_Referencia": "2017-06-07 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 29550,
      "QtdFinalizadas": 28329,
      "QtdAbandonadas": 20149
    },
    {
      "Dat_Referencia": "2017-06-08 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23940,
      "QtdFinalizadas": 11871,
      "QtdAbandonadas": 13832
    },
    {
      "Dat_Referencia": "2017-06-09 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 19923,
      "QtdFinalizadas": 9139,
      "QtdAbandonadas": 11839
    },
    {
      "Dat_Referencia": "2017-06-10 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 11603,
      "QtdFinalizadas": 4649,
      "QtdAbandonadas": 7542
    },
    {
      "Dat_Referencia": "2017-06-11 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 7417,
      "QtdFinalizadas": 2474,
      "QtdAbandonadas": 4624
    },
    {
      "Dat_Referencia": "2017-06-12 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22246,
      "QtdFinalizadas": 15668,
      "QtdAbandonadas": 14214
    },
    {
      "Dat_Referencia": "2017-06-13 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21382,
      "QtdFinalizadas": 9472,
      "QtdAbandonadas": 13178
    },
    {
      "Dat_Referencia": "2017-06-14 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 20571,
      "QtdFinalizadas": 8321,
      "QtdAbandonadas": 14551
    },
    {
      "Dat_Referencia": "2017-06-15 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 10586,
      "QtdFinalizadas": 3558,
      "QtdAbandonadas": 6855
    },
    {
      "Dat_Referencia": "2017-06-16 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 17086,
      "QtdFinalizadas": 7151,
      "QtdAbandonadas": 10516
    },
    {
      "Dat_Referencia": "2017-06-17 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 10567,
      "QtdFinalizadas": 3896,
      "QtdAbandonadas": 6716
    },
    {
      "Dat_Referencia": "2017-06-18 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 6681,
      "QtdFinalizadas": 2075,
      "QtdAbandonadas": 4626
    },
    {
      "Dat_Referencia": "2017-06-19 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 25730,
      "QtdFinalizadas": 16316,
      "QtdAbandonadas": 14970
    },
    {
      "Dat_Referencia": "2017-06-20 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22010,
      "QtdFinalizadas": 10153,
      "QtdAbandonadas": 13818
    },
    {
      "Dat_Referencia": "2017-06-21 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 20753,
      "QtdFinalizadas": 7717,
      "QtdAbandonadas": 13063
    },
    {
      "Dat_Referencia": "2017-06-22 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23025,
      "QtdFinalizadas": 19884,
      "QtdAbandonadas": 16197
    },
    {
      "Dat_Referencia": "2017-06-23 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 16704,
      "QtdFinalizadas": 8036,
      "QtdAbandonadas": 11251
    },
    {
      "Dat_Referencia": "2017-06-24 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 9267,
      "QtdFinalizadas": 3624,
      "QtdAbandonadas": 6404
    },
    {
      "Dat_Referencia": "2017-06-25 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 5611,
      "QtdFinalizadas": 1736,
      "QtdAbandonadas": 3978
    },
    {
      "Dat_Referencia": "2017-06-26 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 19382,
      "QtdFinalizadas": 7738,
      "QtdAbandonadas": 12193
    },
    {
      "Dat_Referencia": "2017-06-27 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23727,
      "QtdFinalizadas": 21318,
      "QtdAbandonadas": 16163
    },
    {
      "Dat_Referencia": "2017-06-28 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 20364,
      "QtdFinalizadas": 10442,
      "QtdAbandonadas": 15628
    },
    {
      "Dat_Referencia": "2017-06-29 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 17318,
      "QtdFinalizadas": 7600,
      "QtdAbandonadas": 13484
    },
    {
      "Dat_Referencia": "2017-06-30 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 17296,
      "QtdFinalizadas": 7899,
      "QtdAbandonadas": 16149
    },
    {
      "Dat_Referencia": "2017-07-01 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 7311,
      "QtdFinalizadas": 3348,
      "QtdAbandonadas": 23892
    },
    {
      "Dat_Referencia": "2017-07-02 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 7390,
      "QtdFinalizadas": 2842,
      "QtdAbandonadas": 5495
    },
    {
      "Dat_Referencia": "2017-07-03 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 24787,
      "QtdFinalizadas": 22735,
      "QtdAbandonadas": 21389
    },
    {
      "Dat_Referencia": "2017-07-04 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22165,
      "QtdFinalizadas": 15411,
      "QtdAbandonadas": 17496
    },
    {
      "Dat_Referencia": "2017-07-05 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 20158,
      "QtdFinalizadas": 10303,
      "QtdAbandonadas": 16349
    },
    {
      "Dat_Referencia": "2017-07-06 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21011,
      "QtdFinalizadas": 10415,
      "QtdAbandonadas": 14313
    },
    {
      "Dat_Referencia": "2017-07-07 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 18863,
      "QtdFinalizadas": 8107,
      "QtdAbandonadas": 12537
    },
    {
      "Dat_Referencia": "2017-07-08 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 12179,
      "QtdFinalizadas": 4845,
      "QtdAbandonadas": 8338
    },
    {
      "Dat_Referencia": "2017-07-09 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 8143,
      "QtdFinalizadas": 2709,
      "QtdAbandonadas": 5418
    },
    {
      "Dat_Referencia": "2017-07-10 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 28295,
      "QtdFinalizadas": 22104,
      "QtdAbandonadas": 18499
    },
    {
      "Dat_Referencia": "2017-07-11 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 25882,
      "QtdFinalizadas": 12958,
      "QtdAbandonadas": 16214
    },
    {
      "Dat_Referencia": "2017-07-12 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 29151,
      "QtdFinalizadas": 19137,
      "QtdAbandonadas": 18023
    },
    {
      "Dat_Referencia": "2017-07-13 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22398,
      "QtdFinalizadas": 9752,
      "QtdAbandonadas": 13331
    },
    {
      "Dat_Referencia": "2017-07-14 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 18662,
      "QtdFinalizadas": 7284,
      "QtdAbandonadas": 12392
    },
    {
      "Dat_Referencia": "2017-07-15 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 11614,
      "QtdFinalizadas": 4139,
      "QtdAbandonadas": 8024
    },
    {
      "Dat_Referencia": "2017-07-16 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 6975,
      "QtdFinalizadas": 2530,
      "QtdAbandonadas": 4908
    },
    {
      "Dat_Referencia": "2017-07-17 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 20267,
      "QtdFinalizadas": 7417,
      "QtdAbandonadas": 13331
    },
    {
      "Dat_Referencia": "2017-07-18 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23360,
      "QtdFinalizadas": 17243,
      "QtdAbandonadas": 15829
    },
    {
      "Dat_Referencia": "2017-07-19 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 20782,
      "QtdFinalizadas": 14854,
      "QtdAbandonadas": 18286
    },
    {
      "Dat_Referencia": "2017-07-20 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22767,
      "QtdFinalizadas": 8166,
      "QtdAbandonadas": 12485
    },
    {
      "Dat_Referencia": "2017-07-21 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 18872,
      "QtdFinalizadas": 6719,
      "QtdAbandonadas": 11417
    },
    {
      "Dat_Referencia": "2017-07-22 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 11697,
      "QtdFinalizadas": 3794,
      "QtdAbandonadas": 7562
    },
    {
      "Dat_Referencia": "2017-07-23 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 5515,
      "QtdFinalizadas": 1713,
      "QtdAbandonadas": 3868
    },
    {
      "Dat_Referencia": "2017-07-24 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 20610,
      "QtdFinalizadas": 6780,
      "QtdAbandonadas": 12634
    },
    {
      "Dat_Referencia": "2017-07-25 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23897,
      "QtdFinalizadas": 15825,
      "QtdAbandonadas": 16191
    },
    {
      "Dat_Referencia": "2017-07-26 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21476,
      "QtdFinalizadas": 9535,
      "QtdAbandonadas": 13571
    },
    {
      "Dat_Referencia": "2017-07-27 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 19601,
      "QtdFinalizadas": 8911,
      "QtdAbandonadas": 12595
    },
    {
      "Dat_Referencia": "2017-07-28 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 17367,
      "QtdFinalizadas": 7219,
      "QtdAbandonadas": 11641
    },
    {
      "Dat_Referencia": "2017-07-29 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 10892,
      "QtdFinalizadas": 4725,
      "QtdAbandonadas": 7893
    },
    {
      "Dat_Referencia": "2017-07-30 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 7505,
      "QtdFinalizadas": 2925,
      "QtdAbandonadas": 5375
    },
    {
      "Dat_Referencia": "2017-07-31 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21406,
      "QtdFinalizadas": 14170,
      "QtdAbandonadas": 20491
    },
    {
      "Dat_Referencia": "2017-08-01 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 27072,
      "QtdFinalizadas": 28846,
      "QtdAbandonadas": 24023
    },
    {
      "Dat_Referencia": "2017-08-02 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 24026,
      "QtdFinalizadas": 15571,
      "QtdAbandonadas": 21427
    },
    {
      "Dat_Referencia": "2017-08-03 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21071,
      "QtdFinalizadas": 13213,
      "QtdAbandonadas": 19185
    },
    {
      "Dat_Referencia": "2017-08-04 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 17525,
      "QtdFinalizadas": 9195,
      "QtdAbandonadas": 15618
    },
    {
      "Dat_Referencia": "2017-08-05 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 9932,
      "QtdFinalizadas": 5134,
      "QtdAbandonadas": 9313
    },
    {
      "Dat_Referencia": "2017-08-06 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 6466,
      "QtdFinalizadas": 2977,
      "QtdAbandonadas": 6153
    },
    {
      "Dat_Referencia": "2017-08-07 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 19750,
      "QtdFinalizadas": 10155,
      "QtdAbandonadas": 16734
    },
    {
      "Dat_Referencia": "2017-08-08 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22700,
      "QtdFinalizadas": 26115,
      "QtdAbandonadas": 22797
    },
    {
      "Dat_Referencia": "2017-08-09 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23403,
      "QtdFinalizadas": 20949,
      "QtdAbandonadas": 21118
    },
    {
      "Dat_Referencia": "2017-08-10 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22098,
      "QtdFinalizadas": 12223,
      "QtdAbandonadas": 19818
    },
    {
      "Dat_Referencia": "2017-08-11 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 18373,
      "QtdFinalizadas": 8879,
      "QtdAbandonadas": 15884
    },
    {
      "Dat_Referencia": "2017-08-12 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 10542,
      "QtdFinalizadas": 4698,
      "QtdAbandonadas": 10073
    },
    {
      "Dat_Referencia": "2017-08-13 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 5494,
      "QtdFinalizadas": 2653,
      "QtdAbandonadas": 5995
    },
    {
      "Dat_Referencia": "2017-08-14 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 19307,
      "QtdFinalizadas": 7821,
      "QtdAbandonadas": 16767
    },
    {
      "Dat_Referencia": "2017-08-15 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 17795,
      "QtdFinalizadas": 7184,
      "QtdAbandonadas": 16606
    },
    {
      "Dat_Referencia": "2017-08-16 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21842,
      "QtdFinalizadas": 17974,
      "QtdAbandonadas": 21136
    },
    {
      "Dat_Referencia": "2017-08-17 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 18848,
      "QtdFinalizadas": 9240,
      "QtdAbandonadas": 16106
    },
    {
      "Dat_Referencia": "2017-08-18 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 16377,
      "QtdFinalizadas": 7568,
      "QtdAbandonadas": 14907
    },
    {
      "Dat_Referencia": "2017-08-19 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 9183,
      "QtdFinalizadas": 4323,
      "QtdAbandonadas": 9446
    },
    {
      "Dat_Referencia": "2017-08-20 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 5921,
      "QtdFinalizadas": 2342,
      "QtdAbandonadas": 5671
    },
    {
      "Dat_Referencia": "2017-08-21 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 18929,
      "QtdFinalizadas": 7643,
      "QtdAbandonadas": 16211
    },
    {
      "Dat_Referencia": "2017-08-22 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 24415,
      "QtdFinalizadas": 19727,
      "QtdAbandonadas": 16073
    },
    {
      "Dat_Referencia": "2017-08-23 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21933,
      "QtdFinalizadas": 9025,
      "QtdAbandonadas": 13051
    },
    {
      "Dat_Referencia": "2017-08-24 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 20634,
      "QtdFinalizadas": 7825,
      "QtdAbandonadas": 12446
    },
    {
      "Dat_Referencia": "2017-08-25 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 11107,
      "QtdFinalizadas": 4494,
      "QtdAbandonadas": 7909
    },
    {
      "Dat_Referencia": "2017-08-26 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 10261,
      "QtdFinalizadas": 4447,
      "QtdAbandonadas": 7137
    },
    {
      "Dat_Referencia": "2017-08-27 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 6336,
      "QtdFinalizadas": 2824,
      "QtdAbandonadas": 4648
    },
    {
      "Dat_Referencia": "2017-08-28 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23857,
      "QtdFinalizadas": 15503,
      "QtdAbandonadas": 14128
    },
    {
      "Dat_Referencia": "2017-08-29 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21801,
      "QtdFinalizadas": 11032,
      "QtdAbandonadas": 13906
    },
    {
      "Dat_Referencia": "2017-08-30 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21222,
      "QtdFinalizadas": 9031,
      "QtdAbandonadas": 12886
    },
    {
      "Dat_Referencia": "2017-08-31 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 29453,
      "QtdFinalizadas": 26267,
      "QtdAbandonadas": 18696
    },
    {
      "Dat_Referencia": "2017-09-01 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22938,
      "QtdFinalizadas": 14780,
      "QtdAbandonadas": 15628
    },
    {
      "Dat_Referencia": "2017-09-02 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 13154,
      "QtdFinalizadas": 6443,
      "QtdAbandonadas": 8475
    },
    {
      "Dat_Referencia": "2017-09-03 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 7226,
      "QtdFinalizadas": 3158,
      "QtdAbandonadas": 5228
    },
    {
      "Dat_Referencia": "2017-09-04 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 27185,
      "QtdFinalizadas": 10366,
      "QtdAbandonadas": 15624
    },
    {
      "Dat_Referencia": "2017-09-05 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23850,
      "QtdFinalizadas": 9959,
      "QtdAbandonadas": 14368
    },
    {
      "Dat_Referencia": "2017-09-06 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 25784,
      "QtdFinalizadas": 26613,
      "QtdAbandonadas": 18066
    },
    {
      "Dat_Referencia": "2017-09-07 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 10604,
      "QtdFinalizadas": 5938,
      "QtdAbandonadas": 7029
    },
    {
      "Dat_Referencia": "2017-09-08 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 19923,
      "QtdFinalizadas": 10723,
      "QtdAbandonadas": 11741
    },
    {
      "Dat_Referencia": "2017-09-09 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 12561,
      "QtdFinalizadas": 5679,
      "QtdAbandonadas": 7573
    },
    {
      "Dat_Referencia": "2017-09-10 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 7581,
      "QtdFinalizadas": 3617,
      "QtdAbandonadas": 4945
    },
    {
      "Dat_Referencia": "2017-09-11 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 30685,
      "QtdFinalizadas": 20843,
      "QtdAbandonadas": 18611
    },
    {
      "Dat_Referencia": "2017-09-12 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 24106,
      "QtdFinalizadas": 11158,
      "QtdAbandonadas": 14204
    },
    {
      "Dat_Referencia": "2017-09-13 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23121,
      "QtdFinalizadas": 9858,
      "QtdAbandonadas": 13942
    },
    {
      "Dat_Referencia": "2017-09-14 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 20985,
      "QtdFinalizadas": 8596,
      "QtdAbandonadas": 12745
    },
    {
      "Dat_Referencia": "2017-09-15 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 18432,
      "QtdFinalizadas": 7911,
      "QtdAbandonadas": 12570
    },
    {
      "Dat_Referencia": "2017-09-16 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 10724,
      "QtdFinalizadas": 4502,
      "QtdAbandonadas": 7310
    },
    {
      "Dat_Referencia": "2017-09-17 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 5770,
      "QtdFinalizadas": 2569,
      "QtdAbandonadas": 4326
    },
    {
      "Dat_Referencia": "2017-09-18 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 20085,
      "QtdFinalizadas": 8272,
      "QtdAbandonadas": 12819
    },
    {
      "Dat_Referencia": "2017-09-19 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 25530,
      "QtdFinalizadas": 15822,
      "QtdAbandonadas": 16350
    },
    {
      "Dat_Referencia": "2017-09-20 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 20793,
      "QtdFinalizadas": 8984,
      "QtdAbandonadas": 13855
    },
    {
      "Dat_Referencia": "2017-09-21 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 18470,
      "QtdFinalizadas": 7545,
      "QtdAbandonadas": 12735
    },
    {
      "Dat_Referencia": "2017-09-22 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 15779,
      "QtdFinalizadas": 6619,
      "QtdAbandonadas": 10850
    },
    {
      "Dat_Referencia": "2017-09-23 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 9352,
      "QtdFinalizadas": 3771,
      "QtdAbandonadas": 7284
    },
    {
      "Dat_Referencia": "2017-09-24 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 4469,
      "QtdFinalizadas": 1751,
      "QtdAbandonadas": 3603
    },
    {
      "Dat_Referencia": "2017-09-25 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21243,
      "QtdFinalizadas": 16056,
      "QtdAbandonadas": 15526
    },
    {
      "Dat_Referencia": "2017-09-26 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 19670,
      "QtdFinalizadas": 9372,
      "QtdAbandonadas": 13657
    },
    {
      "Dat_Referencia": "2017-09-27 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 18181,
      "QtdFinalizadas": 8735,
      "QtdAbandonadas": 13057
    },
    {
      "Dat_Referencia": "2017-09-28 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 18569,
      "QtdFinalizadas": 16521,
      "QtdAbandonadas": 15140
    },
    {
      "Dat_Referencia": "2017-09-29 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 15379,
      "QtdFinalizadas": 9251,
      "QtdAbandonadas": 12198
    },
    {
      "Dat_Referencia": "2017-09-30 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 9969,
      "QtdFinalizadas": 5462,
      "QtdAbandonadas": 7784
    },
    {
      "Dat_Referencia": "2017-10-01 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 7371,
      "QtdFinalizadas": 3477,
      "QtdAbandonadas": 5600
    },
    {
      "Dat_Referencia": "2017-10-02 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 24995,
      "QtdFinalizadas": 23055,
      "QtdAbandonadas": 21947
    },
    {
      "Dat_Referencia": "2017-10-03 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22768,
      "QtdFinalizadas": 16928,
      "QtdAbandonadas": 17010
    },
    {
      "Dat_Referencia": "2017-10-04 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 19746,
      "QtdFinalizadas": 10413,
      "QtdAbandonadas": 15333
    },
    {
      "Dat_Referencia": "2017-10-05 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 19784,
      "QtdFinalizadas": 10022,
      "QtdAbandonadas": 15070
    },
    {
      "Dat_Referencia": "2017-10-06 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 18904,
      "QtdFinalizadas": 11288,
      "QtdAbandonadas": 14472
    },
    {
      "Dat_Referencia": "2017-10-07 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 11912,
      "QtdFinalizadas": 6075,
      "QtdAbandonadas": 8605
    },
    {
      "Dat_Referencia": "2017-10-08 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 6910,
      "QtdFinalizadas": 3392,
      "QtdAbandonadas": 5396
    },
    {
      "Dat_Referencia": "2017-10-09 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 28324,
      "QtdFinalizadas": 25224,
      "QtdAbandonadas": 19485
    },
    {
      "Dat_Referencia": "2017-10-10 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 30585,
      "QtdFinalizadas": 24881,
      "QtdAbandonadas": 22851
    },
    {
      "Dat_Referencia": "2017-10-11 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22185,
      "QtdFinalizadas": 11789,
      "QtdAbandonadas": 14198
    },
    {
      "Dat_Referencia": "2017-10-12 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 9092,
      "QtdFinalizadas": 4365,
      "QtdAbandonadas": 6654
    },
    {
      "Dat_Referencia": "2017-10-13 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 18480,
      "QtdFinalizadas": 8283,
      "QtdAbandonadas": 12479
    },
    {
      "Dat_Referencia": "2017-10-14 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 10218,
      "QtdFinalizadas": 4831,
      "QtdAbandonadas": 7941
    },
    {
      "Dat_Referencia": "2017-10-15 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 6201,
      "QtdFinalizadas": 2918,
      "QtdAbandonadas": 5174
    },
    {
      "Dat_Referencia": "2017-10-16 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22250,
      "QtdFinalizadas": 9440,
      "QtdAbandonadas": 13153
    },
    {
      "Dat_Referencia": "2017-10-17 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 26181,
      "QtdFinalizadas": 20784,
      "QtdAbandonadas": 17784
    },
    {
      "Dat_Referencia": "2017-10-18 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21213,
      "QtdFinalizadas": 10417,
      "QtdAbandonadas": 13452
    },
    {
      "Dat_Referencia": "2017-10-19 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 19445,
      "QtdFinalizadas": 8486,
      "QtdAbandonadas": 14090
    },
    {
      "Dat_Referencia": "2017-10-20 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 16337,
      "QtdFinalizadas": 7730,
      "QtdAbandonadas": 10971
    },
    {
      "Dat_Referencia": "2017-10-21 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 9163,
      "QtdFinalizadas": 3865,
      "QtdAbandonadas": 6785
    },
    {
      "Dat_Referencia": "2017-10-22 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 3389,
      "QtdFinalizadas": 1528,
      "QtdAbandonadas": 2617
    },
    {
      "Dat_Referencia": "2017-10-23 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21899,
      "QtdFinalizadas": 18727,
      "QtdAbandonadas": 16656
    },
    {
      "Dat_Referencia": "2017-10-24 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 19072,
      "QtdFinalizadas": 9599,
      "QtdAbandonadas": 14641
    },
    {
      "Dat_Referencia": "2017-10-25 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 18630,
      "QtdFinalizadas": 8458,
      "QtdAbandonadas": 13401
    },
    {
      "Dat_Referencia": "2017-10-26 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 16669,
      "QtdFinalizadas": 7412,
      "QtdAbandonadas": 12681
    },
    {
      "Dat_Referencia": "2017-10-27 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 15108,
      "QtdFinalizadas": 7451,
      "QtdAbandonadas": 11683
    },
    {
      "Dat_Referencia": "2017-10-28 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 8756,
      "QtdFinalizadas": 4456,
      "QtdAbandonadas": 7352
    },
    {
      "Dat_Referencia": "2017-10-29 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 5358,
      "QtdFinalizadas": 2675,
      "QtdAbandonadas": 4584
    },
    {
      "Dat_Referencia": "2017-10-30 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 20531,
      "QtdFinalizadas": 16914,
      "QtdAbandonadas": 15192
    },
    {
      "Dat_Referencia": "2017-10-31 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 25179,
      "QtdFinalizadas": 27759,
      "QtdAbandonadas": 19372
    },
    {
      "Dat_Referencia": "2017-11-01 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22726,
      "QtdFinalizadas": 17834,
      "QtdAbandonadas": 15814
    },
    {
      "Dat_Referencia": "2017-11-02 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 10303,
      "QtdFinalizadas": 5662,
      "QtdAbandonadas": 6288
    },
    {
      "Dat_Referencia": "2017-11-03 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 17541,
      "QtdFinalizadas": 9425,
      "QtdAbandonadas": 11508
    },
    {
      "Dat_Referencia": "2017-11-04 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 10049,
      "QtdFinalizadas": 4812,
      "QtdAbandonadas": 7474
    },
    {
      "Dat_Referencia": "2017-11-05 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 5873,
      "QtdFinalizadas": 2783,
      "QtdAbandonadas": 4767
    },
    {
      "Dat_Referencia": "2017-11-06 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 23997,
      "QtdFinalizadas": 12948,
      "QtdAbandonadas": 15739
    },
    {
      "Dat_Referencia": "2017-11-07 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 25624,
      "QtdFinalizadas": 27488,
      "QtdAbandonadas": 20844
    },
    {
      "Dat_Referencia": "2017-11-08 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22388,
      "QtdFinalizadas": 15180,
      "QtdAbandonadas": 16083
    },
    {
      "Dat_Referencia": "2017-11-09 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22535,
      "QtdFinalizadas": 20669,
      "QtdAbandonadas": 15666
    },
    {
      "Dat_Referencia": "2017-11-10 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 18280,
      "QtdFinalizadas": 10190,
      "QtdAbandonadas": 13014
    },
    {
      "Dat_Referencia": "2017-11-11 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 10723,
      "QtdFinalizadas": 5199,
      "QtdAbandonadas": 7375
    },
    {
      "Dat_Referencia": "2017-11-12 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 6041,
      "QtdFinalizadas": 2754,
      "QtdAbandonadas": 4152
    },
    {
      "Dat_Referencia": "2017-11-13 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 19420,
      "QtdFinalizadas": 8484,
      "QtdAbandonadas": 12577
    },
    {
      "Dat_Referencia": "2017-11-14 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 16273,
      "QtdFinalizadas": 7229,
      "QtdAbandonadas": 11395
    },
    {
      "Dat_Referencia": "2017-11-15 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 8519,
      "QtdFinalizadas": 3513,
      "QtdAbandonadas": 6317
    },
    {
      "Dat_Referencia": "2017-11-16 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 18268,
      "QtdFinalizadas": 8612,
      "QtdAbandonadas": 13329
    },
    {
      "Dat_Referencia": "2017-11-17 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 15998,
      "QtdFinalizadas": 7287,
      "QtdAbandonadas": 11062
    },
    {
      "Dat_Referencia": "2017-11-18 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 9282,
      "QtdFinalizadas": 4231,
      "QtdAbandonadas": 6527
    },
    {
      "Dat_Referencia": "2017-11-19 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 4421,
      "QtdFinalizadas": 2163,
      "QtdAbandonadas": 3448
    },
    {
      "Dat_Referencia": "2017-11-20 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 17761,
      "QtdFinalizadas": 13598,
      "QtdAbandonadas": 13501
    },
    {
      "Dat_Referencia": "2017-11-21 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 17577,
      "QtdFinalizadas": 8747,
      "QtdAbandonadas": 13469
    },
    {
      "Dat_Referencia": "2017-11-22 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 17008,
      "QtdFinalizadas": 7182,
      "QtdAbandonadas": 11845
    },
    {
      "Dat_Referencia": "2017-11-23 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21101,
      "QtdFinalizadas": 17564,
      "QtdAbandonadas": 16139
    },
    {
      "Dat_Referencia": "2017-11-24 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 16458,
      "QtdFinalizadas": 8329,
      "QtdAbandonadas": 11331
    },
    {
      "Dat_Referencia": "2017-11-25 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 9875,
      "QtdFinalizadas": 4623,
      "QtdAbandonadas": 7644
    },
    {
      "Dat_Referencia": "2017-11-26 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 5717,
      "QtdFinalizadas": 2905,
      "QtdAbandonadas": 4609
    },
    {
      "Dat_Referencia": "2017-11-27 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 17626,
      "QtdFinalizadas": 8068,
      "QtdAbandonadas": 12179
    },
    {
      "Dat_Referencia": "2017-11-28 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 17721,
      "QtdFinalizadas": 7768,
      "QtdAbandonadas": 12554
    },
    {
      "Dat_Referencia": "2017-11-29 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21446,
      "QtdFinalizadas": 19139,
      "QtdAbandonadas": 16221
    },
    {
      "Dat_Referencia": "2017-11-30 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 18691,
      "QtdFinalizadas": 11053,
      "QtdAbandonadas": 14136
    },
    {
      "Dat_Referencia": "2017-12-01 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 17822,
      "QtdFinalizadas": 10577,
      "QtdAbandonadas": 12533
    },
    {
      "Dat_Referencia": "2017-12-02 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 10546,
      "QtdFinalizadas": 5445,
      "QtdAbandonadas": 7499
    },
    {
      "Dat_Referencia": "2017-12-03 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 6426,
      "QtdFinalizadas": 2860,
      "QtdAbandonadas": 4599
    },
    {
      "Dat_Referencia": "2017-12-04 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21275,
      "QtdFinalizadas": 13886,
      "QtdAbandonadas": 13561
    },
    {
      "Dat_Referencia": "2017-12-05 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 22068,
      "QtdFinalizadas": 17859,
      "QtdAbandonadas": 16809
    },
    {
      "Dat_Referencia": "2017-12-06 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 19475,
      "QtdFinalizadas": 10599,
      "QtdAbandonadas": 14450
    },
    {
      "Dat_Referencia": "2017-12-07 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 16978,
      "QtdFinalizadas": 8553,
      "QtdAbandonadas": 12867
    },
    {
      "Dat_Referencia": "2017-12-08 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 14105,
      "QtdFinalizadas": 6070,
      "QtdAbandonadas": 10318
    },
    {
      "Dat_Referencia": "2017-12-09 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 8900,
      "QtdFinalizadas": 3781,
      "QtdAbandonadas": 7102
    },
    {
      "Dat_Referencia": "2017-12-10 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 5646,
      "QtdFinalizadas": 2319,
      "QtdAbandonadas": 4696
    },
    {
      "Dat_Referencia": "2017-12-11 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 20437,
      "QtdFinalizadas": 18100,
      "QtdAbandonadas": 15114
    },
    {
      "Dat_Referencia": "2017-12-12 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 21871,
      "QtdFinalizadas": 17313,
      "QtdAbandonadas": 15662
    },
    {
      "Dat_Referencia": "2017-12-13 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 17457,
      "QtdFinalizadas": 8258,
      "QtdAbandonadas": 11797
    },
    {
      "Dat_Referencia": "2017-12-14 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 16774,
      "QtdFinalizadas": 7194,
      "QtdAbandonadas": 11137
    },
    {
      "Dat_Referencia": "2017-12-15 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 14256,
      "QtdFinalizadas": 6210,
      "QtdAbandonadas": 10155
    },
    {
      "Dat_Referencia": "2017-12-16 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 8640,
      "QtdFinalizadas": 3727,
      "QtdAbandonadas": 7015
    },
    {
      "Dat_Referencia": "2017-12-17 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 5106,
      "QtdFinalizadas": 2173,
      "QtdAbandonadas": 4553
    },
    {
      "Dat_Referencia": "2017-12-18 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 14770,
      "QtdFinalizadas": 5973,
      "QtdAbandonadas": 10547
    },
    {
      "Dat_Referencia": "2017-12-19 00:00:00.000",
      "Grupo": "Pós",
      "QtdDerivadas": 16086,
      "QtdFinalizadas": 6797,
      "QtdAbandonadas": 11365
    },
    {
      "Dat_Referencia": "2017-01-01 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4600,
      "QtdFinalizadas": 1044,
      "QtdAbandonadas": 1549
    },
    {
      "Dat_Referencia": "2017-01-02 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 24394,
      "QtdFinalizadas": 4591,
      "QtdAbandonadas": 7884
    },
    {
      "Dat_Referencia": "2017-01-03 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 25650,
      "QtdFinalizadas": 4304,
      "QtdAbandonadas": 8357
    },
    {
      "Dat_Referencia": "2017-01-04 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 28654,
      "QtdFinalizadas": 5156,
      "QtdAbandonadas": 11234
    },
    {
      "Dat_Referencia": "2017-01-05 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 24457,
      "QtdFinalizadas": 4834,
      "QtdAbandonadas": 9021
    },
    {
      "Dat_Referencia": "2017-01-06 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 21478,
      "QtdFinalizadas": 4310,
      "QtdAbandonadas": 7179
    },
    {
      "Dat_Referencia": "2017-01-07 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 12434,
      "QtdFinalizadas": 2166,
      "QtdAbandonadas": 3947
    },
    {
      "Dat_Referencia": "2017-01-08 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7315,
      "QtdFinalizadas": 1479,
      "QtdAbandonadas": 2683
    },
    {
      "Dat_Referencia": "2017-01-09 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 27768,
      "QtdFinalizadas": 6542,
      "QtdAbandonadas": 9796
    },
    {
      "Dat_Referencia": "2017-01-10 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 30969,
      "QtdFinalizadas": 6127,
      "QtdAbandonadas": 10786
    },
    {
      "Dat_Referencia": "2017-01-11 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 26579,
      "QtdFinalizadas": 5151,
      "QtdAbandonadas": 8914
    },
    {
      "Dat_Referencia": "2017-01-12 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 23963,
      "QtdFinalizadas": 3973,
      "QtdAbandonadas": 7991
    },
    {
      "Dat_Referencia": "2017-01-13 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 21359,
      "QtdFinalizadas": 4080,
      "QtdAbandonadas": 7178
    },
    {
      "Dat_Referencia": "2017-01-14 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 12599,
      "QtdFinalizadas": 2223,
      "QtdAbandonadas": 4105
    },
    {
      "Dat_Referencia": "2017-01-15 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7372,
      "QtdFinalizadas": 1221,
      "QtdAbandonadas": 2469
    },
    {
      "Dat_Referencia": "2017-01-16 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 24319,
      "QtdFinalizadas": 3990,
      "QtdAbandonadas": 8133
    },
    {
      "Dat_Referencia": "2017-01-17 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 22977,
      "QtdFinalizadas": 3772,
      "QtdAbandonadas": 7434
    },
    {
      "Dat_Referencia": "2017-01-18 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 21201,
      "QtdFinalizadas": 4075,
      "QtdAbandonadas": 8389
    },
    {
      "Dat_Referencia": "2017-01-19 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 19530,
      "QtdFinalizadas": 3136,
      "QtdAbandonadas": 6745
    },
    {
      "Dat_Referencia": "2017-01-20 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 17866,
      "QtdFinalizadas": 2802,
      "QtdAbandonadas": 5992
    },
    {
      "Dat_Referencia": "2017-01-21 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10774,
      "QtdFinalizadas": 1738,
      "QtdAbandonadas": 3654
    },
    {
      "Dat_Referencia": "2017-01-22 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6346,
      "QtdFinalizadas": 1006,
      "QtdAbandonadas": 2331
    },
    {
      "Dat_Referencia": "2017-01-23 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 22516,
      "QtdFinalizadas": 3528,
      "QtdAbandonadas": 7827
    },
    {
      "Dat_Referencia": "2017-01-24 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 21315,
      "QtdFinalizadas": 5038,
      "QtdAbandonadas": 7880
    },
    {
      "Dat_Referencia": "2017-01-25 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 20647,
      "QtdFinalizadas": 3601,
      "QtdAbandonadas": 7215
    },
    {
      "Dat_Referencia": "2017-01-26 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 18825,
      "QtdFinalizadas": 3649,
      "QtdAbandonadas": 7534
    },
    {
      "Dat_Referencia": "2017-01-27 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 17547,
      "QtdFinalizadas": 2807,
      "QtdAbandonadas": 5876
    },
    {
      "Dat_Referencia": "2017-01-28 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10572,
      "QtdFinalizadas": 1667,
      "QtdAbandonadas": 3534
    },
    {
      "Dat_Referencia": "2017-01-29 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7007,
      "QtdFinalizadas": 1478,
      "QtdAbandonadas": 2530
    },
    {
      "Dat_Referencia": "2017-01-30 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 23281,
      "QtdFinalizadas": 4809,
      "QtdAbandonadas": 8126
    },
    {
      "Dat_Referencia": "2017-01-31 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 20999,
      "QtdFinalizadas": 3976,
      "QtdAbandonadas": 7078
    },
    {
      "Dat_Referencia": "2017-02-01 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 22736,
      "QtdFinalizadas": 5706,
      "QtdAbandonadas": 9109
    },
    {
      "Dat_Referencia": "2017-02-02 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 21686,
      "QtdFinalizadas": 4525,
      "QtdAbandonadas": 8603
    },
    {
      "Dat_Referencia": "2017-02-03 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 18982,
      "QtdFinalizadas": 3707,
      "QtdAbandonadas": 7230
    },
    {
      "Dat_Referencia": "2017-02-04 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11933,
      "QtdFinalizadas": 2086,
      "QtdAbandonadas": 4356
    },
    {
      "Dat_Referencia": "2017-02-05 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7360,
      "QtdFinalizadas": 1306,
      "QtdAbandonadas": 2582
    },
    {
      "Dat_Referencia": "2017-02-06 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 22996,
      "QtdFinalizadas": 4019,
      "QtdAbandonadas": 8039
    },
    {
      "Dat_Referencia": "2017-02-07 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 21034,
      "QtdFinalizadas": 4019,
      "QtdAbandonadas": 8847
    },
    {
      "Dat_Referencia": "2017-02-08 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 20223,
      "QtdFinalizadas": 3566,
      "QtdAbandonadas": 7631
    },
    {
      "Dat_Referencia": "2017-02-09 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 22471,
      "QtdFinalizadas": 5011,
      "QtdAbandonadas": 9239
    },
    {
      "Dat_Referencia": "2017-02-10 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 18940,
      "QtdFinalizadas": 3522,
      "QtdAbandonadas": 7950
    },
    {
      "Dat_Referencia": "2017-02-11 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11100,
      "QtdFinalizadas": 2034,
      "QtdAbandonadas": 4189
    },
    {
      "Dat_Referencia": "2017-02-12 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7031,
      "QtdFinalizadas": 1240,
      "QtdAbandonadas": 3373
    },
    {
      "Dat_Referencia": "2017-02-13 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 23292,
      "QtdFinalizadas": 4644,
      "QtdAbandonadas": 8353
    },
    {
      "Dat_Referencia": "2017-02-14 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 20909,
      "QtdFinalizadas": 3833,
      "QtdAbandonadas": 7463
    },
    {
      "Dat_Referencia": "2017-02-15 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 19888,
      "QtdFinalizadas": 3552,
      "QtdAbandonadas": 6912
    },
    {
      "Dat_Referencia": "2017-02-16 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 19830,
      "QtdFinalizadas": 3196,
      "QtdAbandonadas": 6926
    },
    {
      "Dat_Referencia": "2017-02-17 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 16573,
      "QtdFinalizadas": 2918,
      "QtdAbandonadas": 6359
    },
    {
      "Dat_Referencia": "2017-02-18 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10351,
      "QtdFinalizadas": 2106,
      "QtdAbandonadas": 3515
    },
    {
      "Dat_Referencia": "2017-02-19 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6237,
      "QtdFinalizadas": 1429,
      "QtdAbandonadas": 2130
    },
    {
      "Dat_Referencia": "2017-02-20 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 20550,
      "QtdFinalizadas": 4013,
      "QtdAbandonadas": 7324
    },
    {
      "Dat_Referencia": "2017-02-21 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 18508,
      "QtdFinalizadas": 3368,
      "QtdAbandonadas": 6841
    },
    {
      "Dat_Referencia": "2017-02-22 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 17657,
      "QtdFinalizadas": 3220,
      "QtdAbandonadas": 6178
    },
    {
      "Dat_Referencia": "2017-02-23 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 16836,
      "QtdFinalizadas": 3050,
      "QtdAbandonadas": 5994
    },
    {
      "Dat_Referencia": "2017-02-24 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 16253,
      "QtdFinalizadas": 4656,
      "QtdAbandonadas": 6730
    },
    {
      "Dat_Referencia": "2017-02-25 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 9089,
      "QtdFinalizadas": 2151,
      "QtdAbandonadas": 3298
    },
    {
      "Dat_Referencia": "2017-02-26 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5073,
      "QtdFinalizadas": 1205,
      "QtdAbandonadas": 2023
    },
    {
      "Dat_Referencia": "2017-02-27 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 8682,
      "QtdFinalizadas": 1979,
      "QtdAbandonadas": 3053
    },
    {
      "Dat_Referencia": "2017-02-28 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7167,
      "QtdFinalizadas": 1489,
      "QtdAbandonadas": 2490
    },
    {
      "Dat_Referencia": "2017-03-01 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 17143,
      "QtdFinalizadas": 3205,
      "QtdAbandonadas": 5807
    },
    {
      "Dat_Referencia": "2017-03-02 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 24497,
      "QtdFinalizadas": 6137,
      "QtdAbandonadas": 9082
    },
    {
      "Dat_Referencia": "2017-03-03 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 20689,
      "QtdFinalizadas": 4690,
      "QtdAbandonadas": 7333
    },
    {
      "Dat_Referencia": "2017-03-04 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 13215,
      "QtdFinalizadas": 2846,
      "QtdAbandonadas": 4343
    },
    {
      "Dat_Referencia": "2017-03-05 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6967,
      "QtdFinalizadas": 1767,
      "QtdAbandonadas": 2419
    },
    {
      "Dat_Referencia": "2017-03-06 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 23822,
      "QtdFinalizadas": 5088,
      "QtdAbandonadas": 8336
    },
    {
      "Dat_Referencia": "2017-03-07 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 21886,
      "QtdFinalizadas": 6483,
      "QtdAbandonadas": 9836
    },
    {
      "Dat_Referencia": "2017-03-08 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 19646,
      "QtdFinalizadas": 5206,
      "QtdAbandonadas": 7844
    },
    {
      "Dat_Referencia": "2017-03-09 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 20490,
      "QtdFinalizadas": 4693,
      "QtdAbandonadas": 8021
    },
    {
      "Dat_Referencia": "2017-03-10 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 19585,
      "QtdFinalizadas": 4106,
      "QtdAbandonadas": 7530
    },
    {
      "Dat_Referencia": "2017-03-11 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11860,
      "QtdFinalizadas": 2183,
      "QtdAbandonadas": 4015
    },
    {
      "Dat_Referencia": "2017-03-12 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6570,
      "QtdFinalizadas": 1513,
      "QtdAbandonadas": 2338
    },
    {
      "Dat_Referencia": "2017-03-13 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 25285,
      "QtdFinalizadas": 6243,
      "QtdAbandonadas": 8910
    },
    {
      "Dat_Referencia": "2017-03-14 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 22828,
      "QtdFinalizadas": 4383,
      "QtdAbandonadas": 8144
    },
    {
      "Dat_Referencia": "2017-03-15 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 23116,
      "QtdFinalizadas": 4479,
      "QtdAbandonadas": 8160
    },
    {
      "Dat_Referencia": "2017-03-16 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 20251,
      "QtdFinalizadas": 4390,
      "QtdAbandonadas": 7297
    },
    {
      "Dat_Referencia": "2017-03-17 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 17070,
      "QtdFinalizadas": 3501,
      "QtdAbandonadas": 7116
    },
    {
      "Dat_Referencia": "2017-03-18 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11741,
      "QtdFinalizadas": 2058,
      "QtdAbandonadas": 3600
    },
    {
      "Dat_Referencia": "2017-03-19 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 8056,
      "QtdFinalizadas": 1550,
      "QtdAbandonadas": 2938
    },
    {
      "Dat_Referencia": "2017-03-20 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 23065,
      "QtdFinalizadas": 3889,
      "QtdAbandonadas": 7164
    },
    {
      "Dat_Referencia": "2017-03-21 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 19283,
      "QtdFinalizadas": 3404,
      "QtdAbandonadas": 6201
    },
    {
      "Dat_Referencia": "2017-03-22 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 17784,
      "QtdFinalizadas": 3536,
      "QtdAbandonadas": 5727
    },
    {
      "Dat_Referencia": "2017-03-23 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 15551,
      "QtdFinalizadas": 2935,
      "QtdAbandonadas": 5081
    },
    {
      "Dat_Referencia": "2017-03-24 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 14039,
      "QtdFinalizadas": 2618,
      "QtdAbandonadas": 4528
    },
    {
      "Dat_Referencia": "2017-03-25 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 8462,
      "QtdFinalizadas": 1682,
      "QtdAbandonadas": 2835
    },
    {
      "Dat_Referencia": "2017-03-26 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5345,
      "QtdFinalizadas": 1193,
      "QtdAbandonadas": 1975
    },
    {
      "Dat_Referencia": "2017-03-27 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 18374,
      "QtdFinalizadas": 4266,
      "QtdAbandonadas": 7925
    },
    {
      "Dat_Referencia": "2017-03-28 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 16873,
      "QtdFinalizadas": 3774,
      "QtdAbandonadas": 5753
    },
    {
      "Dat_Referencia": "2017-03-29 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 17498,
      "QtdFinalizadas": 3263,
      "QtdAbandonadas": 5308
    },
    {
      "Dat_Referencia": "2017-03-30 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 14387,
      "QtdFinalizadas": 3287,
      "QtdAbandonadas": 6070
    },
    {
      "Dat_Referencia": "2017-03-31 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 13475,
      "QtdFinalizadas": 3092,
      "QtdAbandonadas": 4728
    },
    {
      "Dat_Referencia": "2017-04-01 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 8519,
      "QtdFinalizadas": 2010,
      "QtdAbandonadas": 2985
    },
    {
      "Dat_Referencia": "2017-04-02 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5438,
      "QtdFinalizadas": 1208,
      "QtdAbandonadas": 1847
    },
    {
      "Dat_Referencia": "2017-04-03 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 17453,
      "QtdFinalizadas": 4614,
      "QtdAbandonadas": 6309
    },
    {
      "Dat_Referencia": "2017-04-04 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 16565,
      "QtdFinalizadas": 4461,
      "QtdAbandonadas": 6189
    },
    {
      "Dat_Referencia": "2017-04-05 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 17279,
      "QtdFinalizadas": 5775,
      "QtdAbandonadas": 6684
    },
    {
      "Dat_Referencia": "2017-04-06 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 16259,
      "QtdFinalizadas": 4811,
      "QtdAbandonadas": 5796
    },
    {
      "Dat_Referencia": "2017-04-07 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 15741,
      "QtdFinalizadas": 3854,
      "QtdAbandonadas": 6085
    },
    {
      "Dat_Referencia": "2017-04-08 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10044,
      "QtdFinalizadas": 2505,
      "QtdAbandonadas": 3425
    },
    {
      "Dat_Referencia": "2017-04-09 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5588,
      "QtdFinalizadas": 1414,
      "QtdAbandonadas": 1984
    },
    {
      "Dat_Referencia": "2017-04-10 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 18572,
      "QtdFinalizadas": 5665,
      "QtdAbandonadas": 6717
    },
    {
      "Dat_Referencia": "2017-04-11 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 17009,
      "QtdFinalizadas": 6058,
      "QtdAbandonadas": 7337
    },
    {
      "Dat_Referencia": "2017-04-12 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 16247,
      "QtdFinalizadas": 5294,
      "QtdAbandonadas": 5693
    },
    {
      "Dat_Referencia": "2017-04-13 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 13716,
      "QtdFinalizadas": 4319,
      "QtdAbandonadas": 4851
    },
    {
      "Dat_Referencia": "2017-04-14 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6449,
      "QtdFinalizadas": 2306,
      "QtdAbandonadas": 2261
    },
    {
      "Dat_Referencia": "2017-04-15 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7757,
      "QtdFinalizadas": 2347,
      "QtdAbandonadas": 2502
    },
    {
      "Dat_Referencia": "2017-04-16 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4530,
      "QtdFinalizadas": 1338,
      "QtdAbandonadas": 1525
    },
    {
      "Dat_Referencia": "2017-04-17 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 17566,
      "QtdFinalizadas": 4458,
      "QtdAbandonadas": 5572
    },
    {
      "Dat_Referencia": "2017-04-18 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 16147,
      "QtdFinalizadas": 4751,
      "QtdAbandonadas": 5494
    },
    {
      "Dat_Referencia": "2017-04-19 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 14358,
      "QtdFinalizadas": 4125,
      "QtdAbandonadas": 5170
    },
    {
      "Dat_Referencia": "2017-04-20 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 12106,
      "QtdFinalizadas": 3220,
      "QtdAbandonadas": 4695
    },
    {
      "Dat_Referencia": "2017-04-21 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6592,
      "QtdFinalizadas": 1779,
      "QtdAbandonadas": 2379
    },
    {
      "Dat_Referencia": "2017-04-22 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7132,
      "QtdFinalizadas": 1911,
      "QtdAbandonadas": 2591
    },
    {
      "Dat_Referencia": "2017-04-23 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4737,
      "QtdFinalizadas": 1086,
      "QtdAbandonadas": 1928
    },
    {
      "Dat_Referencia": "2017-04-24 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 15515,
      "QtdFinalizadas": 5071,
      "QtdAbandonadas": 5914
    },
    {
      "Dat_Referencia": "2017-04-25 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 13816,
      "QtdFinalizadas": 3191,
      "QtdAbandonadas": 5462
    },
    {
      "Dat_Referencia": "2017-04-26 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 13313,
      "QtdFinalizadas": 3442,
      "QtdAbandonadas": 4618
    },
    {
      "Dat_Referencia": "2017-04-27 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 13160,
      "QtdFinalizadas": 2612,
      "QtdAbandonadas": 5248
    },
    {
      "Dat_Referencia": "2017-04-28 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11171,
      "QtdFinalizadas": 3313,
      "QtdAbandonadas": 5180
    },
    {
      "Dat_Referencia": "2017-04-29 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7898,
      "QtdFinalizadas": 1839,
      "QtdAbandonadas": 2894
    },
    {
      "Dat_Referencia": "2017-04-30 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4407,
      "QtdFinalizadas": 1058,
      "QtdAbandonadas": 1532
    },
    {
      "Dat_Referencia": "2017-05-01 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6475,
      "QtdFinalizadas": 1534,
      "QtdAbandonadas": 2210
    },
    {
      "Dat_Referencia": "2017-05-02 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 16494,
      "QtdFinalizadas": 5509,
      "QtdAbandonadas": 6769
    },
    {
      "Dat_Referencia": "2017-05-03 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 17057,
      "QtdFinalizadas": 5424,
      "QtdAbandonadas": 7191
    },
    {
      "Dat_Referencia": "2017-05-04 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 14564,
      "QtdFinalizadas": 3370,
      "QtdAbandonadas": 5180
    },
    {
      "Dat_Referencia": "2017-05-05 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 12497,
      "QtdFinalizadas": 3055,
      "QtdAbandonadas": 4878
    },
    {
      "Dat_Referencia": "2017-05-06 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 8277,
      "QtdFinalizadas": 2052,
      "QtdAbandonadas": 3032
    },
    {
      "Dat_Referencia": "2017-05-07 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4699,
      "QtdFinalizadas": 1219,
      "QtdAbandonadas": 1722
    },
    {
      "Dat_Referencia": "2017-05-08 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 15451,
      "QtdFinalizadas": 3832,
      "QtdAbandonadas": 5672
    },
    {
      "Dat_Referencia": "2017-05-09 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 14656,
      "QtdFinalizadas": 3382,
      "QtdAbandonadas": 6078
    },
    {
      "Dat_Referencia": "2017-05-10 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 15385,
      "QtdFinalizadas": 5100,
      "QtdAbandonadas": 6870
    },
    {
      "Dat_Referencia": "2017-05-11 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 15004,
      "QtdFinalizadas": 4061,
      "QtdAbandonadas": 5332
    },
    {
      "Dat_Referencia": "2017-05-12 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7843,
      "QtdFinalizadas": 1773,
      "QtdAbandonadas": 3013
    },
    {
      "Dat_Referencia": "2017-05-13 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 9023,
      "QtdFinalizadas": 1994,
      "QtdAbandonadas": 3122
    },
    {
      "Dat_Referencia": "2017-05-14 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4816,
      "QtdFinalizadas": 1100,
      "QtdAbandonadas": 1742
    },
    {
      "Dat_Referencia": "2017-05-15 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 18869,
      "QtdFinalizadas": 4058,
      "QtdAbandonadas": 6404
    },
    {
      "Dat_Referencia": "2017-05-16 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 16218,
      "QtdFinalizadas": 3669,
      "QtdAbandonadas": 5202
    },
    {
      "Dat_Referencia": "2017-05-17 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 14020,
      "QtdFinalizadas": 3442,
      "QtdAbandonadas": 4685
    },
    {
      "Dat_Referencia": "2017-05-18 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 12437,
      "QtdFinalizadas": 2847,
      "QtdAbandonadas": 4256
    },
    {
      "Dat_Referencia": "2017-05-19 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11589,
      "QtdFinalizadas": 3326,
      "QtdAbandonadas": 4913
    },
    {
      "Dat_Referencia": "2017-05-20 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7718,
      "QtdFinalizadas": 1876,
      "QtdAbandonadas": 2960
    },
    {
      "Dat_Referencia": "2017-05-21 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4678,
      "QtdFinalizadas": 986,
      "QtdAbandonadas": 2006
    },
    {
      "Dat_Referencia": "2017-05-22 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 16221,
      "QtdFinalizadas": 3883,
      "QtdAbandonadas": 6243
    },
    {
      "Dat_Referencia": "2017-05-23 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 13256,
      "QtdFinalizadas": 3293,
      "QtdAbandonadas": 5486
    },
    {
      "Dat_Referencia": "2017-05-24 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 13584,
      "QtdFinalizadas": 4737,
      "QtdAbandonadas": 6165
    },
    {
      "Dat_Referencia": "2017-05-25 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 12490,
      "QtdFinalizadas": 3511,
      "QtdAbandonadas": 4728
    },
    {
      "Dat_Referencia": "2017-05-26 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10907,
      "QtdFinalizadas": 2770,
      "QtdAbandonadas": 3953
    },
    {
      "Dat_Referencia": "2017-05-27 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6990,
      "QtdFinalizadas": 1774,
      "QtdAbandonadas": 2519
    },
    {
      "Dat_Referencia": "2017-05-28 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4629,
      "QtdFinalizadas": 1031,
      "QtdAbandonadas": 1586
    },
    {
      "Dat_Referencia": "2017-05-29 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 13109,
      "QtdFinalizadas": 3014,
      "QtdAbandonadas": 4795
    },
    {
      "Dat_Referencia": "2017-05-30 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 12254,
      "QtdFinalizadas": 2830,
      "QtdAbandonadas": 4676
    },
    {
      "Dat_Referencia": "2017-05-31 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11755,
      "QtdFinalizadas": 2493,
      "QtdAbandonadas": 4455
    },
    {
      "Dat_Referencia": "2017-06-01 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 12468,
      "QtdFinalizadas": 3574,
      "QtdAbandonadas": 5072
    },
    {
      "Dat_Referencia": "2017-06-02 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10944,
      "QtdFinalizadas": 2419,
      "QtdAbandonadas": 3958
    },
    {
      "Dat_Referencia": "2017-06-03 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6128,
      "QtdFinalizadas": 1236,
      "QtdAbandonadas": 2403
    },
    {
      "Dat_Referencia": "2017-06-04 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 3912,
      "QtdFinalizadas": 876,
      "QtdAbandonadas": 1614
    },
    {
      "Dat_Referencia": "2017-06-05 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 13819,
      "QtdFinalizadas": 3860,
      "QtdAbandonadas": 6245
    },
    {
      "Dat_Referencia": "2017-06-06 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 13493,
      "QtdFinalizadas": 4108,
      "QtdAbandonadas": 6417
    },
    {
      "Dat_Referencia": "2017-06-07 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 14110,
      "QtdFinalizadas": 4894,
      "QtdAbandonadas": 5976
    },
    {
      "Dat_Referencia": "2017-06-08 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 12206,
      "QtdFinalizadas": 2930,
      "QtdAbandonadas": 4478
    },
    {
      "Dat_Referencia": "2017-06-09 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10644,
      "QtdFinalizadas": 2251,
      "QtdAbandonadas": 3975
    },
    {
      "Dat_Referencia": "2017-06-10 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6617,
      "QtdFinalizadas": 1457,
      "QtdAbandonadas": 2368
    },
    {
      "Dat_Referencia": "2017-06-11 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4057,
      "QtdFinalizadas": 796,
      "QtdAbandonadas": 1429
    },
    {
      "Dat_Referencia": "2017-06-12 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 12455,
      "QtdFinalizadas": 2889,
      "QtdAbandonadas": 4636
    },
    {
      "Dat_Referencia": "2017-06-13 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11388,
      "QtdFinalizadas": 2608,
      "QtdAbandonadas": 4169
    },
    {
      "Dat_Referencia": "2017-06-14 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 17352,
      "QtdFinalizadas": 3522,
      "QtdAbandonadas": 7844
    },
    {
      "Dat_Referencia": "2017-06-15 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6958,
      "QtdFinalizadas": 1338,
      "QtdAbandonadas": 2692
    },
    {
      "Dat_Referencia": "2017-06-16 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11606,
      "QtdFinalizadas": 2083,
      "QtdAbandonadas": 4654
    },
    {
      "Dat_Referencia": "2017-06-17 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6139,
      "QtdFinalizadas": 1146,
      "QtdAbandonadas": 2400
    },
    {
      "Dat_Referencia": "2017-06-18 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 3829,
      "QtdFinalizadas": 660,
      "QtdAbandonadas": 1497
    },
    {
      "Dat_Referencia": "2017-06-19 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 13362,
      "QtdFinalizadas": 2768,
      "QtdAbandonadas": 4912
    },
    {
      "Dat_Referencia": "2017-06-20 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11223,
      "QtdFinalizadas": 2119,
      "QtdAbandonadas": 5111
    },
    {
      "Dat_Referencia": "2017-06-21 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10168,
      "QtdFinalizadas": 2448,
      "QtdAbandonadas": 4029
    },
    {
      "Dat_Referencia": "2017-06-22 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10877,
      "QtdFinalizadas": 4086,
      "QtdAbandonadas": 5246
    },
    {
      "Dat_Referencia": "2017-06-23 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 9045,
      "QtdFinalizadas": 2538,
      "QtdAbandonadas": 3678
    },
    {
      "Dat_Referencia": "2017-06-24 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5296,
      "QtdFinalizadas": 1228,
      "QtdAbandonadas": 2162
    },
    {
      "Dat_Referencia": "2017-06-25 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 3400,
      "QtdFinalizadas": 730,
      "QtdAbandonadas": 1457
    },
    {
      "Dat_Referencia": "2017-06-26 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11135,
      "QtdFinalizadas": 2357,
      "QtdAbandonadas": 4153
    },
    {
      "Dat_Referencia": "2017-06-27 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11116,
      "QtdFinalizadas": 3611,
      "QtdAbandonadas": 4535
    },
    {
      "Dat_Referencia": "2017-06-28 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10656,
      "QtdFinalizadas": 2728,
      "QtdAbandonadas": 4132
    },
    {
      "Dat_Referencia": "2017-06-29 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 9748,
      "QtdFinalizadas": 2216,
      "QtdAbandonadas": 3696
    },
    {
      "Dat_Referencia": "2017-06-30 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 8652,
      "QtdFinalizadas": 2050,
      "QtdAbandonadas": 3645
    },
    {
      "Dat_Referencia": "2017-07-01 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5455,
      "QtdFinalizadas": 1315,
      "QtdAbandonadas": 2129
    },
    {
      "Dat_Referencia": "2017-07-02 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 3611,
      "QtdFinalizadas": 739,
      "QtdAbandonadas": 1379
    },
    {
      "Dat_Referencia": "2017-07-03 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 12313,
      "QtdFinalizadas": 4449,
      "QtdAbandonadas": 5575
    },
    {
      "Dat_Referencia": "2017-07-04 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11268,
      "QtdFinalizadas": 4114,
      "QtdAbandonadas": 4938
    },
    {
      "Dat_Referencia": "2017-07-05 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10628,
      "QtdFinalizadas": 2942,
      "QtdAbandonadas": 4760
    },
    {
      "Dat_Referencia": "2017-07-06 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10629,
      "QtdFinalizadas": 2463,
      "QtdAbandonadas": 4225
    },
    {
      "Dat_Referencia": "2017-07-07 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 9140,
      "QtdFinalizadas": 2304,
      "QtdAbandonadas": 3603
    },
    {
      "Dat_Referencia": "2017-07-08 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5958,
      "QtdFinalizadas": 1346,
      "QtdAbandonadas": 2320
    },
    {
      "Dat_Referencia": "2017-07-09 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 3721,
      "QtdFinalizadas": 778,
      "QtdAbandonadas": 1287
    },
    {
      "Dat_Referencia": "2017-07-10 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 13074,
      "QtdFinalizadas": 3895,
      "QtdAbandonadas": 5390
    },
    {
      "Dat_Referencia": "2017-07-11 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11260,
      "QtdFinalizadas": 2854,
      "QtdAbandonadas": 4661
    },
    {
      "Dat_Referencia": "2017-07-12 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11521,
      "QtdFinalizadas": 3040,
      "QtdAbandonadas": 4392
    },
    {
      "Dat_Referencia": "2017-07-13 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10967,
      "QtdFinalizadas": 2489,
      "QtdAbandonadas": 4076
    },
    {
      "Dat_Referencia": "2017-07-14 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 9112,
      "QtdFinalizadas": 2083,
      "QtdAbandonadas": 3400
    },
    {
      "Dat_Referencia": "2017-07-15 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5465,
      "QtdFinalizadas": 1184,
      "QtdAbandonadas": 2071
    },
    {
      "Dat_Referencia": "2017-07-16 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 3766,
      "QtdFinalizadas": 979,
      "QtdAbandonadas": 1584
    },
    {
      "Dat_Referencia": "2017-07-17 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11097,
      "QtdFinalizadas": 2533,
      "QtdAbandonadas": 4145
    },
    {
      "Dat_Referencia": "2017-07-18 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10434,
      "QtdFinalizadas": 2761,
      "QtdAbandonadas": 4258
    },
    {
      "Dat_Referencia": "2017-07-19 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10310,
      "QtdFinalizadas": 2549,
      "QtdAbandonadas": 3925
    },
    {
      "Dat_Referencia": "2017-07-20 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 9368,
      "QtdFinalizadas": 2229,
      "QtdAbandonadas": 3798
    },
    {
      "Dat_Referencia": "2017-07-21 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 8246,
      "QtdFinalizadas": 2195,
      "QtdAbandonadas": 3525
    },
    {
      "Dat_Referencia": "2017-07-22 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4692,
      "QtdFinalizadas": 1125,
      "QtdAbandonadas": 1990
    },
    {
      "Dat_Referencia": "2017-07-23 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 2907,
      "QtdFinalizadas": 745,
      "QtdAbandonadas": 1549
    },
    {
      "Dat_Referencia": "2017-07-24 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 9982,
      "QtdFinalizadas": 2358,
      "QtdAbandonadas": 4041
    },
    {
      "Dat_Referencia": "2017-07-25 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 9841,
      "QtdFinalizadas": 3479,
      "QtdAbandonadas": 4990
    },
    {
      "Dat_Referencia": "2017-07-26 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 9210,
      "QtdFinalizadas": 2556,
      "QtdAbandonadas": 3983
    },
    {
      "Dat_Referencia": "2017-07-27 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 8634,
      "QtdFinalizadas": 2288,
      "QtdAbandonadas": 3715
    },
    {
      "Dat_Referencia": "2017-07-28 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7525,
      "QtdFinalizadas": 1947,
      "QtdAbandonadas": 3285
    },
    {
      "Dat_Referencia": "2017-07-29 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4452,
      "QtdFinalizadas": 1196,
      "QtdAbandonadas": 2104
    },
    {
      "Dat_Referencia": "2017-07-30 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 2802,
      "QtdFinalizadas": 671,
      "QtdAbandonadas": 1242
    },
    {
      "Dat_Referencia": "2017-07-31 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10725,
      "QtdFinalizadas": 3106,
      "QtdAbandonadas": 4521
    },
    {
      "Dat_Referencia": "2017-08-01 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 12792,
      "QtdFinalizadas": 4616,
      "QtdAbandonadas": 5298
    },
    {
      "Dat_Referencia": "2017-08-02 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11758,
      "QtdFinalizadas": 3318,
      "QtdAbandonadas": 4673
    },
    {
      "Dat_Referencia": "2017-08-03 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10742,
      "QtdFinalizadas": 3061,
      "QtdAbandonadas": 4256
    },
    {
      "Dat_Referencia": "2017-08-04 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 8982,
      "QtdFinalizadas": 2386,
      "QtdAbandonadas": 3938
    },
    {
      "Dat_Referencia": "2017-08-05 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5312,
      "QtdFinalizadas": 1288,
      "QtdAbandonadas": 2139
    },
    {
      "Dat_Referencia": "2017-08-06 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 2958,
      "QtdFinalizadas": 708,
      "QtdAbandonadas": 1235
    },
    {
      "Dat_Referencia": "2017-08-07 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10786,
      "QtdFinalizadas": 2243,
      "QtdAbandonadas": 4020
    },
    {
      "Dat_Referencia": "2017-08-08 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11096,
      "QtdFinalizadas": 4452,
      "QtdAbandonadas": 5827
    },
    {
      "Dat_Referencia": "2017-08-09 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11332,
      "QtdFinalizadas": 3330,
      "QtdAbandonadas": 4788
    },
    {
      "Dat_Referencia": "2017-08-10 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10758,
      "QtdFinalizadas": 2408,
      "QtdAbandonadas": 4262
    },
    {
      "Dat_Referencia": "2017-08-11 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 9283,
      "QtdFinalizadas": 2134,
      "QtdAbandonadas": 3998
    },
    {
      "Dat_Referencia": "2017-08-12 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5144,
      "QtdFinalizadas": 1215,
      "QtdAbandonadas": 2107
    },
    {
      "Dat_Referencia": "2017-08-13 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 2580,
      "QtdFinalizadas": 728,
      "QtdAbandonadas": 1191
    },
    {
      "Dat_Referencia": "2017-08-14 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11003,
      "QtdFinalizadas": 2089,
      "QtdAbandonadas": 4205
    },
    {
      "Dat_Referencia": "2017-08-15 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 9838,
      "QtdFinalizadas": 1666,
      "QtdAbandonadas": 3632
    },
    {
      "Dat_Referencia": "2017-08-16 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11096,
      "QtdFinalizadas": 2955,
      "QtdAbandonadas": 4966
    },
    {
      "Dat_Referencia": "2017-08-17 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 9871,
      "QtdFinalizadas": 1984,
      "QtdAbandonadas": 4007
    },
    {
      "Dat_Referencia": "2017-08-18 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 8027,
      "QtdFinalizadas": 1623,
      "QtdAbandonadas": 3535
    },
    {
      "Dat_Referencia": "2017-08-19 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4784,
      "QtdFinalizadas": 1044,
      "QtdAbandonadas": 2151
    },
    {
      "Dat_Referencia": "2017-08-20 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 3153,
      "QtdFinalizadas": 712,
      "QtdAbandonadas": 1504
    },
    {
      "Dat_Referencia": "2017-08-21 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10525,
      "QtdFinalizadas": 1965,
      "QtdAbandonadas": 3948
    },
    {
      "Dat_Referencia": "2017-08-22 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 9923,
      "QtdFinalizadas": 3085,
      "QtdAbandonadas": 4619
    },
    {
      "Dat_Referencia": "2017-08-23 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 8957,
      "QtdFinalizadas": 2152,
      "QtdAbandonadas": 3716
    },
    {
      "Dat_Referencia": "2017-08-24 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 8525,
      "QtdFinalizadas": 1768,
      "QtdAbandonadas": 3643
    },
    {
      "Dat_Referencia": "2017-08-25 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7346,
      "QtdFinalizadas": 1595,
      "QtdAbandonadas": 6366
    },
    {
      "Dat_Referencia": "2017-08-26 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4983,
      "QtdFinalizadas": 1127,
      "QtdAbandonadas": 2158
    },
    {
      "Dat_Referencia": "2017-08-27 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 2681,
      "QtdFinalizadas": 703,
      "QtdAbandonadas": 1291
    },
    {
      "Dat_Referencia": "2017-08-28 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10135,
      "QtdFinalizadas": 2589,
      "QtdAbandonadas": 4271
    },
    {
      "Dat_Referencia": "2017-08-29 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7051,
      "QtdFinalizadas": 1684,
      "QtdAbandonadas": 2822
    },
    {
      "Dat_Referencia": "2017-08-30 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 9371,
      "QtdFinalizadas": 2237,
      "QtdAbandonadas": 3954
    },
    {
      "Dat_Referencia": "2017-08-31 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 10181,
      "QtdFinalizadas": 3413,
      "QtdAbandonadas": 4651
    },
    {
      "Dat_Referencia": "2017-09-01 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 9034,
      "QtdFinalizadas": 2919,
      "QtdAbandonadas": 4400
    },
    {
      "Dat_Referencia": "2017-09-02 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5134,
      "QtdFinalizadas": 1355,
      "QtdAbandonadas": 2286
    },
    {
      "Dat_Referencia": "2017-09-03 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 2812,
      "QtdFinalizadas": 710,
      "QtdAbandonadas": 1238
    },
    {
      "Dat_Referencia": "2017-09-04 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 11674,
      "QtdFinalizadas": 2272,
      "QtdAbandonadas": 4645
    },
    {
      "Dat_Referencia": "2017-09-05 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 9828,
      "QtdFinalizadas": 2076,
      "QtdAbandonadas": 4039
    },
    {
      "Dat_Referencia": "2017-09-06 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 9311,
      "QtdFinalizadas": 3503,
      "QtdAbandonadas": 4053
    },
    {
      "Dat_Referencia": "2017-09-07 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4081,
      "QtdFinalizadas": 1137,
      "QtdAbandonadas": 1939
    },
    {
      "Dat_Referencia": "2017-09-08 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 8129,
      "QtdFinalizadas": 1954,
      "QtdAbandonadas": 3480
    },
    {
      "Dat_Referencia": "2017-09-09 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4652,
      "QtdFinalizadas": 1210,
      "QtdAbandonadas": 2042
    },
    {
      "Dat_Referencia": "2017-09-10 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 2941,
      "QtdFinalizadas": 675,
      "QtdAbandonadas": 1421
    },
    {
      "Dat_Referencia": "2017-09-11 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 12028,
      "QtdFinalizadas": 2822,
      "QtdAbandonadas": 5310
    },
    {
      "Dat_Referencia": "2017-09-12 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 9740,
      "QtdFinalizadas": 2081,
      "QtdAbandonadas": 3950
    },
    {
      "Dat_Referencia": "2017-09-13 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 9090,
      "QtdFinalizadas": 1958,
      "QtdAbandonadas": 3763
    },
    {
      "Dat_Referencia": "2017-09-14 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 8130,
      "QtdFinalizadas": 1591,
      "QtdAbandonadas": 3250
    },
    {
      "Dat_Referencia": "2017-09-15 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7177,
      "QtdFinalizadas": 1572,
      "QtdAbandonadas": 3178
    },
    {
      "Dat_Referencia": "2017-09-16 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4215,
      "QtdFinalizadas": 936,
      "QtdAbandonadas": 1830
    },
    {
      "Dat_Referencia": "2017-09-17 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 2308,
      "QtdFinalizadas": 497,
      "QtdAbandonadas": 1000
    },
    {
      "Dat_Referencia": "2017-09-18 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 8228,
      "QtdFinalizadas": 1650,
      "QtdAbandonadas": 3484
    },
    {
      "Dat_Referencia": "2017-09-19 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 8286,
      "QtdFinalizadas": 1890,
      "QtdAbandonadas": 3582
    },
    {
      "Dat_Referencia": "2017-09-20 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6923,
      "QtdFinalizadas": 1536,
      "QtdAbandonadas": 3184
    },
    {
      "Dat_Referencia": "2017-09-21 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6463,
      "QtdFinalizadas": 1352,
      "QtdAbandonadas": 3159
    },
    {
      "Dat_Referencia": "2017-09-22 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5760,
      "QtdFinalizadas": 1332,
      "QtdAbandonadas": 2868
    },
    {
      "Dat_Referencia": "2017-09-23 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 3575,
      "QtdFinalizadas": 776,
      "QtdAbandonadas": 1785
    },
    {
      "Dat_Referencia": "2017-09-24 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 2024,
      "QtdFinalizadas": 428,
      "QtdAbandonadas": 1173
    },
    {
      "Dat_Referencia": "2017-09-25 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7807,
      "QtdFinalizadas": 2450,
      "QtdAbandonadas": 4078
    },
    {
      "Dat_Referencia": "2017-09-26 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7283,
      "QtdFinalizadas": 1715,
      "QtdAbandonadas": 3627
    },
    {
      "Dat_Referencia": "2017-09-27 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6431,
      "QtdFinalizadas": 1521,
      "QtdAbandonadas": 3330
    },
    {
      "Dat_Referencia": "2017-09-28 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6242,
      "QtdFinalizadas": 2034,
      "QtdAbandonadas": 3383
    },
    {
      "Dat_Referencia": "2017-09-29 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5821,
      "QtdFinalizadas": 1656,
      "QtdAbandonadas": 3207
    },
    {
      "Dat_Referencia": "2017-09-30 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4117,
      "QtdFinalizadas": 1025,
      "QtdAbandonadas": 2048
    },
    {
      "Dat_Referencia": "2017-10-01 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 2560,
      "QtdFinalizadas": 677,
      "QtdAbandonadas": 1273
    },
    {
      "Dat_Referencia": "2017-10-02 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 8822,
      "QtdFinalizadas": 3163,
      "QtdAbandonadas": 5983
    },
    {
      "Dat_Referencia": "2017-10-03 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 8240,
      "QtdFinalizadas": 2601,
      "QtdAbandonadas": 4523
    },
    {
      "Dat_Referencia": "2017-10-04 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7630,
      "QtdFinalizadas": 1881,
      "QtdAbandonadas": 3879
    },
    {
      "Dat_Referencia": "2017-10-05 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7328,
      "QtdFinalizadas": 1951,
      "QtdAbandonadas": 3770
    },
    {
      "Dat_Referencia": "2017-10-06 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7155,
      "QtdFinalizadas": 1794,
      "QtdAbandonadas": 3417
    },
    {
      "Dat_Referencia": "2017-10-07 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4058,
      "QtdFinalizadas": 986,
      "QtdAbandonadas": 2084
    },
    {
      "Dat_Referencia": "2017-10-08 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 2300,
      "QtdFinalizadas": 605,
      "QtdAbandonadas": 1153
    },
    {
      "Dat_Referencia": "2017-10-09 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 8615,
      "QtdFinalizadas": 2941,
      "QtdAbandonadas": 4351
    },
    {
      "Dat_Referencia": "2017-10-10 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 8079,
      "QtdFinalizadas": 2603,
      "QtdAbandonadas": 4409
    },
    {
      "Dat_Referencia": "2017-10-11 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6763,
      "QtdFinalizadas": 1833,
      "QtdAbandonadas": 3520
    },
    {
      "Dat_Referencia": "2017-10-12 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 2891,
      "QtdFinalizadas": 864,
      "QtdAbandonadas": 1560
    },
    {
      "Dat_Referencia": "2017-10-13 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6245,
      "QtdFinalizadas": 1437,
      "QtdAbandonadas": 3416
    },
    {
      "Dat_Referencia": "2017-10-14 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 3351,
      "QtdFinalizadas": 815,
      "QtdAbandonadas": 1741
    },
    {
      "Dat_Referencia": "2017-10-15 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 2183,
      "QtdFinalizadas": 543,
      "QtdAbandonadas": 1094
    },
    {
      "Dat_Referencia": "2017-10-16 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 8215,
      "QtdFinalizadas": 1848,
      "QtdAbandonadas": 3954
    },
    {
      "Dat_Referencia": "2017-10-17 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7541,
      "QtdFinalizadas": 2153,
      "QtdAbandonadas": 3834
    },
    {
      "Dat_Referencia": "2017-10-18 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6685,
      "QtdFinalizadas": 1485,
      "QtdAbandonadas": 2949
    },
    {
      "Dat_Referencia": "2017-10-19 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6024,
      "QtdFinalizadas": 1328,
      "QtdAbandonadas": 3549
    },
    {
      "Dat_Referencia": "2017-10-20 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5452,
      "QtdFinalizadas": 1427,
      "QtdAbandonadas": 2806
    },
    {
      "Dat_Referencia": "2017-10-21 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 3418,
      "QtdFinalizadas": 724,
      "QtdAbandonadas": 1667
    },
    {
      "Dat_Referencia": "2017-10-22 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 2100,
      "QtdFinalizadas": 560,
      "QtdAbandonadas": 1436
    },
    {
      "Dat_Referencia": "2017-10-23 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 7250,
      "QtdFinalizadas": 2261,
      "QtdAbandonadas": 3659
    },
    {
      "Dat_Referencia": "2017-10-24 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6460,
      "QtdFinalizadas": 1764,
      "QtdAbandonadas": 3437
    },
    {
      "Dat_Referencia": "2017-10-25 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6200,
      "QtdFinalizadas": 1401,
      "QtdAbandonadas": 2845
    },
    {
      "Dat_Referencia": "2017-10-26 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5878,
      "QtdFinalizadas": 1295,
      "QtdAbandonadas": 2777
    },
    {
      "Dat_Referencia": "2017-10-27 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5103,
      "QtdFinalizadas": 1416,
      "QtdAbandonadas": 2613
    },
    {
      "Dat_Referencia": "2017-10-28 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 3620,
      "QtdFinalizadas": 1080,
      "QtdAbandonadas": 1893
    },
    {
      "Dat_Referencia": "2017-10-29 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 2143,
      "QtdFinalizadas": 559,
      "QtdAbandonadas": 1116
    },
    {
      "Dat_Referencia": "2017-10-30 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6730,
      "QtdFinalizadas": 2036,
      "QtdAbandonadas": 3126
    },
    {
      "Dat_Referencia": "2017-10-31 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6731,
      "QtdFinalizadas": 2727,
      "QtdAbandonadas": 3695
    },
    {
      "Dat_Referencia": "2017-11-01 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6072,
      "QtdFinalizadas": 2221,
      "QtdAbandonadas": 3320
    },
    {
      "Dat_Referencia": "2017-11-02 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 3264,
      "QtdFinalizadas": 679,
      "QtdAbandonadas": 1182
    },
    {
      "Dat_Referencia": "2017-11-03 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5651,
      "QtdFinalizadas": 1574,
      "QtdAbandonadas": 2826
    },
    {
      "Dat_Referencia": "2017-11-04 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 3102,
      "QtdFinalizadas": 898,
      "QtdAbandonadas": 1538
    },
    {
      "Dat_Referencia": "2017-11-05 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 1956,
      "QtdFinalizadas": 434,
      "QtdAbandonadas": 1054
    },
    {
      "Dat_Referencia": "2017-11-06 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6732,
      "QtdFinalizadas": 1543,
      "QtdAbandonadas": 3149
    },
    {
      "Dat_Referencia": "2017-11-07 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6781,
      "QtdFinalizadas": 2738,
      "QtdAbandonadas": 4298
    },
    {
      "Dat_Referencia": "2017-11-08 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6333,
      "QtdFinalizadas": 1840,
      "QtdAbandonadas": 3230
    },
    {
      "Dat_Referencia": "2017-11-09 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5888,
      "QtdFinalizadas": 1852,
      "QtdAbandonadas": 3089
    },
    {
      "Dat_Referencia": "2017-11-10 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5035,
      "QtdFinalizadas": 1367,
      "QtdAbandonadas": 2933
    },
    {
      "Dat_Referencia": "2017-11-11 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 3382,
      "QtdFinalizadas": 816,
      "QtdAbandonadas": 1656
    },
    {
      "Dat_Referencia": "2017-11-12 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 1872,
      "QtdFinalizadas": 456,
      "QtdAbandonadas": 943
    },
    {
      "Dat_Referencia": "2017-11-13 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5937,
      "QtdFinalizadas": 1510,
      "QtdAbandonadas": 2813
    },
    {
      "Dat_Referencia": "2017-11-14 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5012,
      "QtdFinalizadas": 1241,
      "QtdAbandonadas": 2380
    },
    {
      "Dat_Referencia": "2017-11-15 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 2761,
      "QtdFinalizadas": 706,
      "QtdAbandonadas": 1255
    },
    {
      "Dat_Referencia": "2017-11-16 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5544,
      "QtdFinalizadas": 1399,
      "QtdAbandonadas": 2971
    },
    {
      "Dat_Referencia": "2017-11-17 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4519,
      "QtdFinalizadas": 1140,
      "QtdAbandonadas": 2243
    },
    {
      "Dat_Referencia": "2017-11-18 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 2988,
      "QtdFinalizadas": 637,
      "QtdAbandonadas": 1486
    },
    {
      "Dat_Referencia": "2017-11-19 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 1643,
      "QtdFinalizadas": 331,
      "QtdAbandonadas": 987
    },
    {
      "Dat_Referencia": "2017-11-20 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5236,
      "QtdFinalizadas": 1426,
      "QtdAbandonadas": 2636
    },
    {
      "Dat_Referencia": "2017-11-21 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5918,
      "QtdFinalizadas": 1426,
      "QtdAbandonadas": 3002
    },
    {
      "Dat_Referencia": "2017-11-22 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5566,
      "QtdFinalizadas": 1348,
      "QtdAbandonadas": 2996
    },
    {
      "Dat_Referencia": "2017-11-23 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5294,
      "QtdFinalizadas": 1926,
      "QtdAbandonadas": 2943
    },
    {
      "Dat_Referencia": "2017-11-24 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4565,
      "QtdFinalizadas": 1300,
      "QtdAbandonadas": 2382
    },
    {
      "Dat_Referencia": "2017-11-25 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 2662,
      "QtdFinalizadas": 762,
      "QtdAbandonadas": 1341
    },
    {
      "Dat_Referencia": "2017-11-26 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 1683,
      "QtdFinalizadas": 442,
      "QtdAbandonadas": 890
    },
    {
      "Dat_Referencia": "2017-11-27 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5398,
      "QtdFinalizadas": 1329,
      "QtdAbandonadas": 2689
    },
    {
      "Dat_Referencia": "2017-11-28 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4906,
      "QtdFinalizadas": 1170,
      "QtdAbandonadas": 2599
    },
    {
      "Dat_Referencia": "2017-11-29 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5366,
      "QtdFinalizadas": 1800,
      "QtdAbandonadas": 2938
    },
    {
      "Dat_Referencia": "2017-11-30 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5006,
      "QtdFinalizadas": 1430,
      "QtdAbandonadas": 2652
    },
    {
      "Dat_Referencia": "2017-12-01 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4562,
      "QtdFinalizadas": 1403,
      "QtdAbandonadas": 2477
    },
    {
      "Dat_Referencia": "2017-12-02 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 2992,
      "QtdFinalizadas": 783,
      "QtdAbandonadas": 1392
    },
    {
      "Dat_Referencia": "2017-12-03 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 1720,
      "QtdFinalizadas": 449,
      "QtdAbandonadas": 844
    },
    {
      "Dat_Referencia": "2017-12-04 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5634,
      "QtdFinalizadas": 1549,
      "QtdAbandonadas": 3097
    },
    {
      "Dat_Referencia": "2017-12-05 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5584,
      "QtdFinalizadas": 1849,
      "QtdAbandonadas": 2774
    },
    {
      "Dat_Referencia": "2017-12-06 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5295,
      "QtdFinalizadas": 1330,
      "QtdAbandonadas": 2659
    },
    {
      "Dat_Referencia": "2017-12-07 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4809,
      "QtdFinalizadas": 1187,
      "QtdAbandonadas": 2496
    },
    {
      "Dat_Referencia": "2017-12-08 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4384,
      "QtdFinalizadas": 982,
      "QtdAbandonadas": 2106
    },
    {
      "Dat_Referencia": "2017-12-09 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 3078,
      "QtdFinalizadas": 656,
      "QtdAbandonadas": 1469
    },
    {
      "Dat_Referencia": "2017-12-10 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 1864,
      "QtdFinalizadas": 431,
      "QtdAbandonadas": 826
    },
    {
      "Dat_Referencia": "2017-12-11 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 6129,
      "QtdFinalizadas": 1909,
      "QtdAbandonadas": 3250
    },
    {
      "Dat_Referencia": "2017-12-12 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5181,
      "QtdFinalizadas": 1570,
      "QtdAbandonadas": 2818
    },
    {
      "Dat_Referencia": "2017-12-13 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4861,
      "QtdFinalizadas": 1189,
      "QtdAbandonadas": 2285
    },
    {
      "Dat_Referencia": "2017-12-14 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 5432,
      "QtdFinalizadas": 1213,
      "QtdAbandonadas": 2559
    },
    {
      "Dat_Referencia": "2017-12-15 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 3837,
      "QtdFinalizadas": 943,
      "QtdAbandonadas": 1759
    },
    {
      "Dat_Referencia": "2017-12-16 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 2421,
      "QtdFinalizadas": 536,
      "QtdAbandonadas": 1062
    },
    {
      "Dat_Referencia": "2017-12-17 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 1523,
      "QtdFinalizadas": 391,
      "QtdAbandonadas": 638
    },
    {
      "Dat_Referencia": "2017-12-18 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4978,
      "QtdFinalizadas": 1103,
      "QtdAbandonadas": 2152
    },
    {
      "Dat_Referencia": "2017-12-19 00:00:00.000",
      "Grupo": "OCT",
      "QtdDerivadas": 4460,
      "QtdFinalizadas": 993,
      "QtdAbandonadas": 1948
    },
    {
      "Dat_Referencia": "2017-01-01 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 10207,
      "QtdFinalizadas": 2101,
      "QtdAbandonadas": 4548
    },
    {
      "Dat_Referencia": "2017-01-02 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 51034,
      "QtdFinalizadas": 6238,
      "QtdAbandonadas": 18375
    },
    {
      "Dat_Referencia": "2017-01-03 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 59165,
      "QtdFinalizadas": 6875,
      "QtdAbandonadas": 24090
    },
    {
      "Dat_Referencia": "2017-01-04 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 59223,
      "QtdFinalizadas": 6411,
      "QtdAbandonadas": 24058
    },
    {
      "Dat_Referencia": "2017-01-05 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 59627,
      "QtdFinalizadas": 632,
      "QtdAbandonadas": 19942
    },
    {
      "Dat_Referencia": "2017-01-06 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 51948,
      "QtdFinalizadas": 694,
      "QtdAbandonadas": 17054
    },
    {
      "Dat_Referencia": "2017-01-07 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 33649,
      "QtdFinalizadas": 459,
      "QtdAbandonadas": 10499
    },
    {
      "Dat_Referencia": "2017-01-08 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 18789,
      "QtdFinalizadas": 382,
      "QtdAbandonadas": 5998
    },
    {
      "Dat_Referencia": "2017-01-09 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 66246,
      "QtdFinalizadas": 936,
      "QtdAbandonadas": 24256
    },
    {
      "Dat_Referencia": "2017-01-10 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 75660,
      "QtdFinalizadas": 1422,
      "QtdAbandonadas": 27693
    },
    {
      "Dat_Referencia": "2017-01-11 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 62489,
      "QtdFinalizadas": 1009,
      "QtdAbandonadas": 20406
    },
    {
      "Dat_Referencia": "2017-01-12 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 56250,
      "QtdFinalizadas": 797,
      "QtdAbandonadas": 17383
    },
    {
      "Dat_Referencia": "2017-01-13 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 52126,
      "QtdFinalizadas": 991,
      "QtdAbandonadas": 15703
    },
    {
      "Dat_Referencia": "2017-01-14 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 33675,
      "QtdFinalizadas": 630,
      "QtdAbandonadas": 9608
    },
    {
      "Dat_Referencia": "2017-01-15 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 18342,
      "QtdFinalizadas": 348,
      "QtdAbandonadas": 5577
    },
    {
      "Dat_Referencia": "2017-01-16 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 57162,
      "QtdFinalizadas": 753,
      "QtdAbandonadas": 17644
    },
    {
      "Dat_Referencia": "2017-01-17 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 56860,
      "QtdFinalizadas": 840,
      "QtdAbandonadas": 18767
    },
    {
      "Dat_Referencia": "2017-01-18 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 50690,
      "QtdFinalizadas": 755,
      "QtdAbandonadas": 18205
    },
    {
      "Dat_Referencia": "2017-01-19 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 46352,
      "QtdFinalizadas": 650,
      "QtdAbandonadas": 15147
    },
    {
      "Dat_Referencia": "2017-01-20 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 42519,
      "QtdFinalizadas": 549,
      "QtdAbandonadas": 12857
    },
    {
      "Dat_Referencia": "2017-01-21 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 30616,
      "QtdFinalizadas": 415,
      "QtdAbandonadas": 8918
    },
    {
      "Dat_Referencia": "2017-01-22 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 17951,
      "QtdFinalizadas": 326,
      "QtdAbandonadas": 5538
    },
    {
      "Dat_Referencia": "2017-01-23 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 58852,
      "QtdFinalizadas": 608,
      "QtdAbandonadas": 21955
    },
    {
      "Dat_Referencia": "2017-01-24 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 53533,
      "QtdFinalizadas": 678,
      "QtdAbandonadas": 17906
    },
    {
      "Dat_Referencia": "2017-01-25 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 52711,
      "QtdFinalizadas": 789,
      "QtdAbandonadas": 17205
    },
    {
      "Dat_Referencia": "2017-01-26 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 50213,
      "QtdFinalizadas": 1056,
      "QtdAbandonadas": 18638
    },
    {
      "Dat_Referencia": "2017-01-27 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 46620,
      "QtdFinalizadas": 537,
      "QtdAbandonadas": 14334
    },
    {
      "Dat_Referencia": "2017-01-28 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 31841,
      "QtdFinalizadas": 405,
      "QtdAbandonadas": 9448
    },
    {
      "Dat_Referencia": "2017-01-29 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 20625,
      "QtdFinalizadas": 509,
      "QtdAbandonadas": 6684
    },
    {
      "Dat_Referencia": "2017-01-30 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 57546,
      "QtdFinalizadas": 796,
      "QtdAbandonadas": 20165
    },
    {
      "Dat_Referencia": "2017-01-31 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 57187,
      "QtdFinalizadas": 860,
      "QtdAbandonadas": 23142
    },
    {
      "Dat_Referencia": "2017-02-01 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 57800,
      "QtdFinalizadas": 951,
      "QtdAbandonadas": 20402
    },
    {
      "Dat_Referencia": "2017-02-02 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 53720,
      "QtdFinalizadas": 789,
      "QtdAbandonadas": 19495
    },
    {
      "Dat_Referencia": "2017-02-03 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 50584,
      "QtdFinalizadas": 715,
      "QtdAbandonadas": 18315
    },
    {
      "Dat_Referencia": "2017-02-04 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 35378,
      "QtdFinalizadas": 577,
      "QtdAbandonadas": 11770
    },
    {
      "Dat_Referencia": "2017-02-05 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 20669,
      "QtdFinalizadas": 400,
      "QtdAbandonadas": 7185
    },
    {
      "Dat_Referencia": "2017-02-06 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 57994,
      "QtdFinalizadas": 673,
      "QtdAbandonadas": 21216
    },
    {
      "Dat_Referencia": "2017-02-07 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 55337,
      "QtdFinalizadas": 813,
      "QtdAbandonadas": 22500
    },
    {
      "Dat_Referencia": "2017-02-08 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 58243,
      "QtdFinalizadas": 728,
      "QtdAbandonadas": 23457
    },
    {
      "Dat_Referencia": "2017-02-09 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 55562,
      "QtdFinalizadas": 733,
      "QtdAbandonadas": 20182
    },
    {
      "Dat_Referencia": "2017-02-10 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 52757,
      "QtdFinalizadas": 702,
      "QtdAbandonadas": 20370
    },
    {
      "Dat_Referencia": "2017-02-11 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 36185,
      "QtdFinalizadas": 594,
      "QtdAbandonadas": 11948
    },
    {
      "Dat_Referencia": "2017-02-12 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 22802,
      "QtdFinalizadas": 411,
      "QtdAbandonadas": 6425
    },
    {
      "Dat_Referencia": "2017-02-13 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 58534,
      "QtdFinalizadas": 1153,
      "QtdAbandonadas": 20578
    },
    {
      "Dat_Referencia": "2017-02-14 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 53676,
      "QtdFinalizadas": 1086,
      "QtdAbandonadas": 18922
    },
    {
      "Dat_Referencia": "2017-02-15 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 57448,
      "QtdFinalizadas": 1021,
      "QtdAbandonadas": 18208
    },
    {
      "Dat_Referencia": "2017-02-16 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 55281,
      "QtdFinalizadas": 713,
      "QtdAbandonadas": 18625
    },
    {
      "Dat_Referencia": "2017-02-17 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 47534,
      "QtdFinalizadas": 593,
      "QtdAbandonadas": 16834
    },
    {
      "Dat_Referencia": "2017-02-18 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 32831,
      "QtdFinalizadas": 674,
      "QtdAbandonadas": 10397
    },
    {
      "Dat_Referencia": "2017-02-19 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 20047,
      "QtdFinalizadas": 712,
      "QtdAbandonadas": 6737
    },
    {
      "Dat_Referencia": "2017-02-20 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 60102,
      "QtdFinalizadas": 875,
      "QtdAbandonadas": 20670
    },
    {
      "Dat_Referencia": "2017-02-21 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 54179,
      "QtdFinalizadas": 805,
      "QtdAbandonadas": 19966
    },
    {
      "Dat_Referencia": "2017-02-22 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 52777,
      "QtdFinalizadas": 962,
      "QtdAbandonadas": 17536
    },
    {
      "Dat_Referencia": "2017-02-23 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 55275,
      "QtdFinalizadas": 927,
      "QtdAbandonadas": 21504
    },
    {
      "Dat_Referencia": "2017-02-24 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 49891,
      "QtdFinalizadas": 838,
      "QtdAbandonadas": 18677
    },
    {
      "Dat_Referencia": "2017-02-25 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 33097,
      "QtdFinalizadas": 697,
      "QtdAbandonadas": 11232
    },
    {
      "Dat_Referencia": "2017-02-26 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 17095,
      "QtdFinalizadas": 535,
      "QtdAbandonadas": 6342
    },
    {
      "Dat_Referencia": "2017-02-27 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 30367,
      "QtdFinalizadas": 779,
      "QtdAbandonadas": 10219
    },
    {
      "Dat_Referencia": "2017-02-28 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 24444,
      "QtdFinalizadas": 776,
      "QtdAbandonadas": 8755
    },
    {
      "Dat_Referencia": "2017-03-01 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 51644,
      "QtdFinalizadas": 778,
      "QtdAbandonadas": 17964
    },
    {
      "Dat_Referencia": "2017-03-02 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 71640,
      "QtdFinalizadas": 1096,
      "QtdAbandonadas": 28628
    },
    {
      "Dat_Referencia": "2017-03-03 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 61445,
      "QtdFinalizadas": 1500,
      "QtdAbandonadas": 22983
    },
    {
      "Dat_Referencia": "2017-03-04 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 44808,
      "QtdFinalizadas": 1221,
      "QtdAbandonadas": 15070
    },
    {
      "Dat_Referencia": "2017-03-05 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 23297,
      "QtdFinalizadas": 840,
      "QtdAbandonadas": 8874
    },
    {
      "Dat_Referencia": "2017-03-06 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 74138,
      "QtdFinalizadas": 926,
      "QtdAbandonadas": 31692
    },
    {
      "Dat_Referencia": "2017-03-07 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 65656,
      "QtdFinalizadas": 829,
      "QtdAbandonadas": 29721
    },
    {
      "Dat_Referencia": "2017-03-08 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 59882,
      "QtdFinalizadas": 931,
      "QtdAbandonadas": 23921
    },
    {
      "Dat_Referencia": "2017-03-09 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 62092,
      "QtdFinalizadas": 1061,
      "QtdAbandonadas": 24340
    },
    {
      "Dat_Referencia": "2017-03-10 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 56917,
      "QtdFinalizadas": 825,
      "QtdAbandonadas": 19669
    },
    {
      "Dat_Referencia": "2017-03-11 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 39694,
      "QtdFinalizadas": 523,
      "QtdAbandonadas": 12136
    },
    {
      "Dat_Referencia": "2017-03-12 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 21762,
      "QtdFinalizadas": 598,
      "QtdAbandonadas": 7177
    },
    {
      "Dat_Referencia": "2017-03-13 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 74458,
      "QtdFinalizadas": 1045,
      "QtdAbandonadas": 27445
    },
    {
      "Dat_Referencia": "2017-03-14 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 70856,
      "QtdFinalizadas": 870,
      "QtdAbandonadas": 26196
    },
    {
      "Dat_Referencia": "2017-03-15 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 68333,
      "QtdFinalizadas": 827,
      "QtdAbandonadas": 22221
    },
    {
      "Dat_Referencia": "2017-03-16 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 61281,
      "QtdFinalizadas": 1113,
      "QtdAbandonadas": 21073
    },
    {
      "Dat_Referencia": "2017-03-17 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 50420,
      "QtdFinalizadas": 912,
      "QtdAbandonadas": 25899
    },
    {
      "Dat_Referencia": "2017-03-18 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 42085,
      "QtdFinalizadas": 729,
      "QtdAbandonadas": 12420
    },
    {
      "Dat_Referencia": "2017-03-19 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 27766,
      "QtdFinalizadas": 728,
      "QtdAbandonadas": 7988
    },
    {
      "Dat_Referencia": "2017-03-20 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 71415,
      "QtdFinalizadas": 916,
      "QtdAbandonadas": 23305
    },
    {
      "Dat_Referencia": "2017-03-21 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 64243,
      "QtdFinalizadas": 749,
      "QtdAbandonadas": 21792
    },
    {
      "Dat_Referencia": "2017-03-22 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 57937,
      "QtdFinalizadas": 813,
      "QtdAbandonadas": 18260
    },
    {
      "Dat_Referencia": "2017-03-23 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 52942,
      "QtdFinalizadas": 782,
      "QtdAbandonadas": 16212
    },
    {
      "Dat_Referencia": "2017-03-24 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 49190,
      "QtdFinalizadas": 859,
      "QtdAbandonadas": 15501
    },
    {
      "Dat_Referencia": "2017-03-25 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 34964,
      "QtdFinalizadas": 712,
      "QtdAbandonadas": 10802
    },
    {
      "Dat_Referencia": "2017-03-26 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 22297,
      "QtdFinalizadas": 659,
      "QtdAbandonadas": 7552
    },
    {
      "Dat_Referencia": "2017-03-27 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 66662,
      "QtdFinalizadas": 815,
      "QtdAbandonadas": 23087
    },
    {
      "Dat_Referencia": "2017-03-28 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 59914,
      "QtdFinalizadas": 1256,
      "QtdAbandonadas": 21400
    },
    {
      "Dat_Referencia": "2017-03-29 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 71352,
      "QtdFinalizadas": 780,
      "QtdAbandonadas": 20346
    },
    {
      "Dat_Referencia": "2017-03-30 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 55535,
      "QtdFinalizadas": 927,
      "QtdAbandonadas": 19911
    },
    {
      "Dat_Referencia": "2017-03-31 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 52507,
      "QtdFinalizadas": 786,
      "QtdAbandonadas": 17828
    },
    {
      "Dat_Referencia": "2017-04-01 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 37490,
      "QtdFinalizadas": 739,
      "QtdAbandonadas": 12598
    },
    {
      "Dat_Referencia": "2017-04-02 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 22641,
      "QtdFinalizadas": 457,
      "QtdAbandonadas": 8072
    },
    {
      "Dat_Referencia": "2017-04-03 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 65381,
      "QtdFinalizadas": 702,
      "QtdAbandonadas": 24458
    },
    {
      "Dat_Referencia": "2017-04-04 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 68995,
      "QtdFinalizadas": 1045,
      "QtdAbandonadas": 30120
    },
    {
      "Dat_Referencia": "2017-04-05 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 62412,
      "QtdFinalizadas": 861,
      "QtdAbandonadas": 23595
    },
    {
      "Dat_Referencia": "2017-04-06 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 61371,
      "QtdFinalizadas": 1178,
      "QtdAbandonadas": 22326
    },
    {
      "Dat_Referencia": "2017-04-07 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 59410,
      "QtdFinalizadas": 1172,
      "QtdAbandonadas": 21323
    },
    {
      "Dat_Referencia": "2017-04-08 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 41146,
      "QtdFinalizadas": 1032,
      "QtdAbandonadas": 14253
    },
    {
      "Dat_Referencia": "2017-04-09 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 22631,
      "QtdFinalizadas": 855,
      "QtdAbandonadas": 8118
    },
    {
      "Dat_Referencia": "2017-04-10 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 69062,
      "QtdFinalizadas": 1022,
      "QtdAbandonadas": 29395
    },
    {
      "Dat_Referencia": "2017-04-11 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 64214,
      "QtdFinalizadas": 1581,
      "QtdAbandonadas": 34718
    },
    {
      "Dat_Referencia": "2017-04-12 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 56252,
      "QtdFinalizadas": 717,
      "QtdAbandonadas": 24847
    },
    {
      "Dat_Referencia": "2017-04-13 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 50228,
      "QtdFinalizadas": 987,
      "QtdAbandonadas": 21394
    },
    {
      "Dat_Referencia": "2017-04-14 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 27999,
      "QtdFinalizadas": 1869,
      "QtdAbandonadas": 12128
    },
    {
      "Dat_Referencia": "2017-04-15 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 32860,
      "QtdFinalizadas": 782,
      "QtdAbandonadas": 12821
    },
    {
      "Dat_Referencia": "2017-04-16 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 18238,
      "QtdFinalizadas": 528,
      "QtdAbandonadas": 7954
    },
    {
      "Dat_Referencia": "2017-04-17 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 60710,
      "QtdFinalizadas": 576,
      "QtdAbandonadas": 24241
    },
    {
      "Dat_Referencia": "2017-04-18 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 61906,
      "QtdFinalizadas": 999,
      "QtdAbandonadas": 26335
    },
    {
      "Dat_Referencia": "2017-04-19 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 55229,
      "QtdFinalizadas": 597,
      "QtdAbandonadas": 22020
    },
    {
      "Dat_Referencia": "2017-04-20 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 49473,
      "QtdFinalizadas": 477,
      "QtdAbandonadas": 20391
    },
    {
      "Dat_Referencia": "2017-04-21 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 30288,
      "QtdFinalizadas": 496,
      "QtdAbandonadas": 11810
    },
    {
      "Dat_Referencia": "2017-04-22 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 31304,
      "QtdFinalizadas": 450,
      "QtdAbandonadas": 12393
    },
    {
      "Dat_Referencia": "2017-04-23 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 20372,
      "QtdFinalizadas": 190,
      "QtdAbandonadas": 7940
    },
    {
      "Dat_Referencia": "2017-04-24 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 63486,
      "QtdFinalizadas": 522,
      "QtdAbandonadas": 31159
    },
    {
      "Dat_Referencia": "2017-04-25 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 53935,
      "QtdFinalizadas": 1449,
      "QtdAbandonadas": 25866
    },
    {
      "Dat_Referencia": "2017-04-26 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 54128,
      "QtdFinalizadas": 2029,
      "QtdAbandonadas": 24206
    },
    {
      "Dat_Referencia": "2017-04-27 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 54219,
      "QtdFinalizadas": 1217,
      "QtdAbandonadas": 26381
    },
    {
      "Dat_Referencia": "2017-04-28 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 42390,
      "QtdFinalizadas": 930,
      "QtdAbandonadas": 23974
    },
    {
      "Dat_Referencia": "2017-04-29 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 35641,
      "QtdFinalizadas": 650,
      "QtdAbandonadas": 15833
    },
    {
      "Dat_Referencia": "2017-04-30 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 19579,
      "QtdFinalizadas": 727,
      "QtdAbandonadas": 8884
    },
    {
      "Dat_Referencia": "2017-05-01 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 28167,
      "QtdFinalizadas": 785,
      "QtdAbandonadas": 12698
    },
    {
      "Dat_Referencia": "2017-05-02 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 70075,
      "QtdFinalizadas": 1151,
      "QtdAbandonadas": 42465
    },
    {
      "Dat_Referencia": "2017-05-03 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 66900,
      "QtdFinalizadas": 1399,
      "QtdAbandonadas": 35513
    },
    {
      "Dat_Referencia": "2017-05-04 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 57225,
      "QtdFinalizadas": 1029,
      "QtdAbandonadas": 29305
    },
    {
      "Dat_Referencia": "2017-05-05 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 51036,
      "QtdFinalizadas": 984,
      "QtdAbandonadas": 27582
    },
    {
      "Dat_Referencia": "2017-05-06 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 37768,
      "QtdFinalizadas": 1422,
      "QtdAbandonadas": 19986
    },
    {
      "Dat_Referencia": "2017-05-07 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 21138,
      "QtdFinalizadas": 754,
      "QtdAbandonadas": 10937
    },
    {
      "Dat_Referencia": "2017-05-08 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 62937,
      "QtdFinalizadas": 1376,
      "QtdAbandonadas": 33179
    },
    {
      "Dat_Referencia": "2017-05-09 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 68176,
      "QtdFinalizadas": 1270,
      "QtdAbandonadas": 42278
    },
    {
      "Dat_Referencia": "2017-05-10 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 75202,
      "QtdFinalizadas": 1781,
      "QtdAbandonadas": 42651
    },
    {
      "Dat_Referencia": "2017-05-11 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 63814,
      "QtdFinalizadas": 1242,
      "QtdAbandonadas": 28113
    },
    {
      "Dat_Referencia": "2017-05-12 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 32268,
      "QtdFinalizadas": 651,
      "QtdAbandonadas": 14125
    },
    {
      "Dat_Referencia": "2017-05-13 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 47705,
      "QtdFinalizadas": 1020,
      "QtdAbandonadas": 15399
    },
    {
      "Dat_Referencia": "2017-05-14 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 21502,
      "QtdFinalizadas": 631,
      "QtdAbandonadas": 7617
    },
    {
      "Dat_Referencia": "2017-05-15 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 78500,
      "QtdFinalizadas": 1138,
      "QtdAbandonadas": 26270
    },
    {
      "Dat_Referencia": "2017-05-16 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 65321,
      "QtdFinalizadas": 1021,
      "QtdAbandonadas": 23180
    },
    {
      "Dat_Referencia": "2017-05-17 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 57671,
      "QtdFinalizadas": 1530,
      "QtdAbandonadas": 21523
    },
    {
      "Dat_Referencia": "2017-05-18 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 52708,
      "QtdFinalizadas": 1105,
      "QtdAbandonadas": 19420
    },
    {
      "Dat_Referencia": "2017-05-19 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 48673,
      "QtdFinalizadas": 1861,
      "QtdAbandonadas": 20562
    },
    {
      "Dat_Referencia": "2017-05-20 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 38447,
      "QtdFinalizadas": 1049,
      "QtdAbandonadas": 14313
    },
    {
      "Dat_Referencia": "2017-05-21 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 22698,
      "QtdFinalizadas": 686,
      "QtdAbandonadas": 8257
    },
    {
      "Dat_Referencia": "2017-05-22 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 68636,
      "QtdFinalizadas": 1251,
      "QtdAbandonadas": 28262
    },
    {
      "Dat_Referencia": "2017-05-23 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 57809,
      "QtdFinalizadas": 1693,
      "QtdAbandonadas": 24724
    },
    {
      "Dat_Referencia": "2017-05-24 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 64314,
      "QtdFinalizadas": 1242,
      "QtdAbandonadas": 36407
    },
    {
      "Dat_Referencia": "2017-05-25 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 55123,
      "QtdFinalizadas": 1484,
      "QtdAbandonadas": 25072
    },
    {
      "Dat_Referencia": "2017-05-26 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 49945,
      "QtdFinalizadas": 1342,
      "QtdAbandonadas": 22480
    },
    {
      "Dat_Referencia": "2017-05-27 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 34571,
      "QtdFinalizadas": 1304,
      "QtdAbandonadas": 15559
    },
    {
      "Dat_Referencia": "2017-05-28 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 21527,
      "QtdFinalizadas": 732,
      "QtdAbandonadas": 9238
    },
    {
      "Dat_Referencia": "2017-05-29 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 57853,
      "QtdFinalizadas": 1480,
      "QtdAbandonadas": 25090
    },
    {
      "Dat_Referencia": "2017-05-30 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 55190,
      "QtdFinalizadas": 1469,
      "QtdAbandonadas": 23353
    },
    {
      "Dat_Referencia": "2017-05-31 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 57857,
      "QtdFinalizadas": 1526,
      "QtdAbandonadas": 27361
    },
    {
      "Dat_Referencia": "2017-06-01 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 55866,
      "QtdFinalizadas": 1430,
      "QtdAbandonadas": 25754
    },
    {
      "Dat_Referencia": "2017-06-02 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 50576,
      "QtdFinalizadas": 1103,
      "QtdAbandonadas": 22145
    },
    {
      "Dat_Referencia": "2017-06-03 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 34126,
      "QtdFinalizadas": 713,
      "QtdAbandonadas": 14979
    },
    {
      "Dat_Referencia": "2017-06-04 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 20699,
      "QtdFinalizadas": 927,
      "QtdAbandonadas": 9642
    },
    {
      "Dat_Referencia": "2017-06-05 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 68699,
      "QtdFinalizadas": 1960,
      "QtdAbandonadas": 40205
    },
    {
      "Dat_Referencia": "2017-06-06 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 64839,
      "QtdFinalizadas": 1421,
      "QtdAbandonadas": 35600
    },
    {
      "Dat_Referencia": "2017-06-07 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 72402,
      "QtdFinalizadas": 1356,
      "QtdAbandonadas": 38955
    },
    {
      "Dat_Referencia": "2017-06-08 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 61078,
      "QtdFinalizadas": 1398,
      "QtdAbandonadas": 26785
    },
    {
      "Dat_Referencia": "2017-06-09 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 53294,
      "QtdFinalizadas": 1348,
      "QtdAbandonadas": 22755
    },
    {
      "Dat_Referencia": "2017-06-10 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 36197,
      "QtdFinalizadas": 1180,
      "QtdAbandonadas": 14711
    },
    {
      "Dat_Referencia": "2017-06-11 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 20923,
      "QtdFinalizadas": 790,
      "QtdAbandonadas": 8552
    },
    {
      "Dat_Referencia": "2017-06-12 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 59801,
      "QtdFinalizadas": 1323,
      "QtdAbandonadas": 28447
    },
    {
      "Dat_Referencia": "2017-06-13 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 55928,
      "QtdFinalizadas": 1677,
      "QtdAbandonadas": 25431
    },
    {
      "Dat_Referencia": "2017-06-14 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 69346,
      "QtdFinalizadas": 1989,
      "QtdAbandonadas": 32867
    },
    {
      "Dat_Referencia": "2017-06-15 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 35209,
      "QtdFinalizadas": 1288,
      "QtdAbandonadas": 14982
    },
    {
      "Dat_Referencia": "2017-06-16 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 53155,
      "QtdFinalizadas": 1597,
      "QtdAbandonadas": 24071
    },
    {
      "Dat_Referencia": "2017-06-17 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 32704,
      "QtdFinalizadas": 1219,
      "QtdAbandonadas": 13960
    },
    {
      "Dat_Referencia": "2017-06-18 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 20933,
      "QtdFinalizadas": 794,
      "QtdAbandonadas": 9114
    },
    {
      "Dat_Referencia": "2017-06-19 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 69846,
      "QtdFinalizadas": 1456,
      "QtdAbandonadas": 30016
    },
    {
      "Dat_Referencia": "2017-06-20 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 57374,
      "QtdFinalizadas": 1477,
      "QtdAbandonadas": 26275
    },
    {
      "Dat_Referencia": "2017-06-21 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 52901,
      "QtdFinalizadas": 1203,
      "QtdAbandonadas": 23133
    },
    {
      "Dat_Referencia": "2017-06-22 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 62911,
      "QtdFinalizadas": 1238,
      "QtdAbandonadas": 33542
    },
    {
      "Dat_Referencia": "2017-06-23 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 50179,
      "QtdFinalizadas": 1295,
      "QtdAbandonadas": 23890
    },
    {
      "Dat_Referencia": "2017-06-24 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 32276,
      "QtdFinalizadas": 831,
      "QtdAbandonadas": 14053
    },
    {
      "Dat_Referencia": "2017-06-25 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 20785,
      "QtdFinalizadas": 735,
      "QtdAbandonadas": 9301
    },
    {
      "Dat_Referencia": "2017-06-26 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 59567,
      "QtdFinalizadas": 1309,
      "QtdAbandonadas": 26285
    },
    {
      "Dat_Referencia": "2017-06-27 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 62015,
      "QtdFinalizadas": 1371,
      "QtdAbandonadas": 34071
    },
    {
      "Dat_Referencia": "2017-06-28 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 57405,
      "QtdFinalizadas": 1549,
      "QtdAbandonadas": 27945
    },
    {
      "Dat_Referencia": "2017-06-29 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 52542,
      "QtdFinalizadas": 1569,
      "QtdAbandonadas": 24515
    },
    {
      "Dat_Referencia": "2017-06-30 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 49362,
      "QtdFinalizadas": 1114,
      "QtdAbandonadas": 23846
    },
    {
      "Dat_Referencia": "2017-07-01 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 34973,
      "QtdFinalizadas": 1030,
      "QtdAbandonadas": 17816
    },
    {
      "Dat_Referencia": "2017-07-02 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 21110,
      "QtdFinalizadas": 857,
      "QtdAbandonadas": 10183
    },
    {
      "Dat_Referencia": "2017-07-03 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 70336,
      "QtdFinalizadas": 1536,
      "QtdAbandonadas": 44100
    },
    {
      "Dat_Referencia": "2017-07-04 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 60357,
      "QtdFinalizadas": 2116,
      "QtdAbandonadas": 34542
    },
    {
      "Dat_Referencia": "2017-07-05 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 58054,
      "QtdFinalizadas": 1405,
      "QtdAbandonadas": 31800
    },
    {
      "Dat_Referencia": "2017-07-06 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 60503,
      "QtdFinalizadas": 1161,
      "QtdAbandonadas": 29756
    },
    {
      "Dat_Referencia": "2017-07-07 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 52591,
      "QtdFinalizadas": 1362,
      "QtdAbandonadas": 26472
    },
    {
      "Dat_Referencia": "2017-07-08 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 38746,
      "QtdFinalizadas": 1209,
      "QtdAbandonadas": 20565
    },
    {
      "Dat_Referencia": "2017-07-09 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 21858,
      "QtdFinalizadas": 848,
      "QtdAbandonadas": 9741
    },
    {
      "Dat_Referencia": "2017-07-10 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 74224,
      "QtdFinalizadas": 1802,
      "QtdAbandonadas": 41886
    },
    {
      "Dat_Referencia": "2017-07-11 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 64316,
      "QtdFinalizadas": 1624,
      "QtdAbandonadas": 42218
    },
    {
      "Dat_Referencia": "2017-07-12 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 68058,
      "QtdFinalizadas": 1478,
      "QtdAbandonadas": 33029
    },
    {
      "Dat_Referencia": "2017-07-13 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 61184,
      "QtdFinalizadas": 1625,
      "QtdAbandonadas": 27625
    },
    {
      "Dat_Referencia": "2017-07-14 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 50763,
      "QtdFinalizadas": 1284,
      "QtdAbandonadas": 23615
    },
    {
      "Dat_Referencia": "2017-07-15 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 34423,
      "QtdFinalizadas": 926,
      "QtdAbandonadas": 15305
    },
    {
      "Dat_Referencia": "2017-07-16 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 22682,
      "QtdFinalizadas": 1798,
      "QtdAbandonadas": 11063
    },
    {
      "Dat_Referencia": "2017-07-17 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 61731,
      "QtdFinalizadas": 2016,
      "QtdAbandonadas": 28779
    },
    {
      "Dat_Referencia": "2017-07-18 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 60166,
      "QtdFinalizadas": 1928,
      "QtdAbandonadas": 32880
    },
    {
      "Dat_Referencia": "2017-07-19 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 58289,
      "QtdFinalizadas": 2396,
      "QtdAbandonadas": 27599
    },
    {
      "Dat_Referencia": "2017-07-20 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 55390,
      "QtdFinalizadas": 2136,
      "QtdAbandonadas": 26781
    },
    {
      "Dat_Referencia": "2017-07-21 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 50533,
      "QtdFinalizadas": 1811,
      "QtdAbandonadas": 24531
    },
    {
      "Dat_Referencia": "2017-07-22 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 33485,
      "QtdFinalizadas": 984,
      "QtdAbandonadas": 15609
    },
    {
      "Dat_Referencia": "2017-07-23 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 22463,
      "QtdFinalizadas": 603,
      "QtdAbandonadas": 9773
    },
    {
      "Dat_Referencia": "2017-07-24 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 68389,
      "QtdFinalizadas": 1665,
      "QtdAbandonadas": 39168
    },
    {
      "Dat_Referencia": "2017-07-25 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 58156,
      "QtdFinalizadas": 2448,
      "QtdAbandonadas": 42055
    },
    {
      "Dat_Referencia": "2017-07-26 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 56585,
      "QtdFinalizadas": 2445,
      "QtdAbandonadas": 36394
    },
    {
      "Dat_Referencia": "2017-07-27 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 52829,
      "QtdFinalizadas": 2137,
      "QtdAbandonadas": 33055
    },
    {
      "Dat_Referencia": "2017-07-28 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 46608,
      "QtdFinalizadas": 1864,
      "QtdAbandonadas": 29763
    },
    {
      "Dat_Referencia": "2017-07-29 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 31620,
      "QtdFinalizadas": 1020,
      "QtdAbandonadas": 19234
    },
    {
      "Dat_Referencia": "2017-07-30 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 18421,
      "QtdFinalizadas": 644,
      "QtdAbandonadas": 11178
    },
    {
      "Dat_Referencia": "2017-07-31 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 62797,
      "QtdFinalizadas": 2498,
      "QtdAbandonadas": 44301
    },
    {
      "Dat_Referencia": "2017-08-01 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 78217,
      "QtdFinalizadas": 1980,
      "QtdAbandonadas": 60676
    },
    {
      "Dat_Referencia": "2017-08-02 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 70034,
      "QtdFinalizadas": 1684,
      "QtdAbandonadas": 47171
    },
    {
      "Dat_Referencia": "2017-08-03 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 63867,
      "QtdFinalizadas": 1664,
      "QtdAbandonadas": 38812
    },
    {
      "Dat_Referencia": "2017-08-04 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 56556,
      "QtdFinalizadas": 1988,
      "QtdAbandonadas": 36181
    },
    {
      "Dat_Referencia": "2017-08-05 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 38262,
      "QtdFinalizadas": 1353,
      "QtdAbandonadas": 23809
    },
    {
      "Dat_Referencia": "2017-08-06 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 21267,
      "QtdFinalizadas": 830,
      "QtdAbandonadas": 13767
    },
    {
      "Dat_Referencia": "2017-08-07 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 66216,
      "QtdFinalizadas": 1451,
      "QtdAbandonadas": 39776
    },
    {
      "Dat_Referencia": "2017-08-08 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 69021,
      "QtdFinalizadas": 3514,
      "QtdAbandonadas": 58658
    },
    {
      "Dat_Referencia": "2017-08-09 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 67030,
      "QtdFinalizadas": 2450,
      "QtdAbandonadas": 50453
    },
    {
      "Dat_Referencia": "2017-08-10 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 64072,
      "QtdFinalizadas": 1704,
      "QtdAbandonadas": 39011
    },
    {
      "Dat_Referencia": "2017-08-11 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 55938,
      "QtdFinalizadas": 1723,
      "QtdAbandonadas": 35847
    },
    {
      "Dat_Referencia": "2017-08-12 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 36860,
      "QtdFinalizadas": 1266,
      "QtdAbandonadas": 22933
    },
    {
      "Dat_Referencia": "2017-08-13 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 19279,
      "QtdFinalizadas": 822,
      "QtdAbandonadas": 12942
    },
    {
      "Dat_Referencia": "2017-08-14 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 66480,
      "QtdFinalizadas": 1686,
      "QtdAbandonadas": 41417
    },
    {
      "Dat_Referencia": "2017-08-15 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 61464,
      "QtdFinalizadas": 1718,
      "QtdAbandonadas": 36211
    },
    {
      "Dat_Referencia": "2017-08-16 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 68017,
      "QtdFinalizadas": 3083,
      "QtdAbandonadas": 49012
    },
    {
      "Dat_Referencia": "2017-08-17 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 59240,
      "QtdFinalizadas": 2057,
      "QtdAbandonadas": 36244
    },
    {
      "Dat_Referencia": "2017-08-18 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 52337,
      "QtdFinalizadas": 1571,
      "QtdAbandonadas": 31983
    },
    {
      "Dat_Referencia": "2017-08-19 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 36175,
      "QtdFinalizadas": 1396,
      "QtdAbandonadas": 22046
    },
    {
      "Dat_Referencia": "2017-08-20 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 23713,
      "QtdFinalizadas": 1120,
      "QtdAbandonadas": 14045
    },
    {
      "Dat_Referencia": "2017-08-21 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 65982,
      "QtdFinalizadas": 2072,
      "QtdAbandonadas": 39242
    },
    {
      "Dat_Referencia": "2017-08-22 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 63436,
      "QtdFinalizadas": 2386,
      "QtdAbandonadas": 47399
    },
    {
      "Dat_Referencia": "2017-08-23 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 60839,
      "QtdFinalizadas": 1723,
      "QtdAbandonadas": 38545
    },
    {
      "Dat_Referencia": "2017-08-24 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 58372,
      "QtdFinalizadas": 2174,
      "QtdAbandonadas": 36763
    },
    {
      "Dat_Referencia": "2017-08-25 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 52369,
      "QtdFinalizadas": 1084,
      "QtdAbandonadas": 58359
    },
    {
      "Dat_Referencia": "2017-08-26 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 38270,
      "QtdFinalizadas": 1700,
      "QtdAbandonadas": 24049
    },
    {
      "Dat_Referencia": "2017-08-27 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 20308,
      "QtdFinalizadas": 1364,
      "QtdAbandonadas": 13670
    },
    {
      "Dat_Referencia": "2017-08-28 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 72862,
      "QtdFinalizadas": 2184,
      "QtdAbandonadas": 49937
    },
    {
      "Dat_Referencia": "2017-08-29 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 54266,
      "QtdFinalizadas": 1438,
      "QtdAbandonadas": 35902
    },
    {
      "Dat_Referencia": "2017-08-30 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 64845,
      "QtdFinalizadas": 1008,
      "QtdAbandonadas": 42160
    },
    {
      "Dat_Referencia": "2017-08-31 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 76553,
      "QtdFinalizadas": 891,
      "QtdAbandonadas": 61765
    },
    {
      "Dat_Referencia": "2017-09-01 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 64078,
      "QtdFinalizadas": 3249,
      "QtdAbandonadas": 48364
    },
    {
      "Dat_Referencia": "2017-09-02 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 41256,
      "QtdFinalizadas": 1635,
      "QtdAbandonadas": 28364
    },
    {
      "Dat_Referencia": "2017-09-03 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 22184,
      "QtdFinalizadas": 1085,
      "QtdAbandonadas": 15278
    },
    {
      "Dat_Referencia": "2017-09-04 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 83653,
      "QtdFinalizadas": 1808,
      "QtdAbandonadas": 49402
    },
    {
      "Dat_Referencia": "2017-09-05 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 72102,
      "QtdFinalizadas": 1664,
      "QtdAbandonadas": 43133
    },
    {
      "Dat_Referencia": "2017-09-06 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 73419,
      "QtdFinalizadas": 1588,
      "QtdAbandonadas": 57611
    },
    {
      "Dat_Referencia": "2017-09-07 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 36708,
      "QtdFinalizadas": 1573,
      "QtdAbandonadas": 26718
    },
    {
      "Dat_Referencia": "2017-09-08 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 63485,
      "QtdFinalizadas": 1398,
      "QtdAbandonadas": 45179
    },
    {
      "Dat_Referencia": "2017-09-09 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 41009,
      "QtdFinalizadas": 1596,
      "QtdAbandonadas": 27942
    },
    {
      "Dat_Referencia": "2017-09-10 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 24779,
      "QtdFinalizadas": 1057,
      "QtdAbandonadas": 17086
    },
    {
      "Dat_Referencia": "2017-09-11 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 94031,
      "QtdFinalizadas": 1741,
      "QtdAbandonadas": 66469
    },
    {
      "Dat_Referencia": "2017-09-12 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 74867,
      "QtdFinalizadas": 1724,
      "QtdAbandonadas": 47904
    },
    {
      "Dat_Referencia": "2017-09-13 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 71741,
      "QtdFinalizadas": 2102,
      "QtdAbandonadas": 43779
    },
    {
      "Dat_Referencia": "2017-09-14 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 64933,
      "QtdFinalizadas": 1687,
      "QtdAbandonadas": 38151
    },
    {
      "Dat_Referencia": "2017-09-15 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 59513,
      "QtdFinalizadas": 2081,
      "QtdAbandonadas": 37441
    },
    {
      "Dat_Referencia": "2017-09-16 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 38085,
      "QtdFinalizadas": 1152,
      "QtdAbandonadas": 23847
    },
    {
      "Dat_Referencia": "2017-09-17 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 21555,
      "QtdFinalizadas": 1067,
      "QtdAbandonadas": 14110
    },
    {
      "Dat_Referencia": "2017-09-18 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 73254,
      "QtdFinalizadas": 2107,
      "QtdAbandonadas": 48135
    },
    {
      "Dat_Referencia": "2017-09-19 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 68329,
      "QtdFinalizadas": 2061,
      "QtdAbandonadas": 41288
    },
    {
      "Dat_Referencia": "2017-09-20 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 58601,
      "QtdFinalizadas": 2382,
      "QtdAbandonadas": 37214
    },
    {
      "Dat_Referencia": "2017-09-21 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 56476,
      "QtdFinalizadas": 1823,
      "QtdAbandonadas": 34825
    },
    {
      "Dat_Referencia": "2017-09-22 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 50597,
      "QtdFinalizadas": 1898,
      "QtdAbandonadas": 32699
    },
    {
      "Dat_Referencia": "2017-09-23 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 35691,
      "QtdFinalizadas": 1395,
      "QtdAbandonadas": 23444
    },
    {
      "Dat_Referencia": "2017-09-24 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 21671,
      "QtdFinalizadas": 673,
      "QtdAbandonadas": 13491
    },
    {
      "Dat_Referencia": "2017-09-25 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 72679,
      "QtdFinalizadas": 2032,
      "QtdAbandonadas": 58848
    },
    {
      "Dat_Referencia": "2017-09-26 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 66007,
      "QtdFinalizadas": 1945,
      "QtdAbandonadas": 46643
    },
    {
      "Dat_Referencia": "2017-09-27 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 59429,
      "QtdFinalizadas": 2304,
      "QtdAbandonadas": 40441
    },
    {
      "Dat_Referencia": "2017-09-28 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 58842,
      "QtdFinalizadas": 2312,
      "QtdAbandonadas": 48576
    },
    {
      "Dat_Referencia": "2017-09-29 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 53327,
      "QtdFinalizadas": 1889,
      "QtdAbandonadas": 41559
    },
    {
      "Dat_Referencia": "2017-09-30 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 40909,
      "QtdFinalizadas": 2174,
      "QtdAbandonadas": 31488
    },
    {
      "Dat_Referencia": "2017-10-01 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 26452,
      "QtdFinalizadas": 1331,
      "QtdAbandonadas": 19548
    },
    {
      "Dat_Referencia": "2017-10-02 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 79312,
      "QtdFinalizadas": 3342,
      "QtdAbandonadas": 80455
    },
    {
      "Dat_Referencia": "2017-10-03 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 75917,
      "QtdFinalizadas": 2757,
      "QtdAbandonadas": 65259
    },
    {
      "Dat_Referencia": "2017-10-04 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 71040,
      "QtdFinalizadas": 2336,
      "QtdAbandonadas": 52295
    },
    {
      "Dat_Referencia": "2017-10-05 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 70435,
      "QtdFinalizadas": 3236,
      "QtdAbandonadas": 51270
    },
    {
      "Dat_Referencia": "2017-10-06 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 65634,
      "QtdFinalizadas": 2061,
      "QtdAbandonadas": 48696
    },
    {
      "Dat_Referencia": "2017-10-07 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 45331,
      "QtdFinalizadas": 1434,
      "QtdAbandonadas": 31048
    },
    {
      "Dat_Referencia": "2017-10-08 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 25710,
      "QtdFinalizadas": 1214,
      "QtdAbandonadas": 17970
    },
    {
      "Dat_Referencia": "2017-10-09 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 83690,
      "QtdFinalizadas": 2720,
      "QtdAbandonadas": 66939
    },
    {
      "Dat_Referencia": "2017-10-10 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 82630,
      "QtdFinalizadas": 3247,
      "QtdAbandonadas": 72441
    },
    {
      "Dat_Referencia": "2017-10-11 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 69232,
      "QtdFinalizadas": 2756,
      "QtdAbandonadas": 49741
    },
    {
      "Dat_Referencia": "2017-10-12 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 35124,
      "QtdFinalizadas": 2520,
      "QtdAbandonadas": 25141
    },
    {
      "Dat_Referencia": "2017-10-13 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 63146,
      "QtdFinalizadas": 2348,
      "QtdAbandonadas": 46119
    },
    {
      "Dat_Referencia": "2017-10-14 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 38750,
      "QtdFinalizadas": 1884,
      "QtdAbandonadas": 26952
    },
    {
      "Dat_Referencia": "2017-10-15 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 24802,
      "QtdFinalizadas": 1588,
      "QtdAbandonadas": 17292
    },
    {
      "Dat_Referencia": "2017-10-16 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 76680,
      "QtdFinalizadas": 3540,
      "QtdAbandonadas": 51745
    },
    {
      "Dat_Referencia": "2017-10-17 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 77041,
      "QtdFinalizadas": 3325,
      "QtdAbandonadas": 59009
    },
    {
      "Dat_Referencia": "2017-10-18 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 69294,
      "QtdFinalizadas": 2893,
      "QtdAbandonadas": 46179
    },
    {
      "Dat_Referencia": "2017-10-19 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 60310,
      "QtdFinalizadas": 2719,
      "QtdAbandonadas": 45599
    },
    {
      "Dat_Referencia": "2017-10-20 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 57700,
      "QtdFinalizadas": 3726,
      "QtdAbandonadas": 39370
    },
    {
      "Dat_Referencia": "2017-10-21 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 40224,
      "QtdFinalizadas": 1902,
      "QtdAbandonadas": 27334
    },
    {
      "Dat_Referencia": "2017-10-22 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 26863,
      "QtdFinalizadas": 1212,
      "QtdAbandonadas": 17299
    },
    {
      "Dat_Referencia": "2017-10-23 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 76662,
      "QtdFinalizadas": 2305,
      "QtdAbandonadas": 66826
    },
    {
      "Dat_Referencia": "2017-10-24 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 68293,
      "QtdFinalizadas": 2817,
      "QtdAbandonadas": 49490
    },
    {
      "Dat_Referencia": "2017-10-25 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 67953,
      "QtdFinalizadas": 2472,
      "QtdAbandonadas": 44468
    },
    {
      "Dat_Referencia": "2017-10-26 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 63884,
      "QtdFinalizadas": 2889,
      "QtdAbandonadas": 43390
    },
    {
      "Dat_Referencia": "2017-10-27 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 58061,
      "QtdFinalizadas": 3041,
      "QtdAbandonadas": 38901
    },
    {
      "Dat_Referencia": "2017-10-28 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 46757,
      "QtdFinalizadas": 2895,
      "QtdAbandonadas": 31639
    },
    {
      "Dat_Referencia": "2017-10-29 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 26712,
      "QtdFinalizadas": 1620,
      "QtdAbandonadas": 18046
    },
    {
      "Dat_Referencia": "2017-10-30 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 74042,
      "QtdFinalizadas": 2749,
      "QtdAbandonadas": 57610
    },
    {
      "Dat_Referencia": "2017-10-31 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 79579,
      "QtdFinalizadas": 2578,
      "QtdAbandonadas": 73988
    },
    {
      "Dat_Referencia": "2017-11-01 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 70088,
      "QtdFinalizadas": 2055,
      "QtdAbandonadas": 56956
    },
    {
      "Dat_Referencia": "2017-11-02 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 42817,
      "QtdFinalizadas": 917,
      "QtdAbandonadas": 27199
    },
    {
      "Dat_Referencia": "2017-11-03 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 67128,
      "QtdFinalizadas": 2592,
      "QtdAbandonadas": 50435
    },
    {
      "Dat_Referencia": "2017-11-04 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 43116,
      "QtdFinalizadas": 2691,
      "QtdAbandonadas": 30969
    },
    {
      "Dat_Referencia": "2017-11-05 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 27574,
      "QtdFinalizadas": 1081,
      "QtdAbandonadas": 19130
    },
    {
      "Dat_Referencia": "2017-11-06 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 76635,
      "QtdFinalizadas": 2362,
      "QtdAbandonadas": 54508
    },
    {
      "Dat_Referencia": "2017-11-07 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 82794,
      "QtdFinalizadas": 2436,
      "QtdAbandonadas": 76743
    },
    {
      "Dat_Referencia": "2017-11-08 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 74898,
      "QtdFinalizadas": 2417,
      "QtdAbandonadas": 60913
    },
    {
      "Dat_Referencia": "2017-11-09 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 71303,
      "QtdFinalizadas": 2200,
      "QtdAbandonadas": 59279
    },
    {
      "Dat_Referencia": "2017-11-10 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 59161,
      "QtdFinalizadas": 2020,
      "QtdAbandonadas": 44497
    },
    {
      "Dat_Referencia": "2017-11-11 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 44156,
      "QtdFinalizadas": 1658,
      "QtdAbandonadas": 30532
    },
    {
      "Dat_Referencia": "2017-11-12 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 25766,
      "QtdFinalizadas": 1135,
      "QtdAbandonadas": 17142
    },
    {
      "Dat_Referencia": "2017-11-13 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 67969,
      "QtdFinalizadas": 2694,
      "QtdAbandonadas": 47060
    },
    {
      "Dat_Referencia": "2017-11-14 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 61280,
      "QtdFinalizadas": 2640,
      "QtdAbandonadas": 41023
    },
    {
      "Dat_Referencia": "2017-11-15 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 38188,
      "QtdFinalizadas": 2554,
      "QtdAbandonadas": 25380
    },
    {
      "Dat_Referencia": "2017-11-16 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 65871,
      "QtdFinalizadas": 3338,
      "QtdAbandonadas": 46685
    },
    {
      "Dat_Referencia": "2017-11-17 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 57507,
      "QtdFinalizadas": 2540,
      "QtdAbandonadas": 39282
    },
    {
      "Dat_Referencia": "2017-11-18 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 41542,
      "QtdFinalizadas": 1632,
      "QtdAbandonadas": 27491
    },
    {
      "Dat_Referencia": "2017-11-19 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 26676,
      "QtdFinalizadas": 819,
      "QtdAbandonadas": 15798
    },
    {
      "Dat_Referencia": "2017-11-20 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 67552,
      "QtdFinalizadas": 2456,
      "QtdAbandonadas": 50730
    },
    {
      "Dat_Referencia": "2017-11-21 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 65996,
      "QtdFinalizadas": 2423,
      "QtdAbandonadas": 71884
    },
    {
      "Dat_Referencia": "2017-11-22 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 71068,
      "QtdFinalizadas": 3602,
      "QtdAbandonadas": 45329
    },
    {
      "Dat_Referencia": "2017-11-23 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 70399,
      "QtdFinalizadas": 3616,
      "QtdAbandonadas": 63595
    },
    {
      "Dat_Referencia": "2017-11-24 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 58169,
      "QtdFinalizadas": 2744,
      "QtdAbandonadas": 45817
    },
    {
      "Dat_Referencia": "2017-11-25 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 41959,
      "QtdFinalizadas": 2210,
      "QtdAbandonadas": 30020
    },
    {
      "Dat_Referencia": "2017-11-26 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 27102,
      "QtdFinalizadas": 1323,
      "QtdAbandonadas": 19845
    },
    {
      "Dat_Referencia": "2017-11-27 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 69477,
      "QtdFinalizadas": 3147,
      "QtdAbandonadas": 52034
    },
    {
      "Dat_Referencia": "2017-11-28 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 66421,
      "QtdFinalizadas": 3265,
      "QtdAbandonadas": 46523
    },
    {
      "Dat_Referencia": "2017-11-29 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 69716,
      "QtdFinalizadas": 2780,
      "QtdAbandonadas": 58383
    },
    {
      "Dat_Referencia": "2017-11-30 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 68380,
      "QtdFinalizadas": 3181,
      "QtdAbandonadas": 55162
    },
    {
      "Dat_Referencia": "2017-12-01 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 63913,
      "QtdFinalizadas": 1843,
      "QtdAbandonadas": 49659
    },
    {
      "Dat_Referencia": "2017-12-02 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 45289,
      "QtdFinalizadas": 1457,
      "QtdAbandonadas": 31908
    },
    {
      "Dat_Referencia": "2017-12-03 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 26919,
      "QtdFinalizadas": 783,
      "QtdAbandonadas": 19010
    },
    {
      "Dat_Referencia": "2017-12-04 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 78313,
      "QtdFinalizadas": 2460,
      "QtdAbandonadas": 58384
    },
    {
      "Dat_Referencia": "2017-12-05 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 75965,
      "QtdFinalizadas": 2192,
      "QtdAbandonadas": 65066
    },
    {
      "Dat_Referencia": "2017-12-06 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 71700,
      "QtdFinalizadas": 2702,
      "QtdAbandonadas": 54953
    },
    {
      "Dat_Referencia": "2017-12-07 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 67141,
      "QtdFinalizadas": 2317,
      "QtdAbandonadas": 49911
    },
    {
      "Dat_Referencia": "2017-12-08 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 58560,
      "QtdFinalizadas": 2064,
      "QtdAbandonadas": 42645
    },
    {
      "Dat_Referencia": "2017-12-09 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 44641,
      "QtdFinalizadas": 1652,
      "QtdAbandonadas": 31491
    },
    {
      "Dat_Referencia": "2017-12-10 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 27348,
      "QtdFinalizadas": 1857,
      "QtdAbandonadas": 18939
    },
    {
      "Dat_Referencia": "2017-12-11 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 81524,
      "QtdFinalizadas": 7366,
      "QtdAbandonadas": 68940
    },
    {
      "Dat_Referencia": "2017-12-12 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 73606,
      "QtdFinalizadas": 4443,
      "QtdAbandonadas": 63193
    },
    {
      "Dat_Referencia": "2017-12-13 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 69884,
      "QtdFinalizadas": 2926,
      "QtdAbandonadas": 50550
    },
    {
      "Dat_Referencia": "2017-12-14 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 61126,
      "QtdFinalizadas": 2444,
      "QtdAbandonadas": 40300
    },
    {
      "Dat_Referencia": "2017-12-15 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 54551,
      "QtdFinalizadas": 2624,
      "QtdAbandonadas": 37233
    },
    {
      "Dat_Referencia": "2017-12-16 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 38127,
      "QtdFinalizadas": 2498,
      "QtdAbandonadas": 26015
    },
    {
      "Dat_Referencia": "2017-12-17 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 24124,
      "QtdFinalizadas": 1597,
      "QtdAbandonadas": 17049
    },
    {
      "Dat_Referencia": "2017-12-18 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 67625,
      "QtdFinalizadas": 4700,
      "QtdAbandonadas": 45593
    },
    {
      "Dat_Referencia": "2017-12-19 00:00:00.000",
      "Grupo": "Oi Total",
      "QtdDerivadas": 62607,
      "QtdFinalizadas": 2882,
      "QtdAbandonadas": 43065
    },
    {
      "Dat_Referencia": "2017-01-01 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 40514,
      "QtdFinalizadas": 19229,
      "QtdAbandonadas": 27240
    },
    {
      "Dat_Referencia": "2017-01-02 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 226513,
      "QtdFinalizadas": 71965,
      "QtdAbandonadas": 125835
    },
    {
      "Dat_Referencia": "2017-01-03 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 220194,
      "QtdFinalizadas": 75106,
      "QtdAbandonadas": 114818
    },
    {
      "Dat_Referencia": "2017-01-04 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 223921,
      "QtdFinalizadas": 75966,
      "QtdAbandonadas": 153826
    },
    {
      "Dat_Referencia": "2017-01-05 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 219668,
      "QtdFinalizadas": 74029,
      "QtdAbandonadas": 117441
    },
    {
      "Dat_Referencia": "2017-01-06 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 196629,
      "QtdFinalizadas": 65724,
      "QtdAbandonadas": 104361
    },
    {
      "Dat_Referencia": "2017-01-07 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 126844,
      "QtdFinalizadas": 40493,
      "QtdAbandonadas": 66177
    },
    {
      "Dat_Referencia": "2017-01-08 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 66119,
      "QtdFinalizadas": 24720,
      "QtdAbandonadas": 37989
    },
    {
      "Dat_Referencia": "2017-01-09 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 242228,
      "QtdFinalizadas": 77503,
      "QtdAbandonadas": 128129
    },
    {
      "Dat_Referencia": "2017-01-10 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 268761,
      "QtdFinalizadas": 91173,
      "QtdAbandonadas": 154487
    },
    {
      "Dat_Referencia": "2017-01-11 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 234095,
      "QtdFinalizadas": 79503,
      "QtdAbandonadas": 123486
    },
    {
      "Dat_Referencia": "2017-01-12 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 212162,
      "QtdFinalizadas": 73265,
      "QtdAbandonadas": 114450
    },
    {
      "Dat_Referencia": "2017-01-13 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 197501,
      "QtdFinalizadas": 67055,
      "QtdAbandonadas": 104416
    },
    {
      "Dat_Referencia": "2017-01-14 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 123863,
      "QtdFinalizadas": 40266,
      "QtdAbandonadas": 64802
    },
    {
      "Dat_Referencia": "2017-01-15 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 67706,
      "QtdFinalizadas": 21923,
      "QtdAbandonadas": 38483
    },
    {
      "Dat_Referencia": "2017-01-16 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 223206,
      "QtdFinalizadas": 72456,
      "QtdAbandonadas": 124810
    },
    {
      "Dat_Referencia": "2017-01-17 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 216141,
      "QtdFinalizadas": 70473,
      "QtdAbandonadas": 116813
    },
    {
      "Dat_Referencia": "2017-01-18 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 193568,
      "QtdFinalizadas": 65054,
      "QtdAbandonadas": 122291
    },
    {
      "Dat_Referencia": "2017-01-19 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 182442,
      "QtdFinalizadas": 56702,
      "QtdAbandonadas": 99469
    },
    {
      "Dat_Referencia": "2017-01-20 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 171707,
      "QtdFinalizadas": 53743,
      "QtdAbandonadas": 91711
    },
    {
      "Dat_Referencia": "2017-01-21 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 118598,
      "QtdFinalizadas": 37956,
      "QtdAbandonadas": 64519
    },
    {
      "Dat_Referencia": "2017-01-22 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 62465,
      "QtdFinalizadas": 24392,
      "QtdAbandonadas": 38526
    },
    {
      "Dat_Referencia": "2017-01-23 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 213301,
      "QtdFinalizadas": 65919,
      "QtdAbandonadas": 121291
    },
    {
      "Dat_Referencia": "2017-01-24 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 193094,
      "QtdFinalizadas": 64442,
      "QtdAbandonadas": 107822
    },
    {
      "Dat_Referencia": "2017-01-25 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 199214,
      "QtdFinalizadas": 65347,
      "QtdAbandonadas": 107542
    },
    {
      "Dat_Referencia": "2017-01-26 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 191615,
      "QtdFinalizadas": 67661,
      "QtdAbandonadas": 118317
    },
    {
      "Dat_Referencia": "2017-01-27 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 178593,
      "QtdFinalizadas": 58848,
      "QtdAbandonadas": 92017
    },
    {
      "Dat_Referencia": "2017-01-28 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 118864,
      "QtdFinalizadas": 38250,
      "QtdAbandonadas": 62015
    },
    {
      "Dat_Referencia": "2017-01-29 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 67556,
      "QtdFinalizadas": 27212,
      "QtdAbandonadas": 38826
    },
    {
      "Dat_Referencia": "2017-01-30 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 224226,
      "QtdFinalizadas": 74717,
      "QtdAbandonadas": 117044
    },
    {
      "Dat_Referencia": "2017-01-31 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 219735,
      "QtdFinalizadas": 71009,
      "QtdAbandonadas": 112381
    },
    {
      "Dat_Referencia": "2017-02-01 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 240633,
      "QtdFinalizadas": 74295,
      "QtdAbandonadas": 133881
    },
    {
      "Dat_Referencia": "2017-02-02 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 224376,
      "QtdFinalizadas": 76750,
      "QtdAbandonadas": 122726
    },
    {
      "Dat_Referencia": "2017-02-03 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 207958,
      "QtdFinalizadas": 69328,
      "QtdAbandonadas": 108944
    },
    {
      "Dat_Referencia": "2017-02-04 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 134473,
      "QtdFinalizadas": 44537,
      "QtdAbandonadas": 69177
    },
    {
      "Dat_Referencia": "2017-02-05 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 72374,
      "QtdFinalizadas": 26007,
      "QtdAbandonadas": 39687
    },
    {
      "Dat_Referencia": "2017-02-06 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 258234,
      "QtdFinalizadas": 82121,
      "QtdAbandonadas": 129707
    },
    {
      "Dat_Referencia": "2017-02-07 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 252677,
      "QtdFinalizadas": 76644,
      "QtdAbandonadas": 144708
    },
    {
      "Dat_Referencia": "2017-02-08 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 241744,
      "QtdFinalizadas": 69889,
      "QtdAbandonadas": 120041
    },
    {
      "Dat_Referencia": "2017-02-09 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 236146,
      "QtdFinalizadas": 77346,
      "QtdAbandonadas": 120806
    },
    {
      "Dat_Referencia": "2017-02-10 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 216320,
      "QtdFinalizadas": 72247,
      "QtdAbandonadas": 109002
    },
    {
      "Dat_Referencia": "2017-02-11 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 132883,
      "QtdFinalizadas": 44100,
      "QtdAbandonadas": 68679
    },
    {
      "Dat_Referencia": "2017-02-12 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 68222,
      "QtdFinalizadas": 26480,
      "QtdAbandonadas": 42205
    },
    {
      "Dat_Referencia": "2017-02-13 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 240166,
      "QtdFinalizadas": 76746,
      "QtdAbandonadas": 122586
    },
    {
      "Dat_Referencia": "2017-02-14 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 213535,
      "QtdFinalizadas": 67395,
      "QtdAbandonadas": 109034
    },
    {
      "Dat_Referencia": "2017-02-15 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 217117,
      "QtdFinalizadas": 66928,
      "QtdAbandonadas": 109923
    },
    {
      "Dat_Referencia": "2017-02-16 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 213275,
      "QtdFinalizadas": 69608,
      "QtdAbandonadas": 112212
    },
    {
      "Dat_Referencia": "2017-02-17 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 186915,
      "QtdFinalizadas": 58769,
      "QtdAbandonadas": 95545
    },
    {
      "Dat_Referencia": "2017-02-18 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 121954,
      "QtdFinalizadas": 38920,
      "QtdAbandonadas": 63775
    },
    {
      "Dat_Referencia": "2017-02-19 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 65250,
      "QtdFinalizadas": 26983,
      "QtdAbandonadas": 37920
    },
    {
      "Dat_Referencia": "2017-02-20 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 215316,
      "QtdFinalizadas": 71598,
      "QtdAbandonadas": 110763
    },
    {
      "Dat_Referencia": "2017-02-21 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 211900,
      "QtdFinalizadas": 67872,
      "QtdAbandonadas": 108643
    },
    {
      "Dat_Referencia": "2017-02-22 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 204076,
      "QtdFinalizadas": 65371,
      "QtdAbandonadas": 102190
    },
    {
      "Dat_Referencia": "2017-02-23 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 183785,
      "QtdFinalizadas": 60893,
      "QtdAbandonadas": 95873
    },
    {
      "Dat_Referencia": "2017-02-24 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 168027,
      "QtdFinalizadas": 55397,
      "QtdAbandonadas": 97915
    },
    {
      "Dat_Referencia": "2017-02-25 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 101616,
      "QtdFinalizadas": 33421,
      "QtdAbandonadas": 60644
    },
    {
      "Dat_Referencia": "2017-02-26 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 48927,
      "QtdFinalizadas": 20594,
      "QtdAbandonadas": 34089
    },
    {
      "Dat_Referencia": "2017-02-27 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 103195,
      "QtdFinalizadas": 35955,
      "QtdAbandonadas": 61732
    },
    {
      "Dat_Referencia": "2017-02-28 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 79418,
      "QtdFinalizadas": 31030,
      "QtdAbandonadas": 49669
    },
    {
      "Dat_Referencia": "2017-03-01 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 175834,
      "QtdFinalizadas": 58110,
      "QtdAbandonadas": 108699
    },
    {
      "Dat_Referencia": "2017-03-02 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 215773,
      "QtdFinalizadas": 75070,
      "QtdAbandonadas": 130362
    },
    {
      "Dat_Referencia": "2017-03-03 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 218916,
      "QtdFinalizadas": 72426,
      "QtdAbandonadas": 128616
    },
    {
      "Dat_Referencia": "2017-03-04 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 148420,
      "QtdFinalizadas": 48372,
      "QtdAbandonadas": 81964
    },
    {
      "Dat_Referencia": "2017-03-05 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 74088,
      "QtdFinalizadas": 27531,
      "QtdAbandonadas": 44801
    },
    {
      "Dat_Referencia": "2017-03-06 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 234361,
      "QtdFinalizadas": 78898,
      "QtdAbandonadas": 139144
    },
    {
      "Dat_Referencia": "2017-03-07 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 225385,
      "QtdFinalizadas": 81977,
      "QtdAbandonadas": 154875
    },
    {
      "Dat_Referencia": "2017-03-08 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 206884,
      "QtdFinalizadas": 71663,
      "QtdAbandonadas": 124513
    },
    {
      "Dat_Referencia": "2017-03-09 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 196173,
      "QtdFinalizadas": 73982,
      "QtdAbandonadas": 125837
    },
    {
      "Dat_Referencia": "2017-03-10 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 177515,
      "QtdFinalizadas": 63270,
      "QtdAbandonadas": 105065
    },
    {
      "Dat_Referencia": "2017-03-11 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 116712,
      "QtdFinalizadas": 38820,
      "QtdAbandonadas": 67447
    },
    {
      "Dat_Referencia": "2017-03-12 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 60911,
      "QtdFinalizadas": 23351,
      "QtdAbandonadas": 37216
    },
    {
      "Dat_Referencia": "2017-03-13 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 233480,
      "QtdFinalizadas": 74501,
      "QtdAbandonadas": 130727
    },
    {
      "Dat_Referencia": "2017-03-14 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 228532,
      "QtdFinalizadas": 77954,
      "QtdAbandonadas": 125182
    },
    {
      "Dat_Referencia": "2017-03-15 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 210801,
      "QtdFinalizadas": 70169,
      "QtdAbandonadas": 119626
    },
    {
      "Dat_Referencia": "2017-03-16 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 192831,
      "QtdFinalizadas": 68776,
      "QtdAbandonadas": 121951
    },
    {
      "Dat_Referencia": "2017-03-17 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 170381,
      "QtdFinalizadas": 59829,
      "QtdAbandonadas": 131922
    },
    {
      "Dat_Referencia": "2017-03-18 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 121171,
      "QtdFinalizadas": 38723,
      "QtdAbandonadas": 71825
    },
    {
      "Dat_Referencia": "2017-03-19 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 77448,
      "QtdFinalizadas": 27439,
      "QtdAbandonadas": 49041
    },
    {
      "Dat_Referencia": "2017-03-20 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 216139,
      "QtdFinalizadas": 68521,
      "QtdAbandonadas": 128203
    },
    {
      "Dat_Referencia": "2017-03-21 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 198048,
      "QtdFinalizadas": 66579,
      "QtdAbandonadas": 116043
    },
    {
      "Dat_Referencia": "2017-03-22 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 185460,
      "QtdFinalizadas": 59826,
      "QtdAbandonadas": 106991
    },
    {
      "Dat_Referencia": "2017-03-23 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 173270,
      "QtdFinalizadas": 70555,
      "QtdAbandonadas": 91580
    },
    {
      "Dat_Referencia": "2017-03-24 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 161399,
      "QtdFinalizadas": 70683,
      "QtdAbandonadas": 76961
    },
    {
      "Dat_Referencia": "2017-03-25 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 105781,
      "QtdFinalizadas": 50082,
      "QtdAbandonadas": 49481
    },
    {
      "Dat_Referencia": "2017-03-26 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 60429,
      "QtdFinalizadas": 32066,
      "QtdAbandonadas": 30494
    },
    {
      "Dat_Referencia": "2017-03-27 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 184027,
      "QtdFinalizadas": 81104,
      "QtdAbandonadas": 86610
    },
    {
      "Dat_Referencia": "2017-03-28 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 181395,
      "QtdFinalizadas": 81453,
      "QtdAbandonadas": 84858
    },
    {
      "Dat_Referencia": "2017-03-29 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 191049,
      "QtdFinalizadas": 80328,
      "QtdAbandonadas": 85104
    },
    {
      "Dat_Referencia": "2017-03-30 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 175829,
      "QtdFinalizadas": 81478,
      "QtdAbandonadas": 94648
    },
    {
      "Dat_Referencia": "2017-03-31 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 169927,
      "QtdFinalizadas": 72546,
      "QtdAbandonadas": 79866
    },
    {
      "Dat_Referencia": "2017-04-01 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 113559,
      "QtdFinalizadas": 51356,
      "QtdAbandonadas": 54799
    },
    {
      "Dat_Referencia": "2017-04-02 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 62952,
      "QtdFinalizadas": 32629,
      "QtdAbandonadas": 31400
    },
    {
      "Dat_Referencia": "2017-04-03 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 204259,
      "QtdFinalizadas": 90225,
      "QtdAbandonadas": 88414
    },
    {
      "Dat_Referencia": "2017-04-04 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 204130,
      "QtdFinalizadas": 95409,
      "QtdAbandonadas": 88987
    },
    {
      "Dat_Referencia": "2017-04-05 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 194374,
      "QtdFinalizadas": 87044,
      "QtdAbandonadas": 86714
    },
    {
      "Dat_Referencia": "2017-04-06 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 192422,
      "QtdFinalizadas": 87836,
      "QtdAbandonadas": 85948
    },
    {
      "Dat_Referencia": "2017-04-07 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 185781,
      "QtdFinalizadas": 83909,
      "QtdAbandonadas": 82476
    },
    {
      "Dat_Referencia": "2017-04-08 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 121553,
      "QtdFinalizadas": 53878,
      "QtdAbandonadas": 54554
    },
    {
      "Dat_Referencia": "2017-04-09 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 61559,
      "QtdFinalizadas": 32013,
      "QtdAbandonadas": 31197
    },
    {
      "Dat_Referencia": "2017-04-10 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 201280,
      "QtdFinalizadas": 86771,
      "QtdAbandonadas": 91940
    },
    {
      "Dat_Referencia": "2017-04-11 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 194614,
      "QtdFinalizadas": 102284,
      "QtdAbandonadas": 97779
    },
    {
      "Dat_Referencia": "2017-04-12 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 178124,
      "QtdFinalizadas": 79963,
      "QtdAbandonadas": 85372
    },
    {
      "Dat_Referencia": "2017-04-13 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 154335,
      "QtdFinalizadas": 68246,
      "QtdAbandonadas": 72276
    },
    {
      "Dat_Referencia": "2017-04-14 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 76846,
      "QtdFinalizadas": 41937,
      "QtdAbandonadas": 38435
    },
    {
      "Dat_Referencia": "2017-04-15 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 96336,
      "QtdFinalizadas": 43338,
      "QtdAbandonadas": 44974
    },
    {
      "Dat_Referencia": "2017-04-16 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 50831,
      "QtdFinalizadas": 25683,
      "QtdAbandonadas": 27134
    },
    {
      "Dat_Referencia": "2017-04-17 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 213318,
      "QtdFinalizadas": 80427,
      "QtdAbandonadas": 95737
    },
    {
      "Dat_Referencia": "2017-04-18 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 185930,
      "QtdFinalizadas": 81163,
      "QtdAbandonadas": 85356
    },
    {
      "Dat_Referencia": "2017-04-19 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 166875,
      "QtdFinalizadas": 70833,
      "QtdAbandonadas": 81680
    },
    {
      "Dat_Referencia": "2017-04-20 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 152042,
      "QtdFinalizadas": 68055,
      "QtdAbandonadas": 76297
    },
    {
      "Dat_Referencia": "2017-04-21 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 89474,
      "QtdFinalizadas": 40068,
      "QtdAbandonadas": 42546
    },
    {
      "Dat_Referencia": "2017-04-22 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 97624,
      "QtdFinalizadas": 46343,
      "QtdAbandonadas": 45024
    },
    {
      "Dat_Referencia": "2017-04-23 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 53826,
      "QtdFinalizadas": 28408,
      "QtdAbandonadas": 28377
    },
    {
      "Dat_Referencia": "2017-04-24 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 178069,
      "QtdFinalizadas": 83160,
      "QtdAbandonadas": 82433
    },
    {
      "Dat_Referencia": "2017-04-25 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 167867,
      "QtdFinalizadas": 82093,
      "QtdAbandonadas": 80871
    },
    {
      "Dat_Referencia": "2017-04-26 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 165428,
      "QtdFinalizadas": 83009,
      "QtdAbandonadas": 78498
    },
    {
      "Dat_Referencia": "2017-04-27 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 166255,
      "QtdFinalizadas": 74460,
      "QtdAbandonadas": 78171
    },
    {
      "Dat_Referencia": "2017-04-28 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 135362,
      "QtdFinalizadas": 64463,
      "QtdAbandonadas": 83505
    },
    {
      "Dat_Referencia": "2017-04-29 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 106649,
      "QtdFinalizadas": 49165,
      "QtdAbandonadas": 52126
    },
    {
      "Dat_Referencia": "2017-04-30 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 51986,
      "QtdFinalizadas": 29372,
      "QtdAbandonadas": 26377
    },
    {
      "Dat_Referencia": "2017-05-01 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 83388,
      "QtdFinalizadas": 45452,
      "QtdAbandonadas": 40814
    },
    {
      "Dat_Referencia": "2017-05-02 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 182345,
      "QtdFinalizadas": 97382,
      "QtdAbandonadas": 94667
    },
    {
      "Dat_Referencia": "2017-05-03 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 199675,
      "QtdFinalizadas": 104310,
      "QtdAbandonadas": 102509
    },
    {
      "Dat_Referencia": "2017-05-04 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 184327,
      "QtdFinalizadas": 90830,
      "QtdAbandonadas": 83288
    },
    {
      "Dat_Referencia": "2017-05-05 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 170146,
      "QtdFinalizadas": 83345,
      "QtdAbandonadas": 75998
    },
    {
      "Dat_Referencia": "2017-05-06 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 112457,
      "QtdFinalizadas": 58955,
      "QtdAbandonadas": 51304
    },
    {
      "Dat_Referencia": "2017-05-07 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 58595,
      "QtdFinalizadas": 34411,
      "QtdAbandonadas": 28442
    },
    {
      "Dat_Referencia": "2017-05-08 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 202056,
      "QtdFinalizadas": 104939,
      "QtdAbandonadas": 86333
    },
    {
      "Dat_Referencia": "2017-05-09 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 198719,
      "QtdFinalizadas": 108162,
      "QtdAbandonadas": 93444
    },
    {
      "Dat_Referencia": "2017-05-10 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 184778,
      "QtdFinalizadas": 101197,
      "QtdAbandonadas": 93657
    },
    {
      "Dat_Referencia": "2017-05-11 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 179010,
      "QtdFinalizadas": 87816,
      "QtdAbandonadas": 79189
    },
    {
      "Dat_Referencia": "2017-05-12 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 297420,
      "QtdFinalizadas": 67855,
      "QtdAbandonadas": 154048
    },
    {
      "Dat_Referencia": "2017-05-13 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 145765,
      "QtdFinalizadas": 52492,
      "QtdAbandonadas": 81074
    },
    {
      "Dat_Referencia": "2017-05-14 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 57733,
      "QtdFinalizadas": 27381,
      "QtdAbandonadas": 27431
    },
    {
      "Dat_Referencia": "2017-05-15 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 247393,
      "QtdFinalizadas": 97695,
      "QtdAbandonadas": 99623
    },
    {
      "Dat_Referencia": "2017-05-16 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 206903,
      "QtdFinalizadas": 103051,
      "QtdAbandonadas": 98592
    },
    {
      "Dat_Referencia": "2017-05-17 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 171579,
      "QtdFinalizadas": 123950,
      "QtdAbandonadas": 114114
    },
    {
      "Dat_Referencia": "2017-05-18 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 158486,
      "QtdFinalizadas": 70686,
      "QtdAbandonadas": 82276
    },
    {
      "Dat_Referencia": "2017-05-19 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 149811,
      "QtdFinalizadas": 71782,
      "QtdAbandonadas": 83513
    },
    {
      "Dat_Referencia": "2017-05-20 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 105211,
      "QtdFinalizadas": 47965,
      "QtdAbandonadas": 54580
    },
    {
      "Dat_Referencia": "2017-05-21 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 55792,
      "QtdFinalizadas": 27819,
      "QtdAbandonadas": 32287
    },
    {
      "Dat_Referencia": "2017-05-22 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 196738,
      "QtdFinalizadas": 81813,
      "QtdAbandonadas": 103606
    },
    {
      "Dat_Referencia": "2017-05-23 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 175580,
      "QtdFinalizadas": 93045,
      "QtdAbandonadas": 93184
    },
    {
      "Dat_Referencia": "2017-05-24 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 162088,
      "QtdFinalizadas": 77111,
      "QtdAbandonadas": 86259
    },
    {
      "Dat_Referencia": "2017-05-25 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 156238,
      "QtdFinalizadas": 72437,
      "QtdAbandonadas": 75125
    },
    {
      "Dat_Referencia": "2017-05-26 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 146409,
      "QtdFinalizadas": 66409,
      "QtdAbandonadas": 72286
    },
    {
      "Dat_Referencia": "2017-05-27 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 95080,
      "QtdFinalizadas": 47456,
      "QtdAbandonadas": 50746
    },
    {
      "Dat_Referencia": "2017-05-28 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 56378,
      "QtdFinalizadas": 28920,
      "QtdAbandonadas": 29227
    },
    {
      "Dat_Referencia": "2017-05-29 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 185892,
      "QtdFinalizadas": 81025,
      "QtdAbandonadas": 92195
    },
    {
      "Dat_Referencia": "2017-05-30 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 174100,
      "QtdFinalizadas": 81460,
      "QtdAbandonadas": 87554
    },
    {
      "Dat_Referencia": "2017-05-31 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 164794,
      "QtdFinalizadas": 79452,
      "QtdAbandonadas": 82077
    },
    {
      "Dat_Referencia": "2017-06-01 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 166805,
      "QtdFinalizadas": 82855,
      "QtdAbandonadas": 88837
    },
    {
      "Dat_Referencia": "2017-06-02 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 149087,
      "QtdFinalizadas": 71114,
      "QtdAbandonadas": 72393
    },
    {
      "Dat_Referencia": "2017-06-03 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 96567,
      "QtdFinalizadas": 46308,
      "QtdAbandonadas": 49086
    },
    {
      "Dat_Referencia": "2017-06-04 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 54311,
      "QtdFinalizadas": 30330,
      "QtdAbandonadas": 28702
    },
    {
      "Dat_Referencia": "2017-06-05 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 184712,
      "QtdFinalizadas": 94902,
      "QtdAbandonadas": 96129
    },
    {
      "Dat_Referencia": "2017-06-06 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 179055,
      "QtdFinalizadas": 98530,
      "QtdAbandonadas": 97298
    },
    {
      "Dat_Referencia": "2017-06-07 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 183079,
      "QtdFinalizadas": 88482,
      "QtdAbandonadas": 92277
    },
    {
      "Dat_Referencia": "2017-06-08 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 173984,
      "QtdFinalizadas": 82347,
      "QtdAbandonadas": 86363
    },
    {
      "Dat_Referencia": "2017-06-09 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 146468,
      "QtdFinalizadas": 69630,
      "QtdAbandonadas": 75872
    },
    {
      "Dat_Referencia": "2017-06-10 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 96200,
      "QtdFinalizadas": 44699,
      "QtdAbandonadas": 49282
    },
    {
      "Dat_Referencia": "2017-06-11 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 52078,
      "QtdFinalizadas": 27738,
      "QtdAbandonadas": 28640
    },
    {
      "Dat_Referencia": "2017-06-12 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 163247,
      "QtdFinalizadas": 74434,
      "QtdAbandonadas": 84250
    },
    {
      "Dat_Referencia": "2017-06-13 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 171703,
      "QtdFinalizadas": 78231,
      "QtdAbandonadas": 88628
    },
    {
      "Dat_Referencia": "2017-06-14 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 196691,
      "QtdFinalizadas": 91432,
      "QtdAbandonadas": 108208
    },
    {
      "Dat_Referencia": "2017-06-15 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 98482,
      "QtdFinalizadas": 43026,
      "QtdAbandonadas": 51047
    },
    {
      "Dat_Referencia": "2017-06-16 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 153357,
      "QtdFinalizadas": 67811,
      "QtdAbandonadas": 79830
    },
    {
      "Dat_Referencia": "2017-06-17 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 93144,
      "QtdFinalizadas": 40814,
      "QtdAbandonadas": 49660
    },
    {
      "Dat_Referencia": "2017-06-18 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 50862,
      "QtdFinalizadas": 24118,
      "QtdAbandonadas": 28723
    },
    {
      "Dat_Referencia": "2017-06-19 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 172697,
      "QtdFinalizadas": 70596,
      "QtdAbandonadas": 93008
    },
    {
      "Dat_Referencia": "2017-06-20 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 165556,
      "QtdFinalizadas": 77182,
      "QtdAbandonadas": 95129
    },
    {
      "Dat_Referencia": "2017-06-21 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 155054,
      "QtdFinalizadas": 71524,
      "QtdAbandonadas": 87867
    },
    {
      "Dat_Referencia": "2017-06-22 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 142399,
      "QtdFinalizadas": 66174,
      "QtdAbandonadas": 80527
    },
    {
      "Dat_Referencia": "2017-06-23 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 125688,
      "QtdFinalizadas": 57565,
      "QtdAbandonadas": 68096
    },
    {
      "Dat_Referencia": "2017-06-24 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 82131,
      "QtdFinalizadas": 38747,
      "QtdAbandonadas": 43818
    },
    {
      "Dat_Referencia": "2017-06-25 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 47905,
      "QtdFinalizadas": 26512,
      "QtdAbandonadas": 27210
    },
    {
      "Dat_Referencia": "2017-06-26 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 164414,
      "QtdFinalizadas": 72851,
      "QtdAbandonadas": 84848
    },
    {
      "Dat_Referencia": "2017-06-27 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 155018,
      "QtdFinalizadas": 70926,
      "QtdAbandonadas": 82063
    },
    {
      "Dat_Referencia": "2017-06-28 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 155215,
      "QtdFinalizadas": 71652,
      "QtdAbandonadas": 80435
    },
    {
      "Dat_Referencia": "2017-06-29 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 150718,
      "QtdFinalizadas": 68866,
      "QtdAbandonadas": 80982
    },
    {
      "Dat_Referencia": "2017-06-30 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 134197,
      "QtdFinalizadas": 63163,
      "QtdAbandonadas": 82310
    },
    {
      "Dat_Referencia": "2017-07-01 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 96585,
      "QtdFinalizadas": 49585,
      "QtdAbandonadas": 50632
    },
    {
      "Dat_Referencia": "2017-07-02 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 50640,
      "QtdFinalizadas": 29850,
      "QtdAbandonadas": 27658
    },
    {
      "Dat_Referencia": "2017-07-03 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 181602,
      "QtdFinalizadas": 87636,
      "QtdAbandonadas": 93601
    },
    {
      "Dat_Referencia": "2017-07-04 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 167381,
      "QtdFinalizadas": 87997,
      "QtdAbandonadas": 88975
    },
    {
      "Dat_Referencia": "2017-07-05 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 165490,
      "QtdFinalizadas": 80769,
      "QtdAbandonadas": 92040
    },
    {
      "Dat_Referencia": "2017-07-06 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 170222,
      "QtdFinalizadas": 79163,
      "QtdAbandonadas": 83155
    },
    {
      "Dat_Referencia": "2017-07-07 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 149138,
      "QtdFinalizadas": 72513,
      "QtdAbandonadas": 75297
    },
    {
      "Dat_Referencia": "2017-07-08 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 101906,
      "QtdFinalizadas": 46564,
      "QtdAbandonadas": 58467
    },
    {
      "Dat_Referencia": "2017-07-09 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 59012,
      "QtdFinalizadas": 27662,
      "QtdAbandonadas": 32137
    },
    {
      "Dat_Referencia": "2017-07-10 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 200197,
      "QtdFinalizadas": 87115,
      "QtdAbandonadas": 101282
    },
    {
      "Dat_Referencia": "2017-07-11 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 189066,
      "QtdFinalizadas": 89685,
      "QtdAbandonadas": 98340
    },
    {
      "Dat_Referencia": "2017-07-12 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 176701,
      "QtdFinalizadas": 83618,
      "QtdAbandonadas": 91873
    },
    {
      "Dat_Referencia": "2017-07-13 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 166490,
      "QtdFinalizadas": 76583,
      "QtdAbandonadas": 86563
    },
    {
      "Dat_Referencia": "2017-07-14 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 145821,
      "QtdFinalizadas": 65734,
      "QtdAbandonadas": 79663
    },
    {
      "Dat_Referencia": "2017-07-15 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 87579,
      "QtdFinalizadas": 42115,
      "QtdAbandonadas": 49206
    },
    {
      "Dat_Referencia": "2017-07-16 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 50181,
      "QtdFinalizadas": 31625,
      "QtdAbandonadas": 29203
    },
    {
      "Dat_Referencia": "2017-07-17 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 167119,
      "QtdFinalizadas": 78905,
      "QtdAbandonadas": 88704
    },
    {
      "Dat_Referencia": "2017-07-18 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 154142,
      "QtdFinalizadas": 72885,
      "QtdAbandonadas": 85595
    },
    {
      "Dat_Referencia": "2017-07-19 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 150477,
      "QtdFinalizadas": 71309,
      "QtdAbandonadas": 82503
    },
    {
      "Dat_Referencia": "2017-07-20 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 148821,
      "QtdFinalizadas": 68829,
      "QtdAbandonadas": 80390
    },
    {
      "Dat_Referencia": "2017-07-21 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 137845,
      "QtdFinalizadas": 65912,
      "QtdAbandonadas": 75355
    },
    {
      "Dat_Referencia": "2017-07-22 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 86894,
      "QtdFinalizadas": 45527,
      "QtdAbandonadas": 47379
    },
    {
      "Dat_Referencia": "2017-07-23 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 49934,
      "QtdFinalizadas": 29278,
      "QtdAbandonadas": 28107
    },
    {
      "Dat_Referencia": "2017-07-24 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 171274,
      "QtdFinalizadas": 80898,
      "QtdAbandonadas": 89237
    },
    {
      "Dat_Referencia": "2017-07-25 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 152985,
      "QtdFinalizadas": 80751,
      "QtdAbandonadas": 85584
    },
    {
      "Dat_Referencia": "2017-07-26 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 149391,
      "QtdFinalizadas": 76477,
      "QtdAbandonadas": 79681
    },
    {
      "Dat_Referencia": "2017-07-27 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 154776,
      "QtdFinalizadas": 85928,
      "QtdAbandonadas": 82983
    },
    {
      "Dat_Referencia": "2017-07-28 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 136597,
      "QtdFinalizadas": 73574,
      "QtdAbandonadas": 70450
    },
    {
      "Dat_Referencia": "2017-07-29 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 84233,
      "QtdFinalizadas": 45304,
      "QtdAbandonadas": 44183
    },
    {
      "Dat_Referencia": "2017-07-30 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 43758,
      "QtdFinalizadas": 25980,
      "QtdAbandonadas": 25359
    },
    {
      "Dat_Referencia": "2017-07-31 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 165427,
      "QtdFinalizadas": 95066,
      "QtdAbandonadas": 132307
    },
    {
      "Dat_Referencia": "2017-08-01 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 180815,
      "QtdFinalizadas": 99718,
      "QtdAbandonadas": 119702
    },
    {
      "Dat_Referencia": "2017-08-02 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 175617,
      "QtdFinalizadas": 99908,
      "QtdAbandonadas": 123763
    },
    {
      "Dat_Referencia": "2017-08-03 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 168860,
      "QtdFinalizadas": 94141,
      "QtdAbandonadas": 111249
    },
    {
      "Dat_Referencia": "2017-08-04 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 146591,
      "QtdFinalizadas": 85419,
      "QtdAbandonadas": 99343
    },
    {
      "Dat_Referencia": "2017-08-05 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 92415,
      "QtdFinalizadas": 52552,
      "QtdAbandonadas": 60176
    },
    {
      "Dat_Referencia": "2017-08-06 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 46158,
      "QtdFinalizadas": 29692,
      "QtdAbandonadas": 31843
    },
    {
      "Dat_Referencia": "2017-08-07 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 180399,
      "QtdFinalizadas": 91432,
      "QtdAbandonadas": 110926
    },
    {
      "Dat_Referencia": "2017-08-08 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 175935,
      "QtdFinalizadas": 99958,
      "QtdAbandonadas": 124256
    },
    {
      "Dat_Referencia": "2017-08-09 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 164652,
      "QtdFinalizadas": 91772,
      "QtdAbandonadas": 109955
    },
    {
      "Dat_Referencia": "2017-08-10 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 174693,
      "QtdFinalizadas": 80976,
      "QtdAbandonadas": 88100
    },
    {
      "Dat_Referencia": "2017-08-11 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 144396,
      "QtdFinalizadas": 71775,
      "QtdAbandonadas": 77514
    },
    {
      "Dat_Referencia": "2017-08-12 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 88085,
      "QtdFinalizadas": 44085,
      "QtdAbandonadas": 48306
    },
    {
      "Dat_Referencia": "2017-08-13 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 43205,
      "QtdFinalizadas": 24470,
      "QtdAbandonadas": 26624
    },
    {
      "Dat_Referencia": "2017-08-14 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 167474,
      "QtdFinalizadas": 77510,
      "QtdAbandonadas": 90130
    },
    {
      "Dat_Referencia": "2017-08-15 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 157980,
      "QtdFinalizadas": 76374,
      "QtdAbandonadas": 85505
    },
    {
      "Dat_Referencia": "2017-08-16 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 159926,
      "QtdFinalizadas": 81728,
      "QtdAbandonadas": 95840
    },
    {
      "Dat_Referencia": "2017-08-17 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 151329,
      "QtdFinalizadas": 72272,
      "QtdAbandonadas": 88531
    },
    {
      "Dat_Referencia": "2017-08-18 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 134649,
      "QtdFinalizadas": 62631,
      "QtdAbandonadas": 79490
    },
    {
      "Dat_Referencia": "2017-08-19 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 90559,
      "QtdFinalizadas": 44624,
      "QtdAbandonadas": 56209
    },
    {
      "Dat_Referencia": "2017-08-20 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 51796,
      "QtdFinalizadas": 29557,
      "QtdAbandonadas": 34471
    },
    {
      "Dat_Referencia": "2017-08-21 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 171531,
      "QtdFinalizadas": 80013,
      "QtdAbandonadas": 96024
    },
    {
      "Dat_Referencia": "2017-08-22 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 164157,
      "QtdFinalizadas": 79062,
      "QtdAbandonadas": 90641
    },
    {
      "Dat_Referencia": "2017-08-23 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 151793,
      "QtdFinalizadas": 75033,
      "QtdAbandonadas": 84803
    },
    {
      "Dat_Referencia": "2017-08-24 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 140153,
      "QtdFinalizadas": 72088,
      "QtdAbandonadas": 85040
    },
    {
      "Dat_Referencia": "2017-08-25 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 138687,
      "QtdFinalizadas": 69983,
      "QtdAbandonadas": 90563
    },
    {
      "Dat_Referencia": "2017-08-26 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 91762,
      "QtdFinalizadas": 49505,
      "QtdAbandonadas": 52419
    },
    {
      "Dat_Referencia": "2017-08-27 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 46812,
      "QtdFinalizadas": 31069,
      "QtdAbandonadas": 30577
    },
    {
      "Dat_Referencia": "2017-08-28 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 168514,
      "QtdFinalizadas": 83495,
      "QtdAbandonadas": 91710
    },
    {
      "Dat_Referencia": "2017-08-29 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 172613,
      "QtdFinalizadas": 91436,
      "QtdAbandonadas": 93888
    },
    {
      "Dat_Referencia": "2017-08-30 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 174917,
      "QtdFinalizadas": 99244,
      "QtdAbandonadas": 96674
    },
    {
      "Dat_Referencia": "2017-08-31 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 169387,
      "QtdFinalizadas": 92661,
      "QtdAbandonadas": 92125
    },
    {
      "Dat_Referencia": "2017-09-01 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 154971,
      "QtdFinalizadas": 89314,
      "QtdAbandonadas": 87118
    },
    {
      "Dat_Referencia": "2017-09-02 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 95734,
      "QtdFinalizadas": 54349,
      "QtdAbandonadas": 55040
    },
    {
      "Dat_Referencia": "2017-09-03 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 48526,
      "QtdFinalizadas": 32123,
      "QtdAbandonadas": 29121
    },
    {
      "Dat_Referencia": "2017-09-04 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 187945,
      "QtdFinalizadas": 95064,
      "QtdAbandonadas": 95460
    },
    {
      "Dat_Referencia": "2017-09-05 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 190892,
      "QtdFinalizadas": 96950,
      "QtdAbandonadas": 95142
    },
    {
      "Dat_Referencia": "2017-09-06 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 167568,
      "QtdFinalizadas": 86167,
      "QtdAbandonadas": 90092
    },
    {
      "Dat_Referencia": "2017-09-07 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 82425,
      "QtdFinalizadas": 48001,
      "QtdAbandonadas": 47026
    },
    {
      "Dat_Referencia": "2017-09-08 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 153908,
      "QtdFinalizadas": 78254,
      "QtdAbandonadas": 80731
    },
    {
      "Dat_Referencia": "2017-09-09 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 92405,
      "QtdFinalizadas": 53394,
      "QtdAbandonadas": 55261
    },
    {
      "Dat_Referencia": "2017-09-10 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 51387,
      "QtdFinalizadas": 30960,
      "QtdAbandonadas": 33150
    },
    {
      "Dat_Referencia": "2017-09-11 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 207105,
      "QtdFinalizadas": 96631,
      "QtdAbandonadas": 108907
    },
    {
      "Dat_Referencia": "2017-09-12 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 202086,
      "QtdFinalizadas": 88025,
      "QtdAbandonadas": 106022
    },
    {
      "Dat_Referencia": "2017-09-13 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 176308,
      "QtdFinalizadas": 80851,
      "QtdAbandonadas": 94586
    },
    {
      "Dat_Referencia": "2017-09-14 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 155455,
      "QtdFinalizadas": 69101,
      "QtdAbandonadas": 85409
    },
    {
      "Dat_Referencia": "2017-09-15 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 140316,
      "QtdFinalizadas": 66013,
      "QtdAbandonadas": 82524
    },
    {
      "Dat_Referencia": "2017-09-16 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 89387,
      "QtdFinalizadas": 40933,
      "QtdAbandonadas": 53865
    },
    {
      "Dat_Referencia": "2017-09-17 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 44512,
      "QtdFinalizadas": 24149,
      "QtdAbandonadas": 30223
    },
    {
      "Dat_Referencia": "2017-09-18 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 159495,
      "QtdFinalizadas": 72938,
      "QtdAbandonadas": 93156
    },
    {
      "Dat_Referencia": "2017-09-19 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 148895,
      "QtdFinalizadas": 70446,
      "QtdAbandonadas": 91807
    },
    {
      "Dat_Referencia": "2017-09-20 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 134596,
      "QtdFinalizadas": 65449,
      "QtdAbandonadas": 87988
    },
    {
      "Dat_Referencia": "2017-09-21 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 130533,
      "QtdFinalizadas": 63580,
      "QtdAbandonadas": 87134
    },
    {
      "Dat_Referencia": "2017-09-22 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 119115,
      "QtdFinalizadas": 58033,
      "QtdAbandonadas": 81771
    },
    {
      "Dat_Referencia": "2017-09-23 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 78594,
      "QtdFinalizadas": 42067,
      "QtdAbandonadas": 51652
    },
    {
      "Dat_Referencia": "2017-09-24 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 41763,
      "QtdFinalizadas": 26187,
      "QtdAbandonadas": 30094
    },
    {
      "Dat_Referencia": "2017-09-25 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 145296,
      "QtdFinalizadas": 73357,
      "QtdAbandonadas": 93115
    },
    {
      "Dat_Referencia": "2017-09-26 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 153556,
      "QtdFinalizadas": 84432,
      "QtdAbandonadas": 90842
    },
    {
      "Dat_Referencia": "2017-09-27 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 149074,
      "QtdFinalizadas": 71340,
      "QtdAbandonadas": 88715
    },
    {
      "Dat_Referencia": "2017-09-28 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 139759,
      "QtdFinalizadas": 67861,
      "QtdAbandonadas": 85389
    },
    {
      "Dat_Referencia": "2017-09-29 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 131485,
      "QtdFinalizadas": 67877,
      "QtdAbandonadas": 79443
    },
    {
      "Dat_Referencia": "2017-09-30 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 97330,
      "QtdFinalizadas": 54455,
      "QtdAbandonadas": 60739
    },
    {
      "Dat_Referencia": "2017-10-01 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 54848,
      "QtdFinalizadas": 35092,
      "QtdAbandonadas": 35974
    },
    {
      "Dat_Referencia": "2017-10-02 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 169426,
      "QtdFinalizadas": 98566,
      "QtdAbandonadas": 160140
    },
    {
      "Dat_Referencia": "2017-10-03 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 182426,
      "QtdFinalizadas": 96366,
      "QtdAbandonadas": 108102
    },
    {
      "Dat_Referencia": "2017-10-04 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 211378,
      "QtdFinalizadas": 99899,
      "QtdAbandonadas": 113117
    },
    {
      "Dat_Referencia": "2017-10-05 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 215977,
      "QtdFinalizadas": 102491,
      "QtdAbandonadas": 113409
    },
    {
      "Dat_Referencia": "2017-10-06 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 174715,
      "QtdFinalizadas": 85698,
      "QtdAbandonadas": 101735
    },
    {
      "Dat_Referencia": "2017-10-07 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 110156,
      "QtdFinalizadas": 52772,
      "QtdAbandonadas": 64220
    },
    {
      "Dat_Referencia": "2017-10-08 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 55403,
      "QtdFinalizadas": 31676,
      "QtdAbandonadas": 36486
    },
    {
      "Dat_Referencia": "2017-10-09 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 198639,
      "QtdFinalizadas": 95762,
      "QtdAbandonadas": 111197
    },
    {
      "Dat_Referencia": "2017-10-10 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 185588,
      "QtdFinalizadas": 94601,
      "QtdAbandonadas": 117267
    },
    {
      "Dat_Referencia": "2017-10-11 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 163483,
      "QtdFinalizadas": 79225,
      "QtdAbandonadas": 95123
    },
    {
      "Dat_Referencia": "2017-10-12 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 74465,
      "QtdFinalizadas": 43124,
      "QtdAbandonadas": 48709
    },
    {
      "Dat_Referencia": "2017-10-13 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 151818,
      "QtdFinalizadas": 74619,
      "QtdAbandonadas": 92830
    },
    {
      "Dat_Referencia": "2017-10-14 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 93384,
      "QtdFinalizadas": 46872,
      "QtdAbandonadas": 61770
    },
    {
      "Dat_Referencia": "2017-10-15 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 50109,
      "QtdFinalizadas": 30021,
      "QtdAbandonadas": 35257
    },
    {
      "Dat_Referencia": "2017-10-16 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 183891,
      "QtdFinalizadas": 88114,
      "QtdAbandonadas": 102115
    },
    {
      "Dat_Referencia": "2017-10-17 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 172047,
      "QtdFinalizadas": 82992,
      "QtdAbandonadas": 97281
    },
    {
      "Dat_Referencia": "2017-10-18 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 158700,
      "QtdFinalizadas": 73875,
      "QtdAbandonadas": 90953
    },
    {
      "Dat_Referencia": "2017-10-19 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 156821,
      "QtdFinalizadas": 70929,
      "QtdAbandonadas": 113486
    },
    {
      "Dat_Referencia": "2017-10-20 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 132312,
      "QtdFinalizadas": 66563,
      "QtdAbandonadas": 83916
    },
    {
      "Dat_Referencia": "2017-10-21 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 83993,
      "QtdFinalizadas": 45061,
      "QtdAbandonadas": 57098
    },
    {
      "Dat_Referencia": "2017-10-22 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 47570,
      "QtdFinalizadas": 30868,
      "QtdAbandonadas": 35757
    },
    {
      "Dat_Referencia": "2017-10-23 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 152480,
      "QtdFinalizadas": 73115,
      "QtdAbandonadas": 94022
    },
    {
      "Dat_Referencia": "2017-10-24 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 143790,
      "QtdFinalizadas": 74317,
      "QtdAbandonadas": 87371
    },
    {
      "Dat_Referencia": "2017-10-25 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 165779,
      "QtdFinalizadas": 79972,
      "QtdAbandonadas": 91859
    },
    {
      "Dat_Referencia": "2017-10-26 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 153683,
      "QtdFinalizadas": 74489,
      "QtdAbandonadas": 90386
    },
    {
      "Dat_Referencia": "2017-10-27 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 138340,
      "QtdFinalizadas": 69762,
      "QtdAbandonadas": 79369
    },
    {
      "Dat_Referencia": "2017-10-28 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 97803,
      "QtdFinalizadas": 54938,
      "QtdAbandonadas": 59525
    },
    {
      "Dat_Referencia": "2017-10-29 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 50449,
      "QtdFinalizadas": 31057,
      "QtdAbandonadas": 33183
    },
    {
      "Dat_Referencia": "2017-10-30 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 168407,
      "QtdFinalizadas": 82335,
      "QtdAbandonadas": 93786
    },
    {
      "Dat_Referencia": "2017-10-31 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 170109,
      "QtdFinalizadas": 94210,
      "QtdAbandonadas": 93821
    },
    {
      "Dat_Referencia": "2017-11-01 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 164055,
      "QtdFinalizadas": 96051,
      "QtdAbandonadas": 97277
    },
    {
      "Dat_Referencia": "2017-11-02 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 88297,
      "QtdFinalizadas": 47760,
      "QtdAbandonadas": 48836
    },
    {
      "Dat_Referencia": "2017-11-03 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 154208,
      "QtdFinalizadas": 86888,
      "QtdAbandonadas": 90040
    },
    {
      "Dat_Referencia": "2017-11-04 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 91020,
      "QtdFinalizadas": 53940,
      "QtdAbandonadas": 54818
    },
    {
      "Dat_Referencia": "2017-11-05 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 48279,
      "QtdFinalizadas": 31878,
      "QtdAbandonadas": 32254
    },
    {
      "Dat_Referencia": "2017-11-06 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 183144,
      "QtdFinalizadas": 94734,
      "QtdAbandonadas": 99428
    },
    {
      "Dat_Referencia": "2017-11-07 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 187981,
      "QtdFinalizadas": 100349,
      "QtdAbandonadas": 111739
    },
    {
      "Dat_Referencia": "2017-11-08 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 176914,
      "QtdFinalizadas": 89834,
      "QtdAbandonadas": 99440
    },
    {
      "Dat_Referencia": "2017-11-09 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 161075,
      "QtdFinalizadas": 80901,
      "QtdAbandonadas": 92010
    },
    {
      "Dat_Referencia": "2017-11-10 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 152537,
      "QtdFinalizadas": 73117,
      "QtdAbandonadas": 92021
    },
    {
      "Dat_Referencia": "2017-11-11 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 93972,
      "QtdFinalizadas": 46646,
      "QtdAbandonadas": 57753
    },
    {
      "Dat_Referencia": "2017-11-12 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 48673,
      "QtdFinalizadas": 27770,
      "QtdAbandonadas": 33658
    },
    {
      "Dat_Referencia": "2017-11-13 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 176482,
      "QtdFinalizadas": 77034,
      "QtdAbandonadas": 97808
    },
    {
      "Dat_Referencia": "2017-11-14 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 146031,
      "QtdFinalizadas": 71252,
      "QtdAbandonadas": 84757
    },
    {
      "Dat_Referencia": "2017-11-15 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 75992,
      "QtdFinalizadas": 41546,
      "QtdAbandonadas": 48344
    },
    {
      "Dat_Referencia": "2017-11-16 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 147503,
      "QtdFinalizadas": 74340,
      "QtdAbandonadas": 89332
    },
    {
      "Dat_Referencia": "2017-11-17 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 126237,
      "QtdFinalizadas": 63880,
      "QtdAbandonadas": 79474
    },
    {
      "Dat_Referencia": "2017-11-18 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 82359,
      "QtdFinalizadas": 44459,
      "QtdAbandonadas": 53363
    },
    {
      "Dat_Referencia": "2017-11-19 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 43766,
      "QtdFinalizadas": 27582,
      "QtdAbandonadas": 31817
    },
    {
      "Dat_Referencia": "2017-11-20 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 130451,
      "QtdFinalizadas": 70167,
      "QtdAbandonadas": 81002
    },
    {
      "Dat_Referencia": "2017-11-21 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 157053,
      "QtdFinalizadas": 79005,
      "QtdAbandonadas": 98694
    },
    {
      "Dat_Referencia": "2017-11-22 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 143825,
      "QtdFinalizadas": 78191,
      "QtdAbandonadas": 88834
    },
    {
      "Dat_Referencia": "2017-11-23 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 130016,
      "QtdFinalizadas": 73447,
      "QtdAbandonadas": 84178
    },
    {
      "Dat_Referencia": "2017-11-24 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 115736,
      "QtdFinalizadas": 68317,
      "QtdAbandonadas": 76820
    },
    {
      "Dat_Referencia": "2017-11-25 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 76583,
      "QtdFinalizadas": 46249,
      "QtdAbandonadas": 50939
    },
    {
      "Dat_Referencia": "2017-11-26 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 45863,
      "QtdFinalizadas": 30894,
      "QtdAbandonadas": 32450
    },
    {
      "Dat_Referencia": "2017-11-27 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 144860,
      "QtdFinalizadas": 79003,
      "QtdAbandonadas": 97575
    },
    {
      "Dat_Referencia": "2017-11-28 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 145965,
      "QtdFinalizadas": 83651,
      "QtdAbandonadas": 88291
    },
    {
      "Dat_Referencia": "2017-11-29 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 144888,
      "QtdFinalizadas": 86919,
      "QtdAbandonadas": 90678
    },
    {
      "Dat_Referencia": "2017-11-30 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 141898,
      "QtdFinalizadas": 89431,
      "QtdAbandonadas": 94310
    },
    {
      "Dat_Referencia": "2017-12-01 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 140085,
      "QtdFinalizadas": 87577,
      "QtdAbandonadas": 89385
    },
    {
      "Dat_Referencia": "2017-12-02 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 88282,
      "QtdFinalizadas": 55203,
      "QtdAbandonadas": 54069
    },
    {
      "Dat_Referencia": "2017-12-03 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 46057,
      "QtdFinalizadas": 33322,
      "QtdAbandonadas": 30646
    },
    {
      "Dat_Referencia": "2017-12-04 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 159419,
      "QtdFinalizadas": 95835,
      "QtdAbandonadas": 91449
    },
    {
      "Dat_Referencia": "2017-12-05 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 158884,
      "QtdFinalizadas": 90760,
      "QtdAbandonadas": 87660
    },
    {
      "Dat_Referencia": "2017-12-06 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 157958,
      "QtdFinalizadas": 89958,
      "QtdAbandonadas": 87845
    },
    {
      "Dat_Referencia": "2017-12-07 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 148329,
      "QtdFinalizadas": 85210,
      "QtdAbandonadas": 84266
    },
    {
      "Dat_Referencia": "2017-12-08 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 123853,
      "QtdFinalizadas": 69353,
      "QtdAbandonadas": 71966
    },
    {
      "Dat_Referencia": "2017-12-09 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 88412,
      "QtdFinalizadas": 50795,
      "QtdAbandonadas": 54628
    },
    {
      "Dat_Referencia": "2017-12-10 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 49043,
      "QtdFinalizadas": 30755,
      "QtdAbandonadas": 30912
    },
    {
      "Dat_Referencia": "2017-12-11 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 167591,
      "QtdFinalizadas": 93831,
      "QtdAbandonadas": 97577
    },
    {
      "Dat_Referencia": "2017-12-12 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 159875,
      "QtdFinalizadas": 86995,
      "QtdAbandonadas": 95947
    },
    {
      "Dat_Referencia": "2017-12-13 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 136886,
      "QtdFinalizadas": 70567,
      "QtdAbandonadas": 81163
    },
    {
      "Dat_Referencia": "2017-12-14 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 126555,
      "QtdFinalizadas": 64386,
      "QtdAbandonadas": 74148
    },
    {
      "Dat_Referencia": "2017-12-15 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 109256,
      "QtdFinalizadas": 58654,
      "QtdAbandonadas": 68209
    },
    {
      "Dat_Referencia": "2017-12-16 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 70997,
      "QtdFinalizadas": 38913,
      "QtdAbandonadas": 45869
    },
    {
      "Dat_Referencia": "2017-12-17 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 40538,
      "QtdFinalizadas": 25648,
      "QtdAbandonadas": 29166
    },
    {
      "Dat_Referencia": "2017-12-18 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 132931,
      "QtdFinalizadas": 69178,
      "QtdAbandonadas": 81219
    },
    {
      "Dat_Referencia": "2017-12-19 00:00:00.000",
      "Grupo": "Fixo e Velox",
      "QtdDerivadas": 124711,
      "QtdFinalizadas": 64525,
      "QtdAbandonadas": 79612
    },
    {
      "Dat_Referencia": "2017-01-01 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 7076,
      "QtdFinalizadas": 1569,
      "QtdAbandonadas": 4571
    },
    {
      "Dat_Referencia": "2017-01-02 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 37863,
      "QtdFinalizadas": 10613,
      "QtdAbandonadas": 24253
    },
    {
      "Dat_Referencia": "2017-01-03 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 35424,
      "QtdFinalizadas": 8715,
      "QtdAbandonadas": 22413
    },
    {
      "Dat_Referencia": "2017-01-04 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 41476,
      "QtdFinalizadas": 14124,
      "QtdAbandonadas": 31944
    },
    {
      "Dat_Referencia": "2017-01-05 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 32410,
      "QtdFinalizadas": 9876,
      "QtdAbandonadas": 22310
    },
    {
      "Dat_Referencia": "2017-01-06 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 30473,
      "QtdFinalizadas": 9182,
      "QtdAbandonadas": 20306
    },
    {
      "Dat_Referencia": "2017-01-07 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21074,
      "QtdFinalizadas": 6107,
      "QtdAbandonadas": 12502
    },
    {
      "Dat_Referencia": "2017-01-08 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 10634,
      "QtdFinalizadas": 2786,
      "QtdAbandonadas": 6925
    },
    {
      "Dat_Referencia": "2017-01-09 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 38020,
      "QtdFinalizadas": 11194,
      "QtdAbandonadas": 23963
    },
    {
      "Dat_Referencia": "2017-01-10 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 39920,
      "QtdFinalizadas": 8507,
      "QtdAbandonadas": 24632
    },
    {
      "Dat_Referencia": "2017-01-11 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 34480,
      "QtdFinalizadas": 6330,
      "QtdAbandonadas": 21359
    },
    {
      "Dat_Referencia": "2017-01-12 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 28300,
      "QtdFinalizadas": 4894,
      "QtdAbandonadas": 18148
    },
    {
      "Dat_Referencia": "2017-01-13 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 26147,
      "QtdFinalizadas": 4672,
      "QtdAbandonadas": 17218
    },
    {
      "Dat_Referencia": "2017-01-14 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 18613,
      "QtdFinalizadas": 3687,
      "QtdAbandonadas": 11519
    },
    {
      "Dat_Referencia": "2017-01-15 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 13084,
      "QtdFinalizadas": 3347,
      "QtdAbandonadas": 8296
    },
    {
      "Dat_Referencia": "2017-01-16 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 33726,
      "QtdFinalizadas": 6791,
      "QtdAbandonadas": 22657
    },
    {
      "Dat_Referencia": "2017-01-17 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 29523,
      "QtdFinalizadas": 5801,
      "QtdAbandonadas": 19667
    },
    {
      "Dat_Referencia": "2017-01-18 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 24369,
      "QtdFinalizadas": 5113,
      "QtdAbandonadas": 17814
    },
    {
      "Dat_Referencia": "2017-01-19 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22308,
      "QtdFinalizadas": 4497,
      "QtdAbandonadas": 14731
    },
    {
      "Dat_Referencia": "2017-01-20 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22093,
      "QtdFinalizadas": 4311,
      "QtdAbandonadas": 13807
    },
    {
      "Dat_Referencia": "2017-01-21 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 16536,
      "QtdFinalizadas": 3143,
      "QtdAbandonadas": 9984
    },
    {
      "Dat_Referencia": "2017-01-22 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 10234,
      "QtdFinalizadas": 2276,
      "QtdAbandonadas": 6574
    },
    {
      "Dat_Referencia": "2017-01-23 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 32335,
      "QtdFinalizadas": 8218,
      "QtdAbandonadas": 21595
    },
    {
      "Dat_Referencia": "2017-01-24 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 29089,
      "QtdFinalizadas": 4962,
      "QtdAbandonadas": 19009
    },
    {
      "Dat_Referencia": "2017-01-25 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 29337,
      "QtdFinalizadas": 5043,
      "QtdAbandonadas": 18706
    },
    {
      "Dat_Referencia": "2017-01-26 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 26803,
      "QtdFinalizadas": 4336,
      "QtdAbandonadas": 18858
    },
    {
      "Dat_Referencia": "2017-01-27 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 24832,
      "QtdFinalizadas": 4093,
      "QtdAbandonadas": 16090
    },
    {
      "Dat_Referencia": "2017-01-28 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 19374,
      "QtdFinalizadas": 2674,
      "QtdAbandonadas": 11602
    },
    {
      "Dat_Referencia": "2017-01-29 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 11207,
      "QtdFinalizadas": 1579,
      "QtdAbandonadas": 7413
    },
    {
      "Dat_Referencia": "2017-01-30 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 31531,
      "QtdFinalizadas": 7872,
      "QtdAbandonadas": 21185
    },
    {
      "Dat_Referencia": "2017-01-31 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 33417,
      "QtdFinalizadas": 9173,
      "QtdAbandonadas": 22496
    },
    {
      "Dat_Referencia": "2017-02-01 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 37290,
      "QtdFinalizadas": 11190,
      "QtdAbandonadas": 25255
    },
    {
      "Dat_Referencia": "2017-02-02 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 36288,
      "QtdFinalizadas": 10740,
      "QtdAbandonadas": 24557
    },
    {
      "Dat_Referencia": "2017-02-03 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 33093,
      "QtdFinalizadas": 12215,
      "QtdAbandonadas": 24317
    },
    {
      "Dat_Referencia": "2017-02-04 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 23859,
      "QtdFinalizadas": 6629,
      "QtdAbandonadas": 15860
    },
    {
      "Dat_Referencia": "2017-02-05 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 13578,
      "QtdFinalizadas": 3089,
      "QtdAbandonadas": 8732
    },
    {
      "Dat_Referencia": "2017-02-06 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 36148,
      "QtdFinalizadas": 9843,
      "QtdAbandonadas": 25907
    },
    {
      "Dat_Referencia": "2017-02-07 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 36499,
      "QtdFinalizadas": 11038,
      "QtdAbandonadas": 28599
    },
    {
      "Dat_Referencia": "2017-02-08 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 36006,
      "QtdFinalizadas": 7085,
      "QtdAbandonadas": 23952
    },
    {
      "Dat_Referencia": "2017-02-09 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 32886,
      "QtdFinalizadas": 6125,
      "QtdAbandonadas": 21126
    },
    {
      "Dat_Referencia": "2017-02-10 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 28145,
      "QtdFinalizadas": 5912,
      "QtdAbandonadas": 18671
    },
    {
      "Dat_Referencia": "2017-02-11 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22063,
      "QtdFinalizadas": 4879,
      "QtdAbandonadas": 13392
    },
    {
      "Dat_Referencia": "2017-02-12 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 13898,
      "QtdFinalizadas": 3215,
      "QtdAbandonadas": 22329
    },
    {
      "Dat_Referencia": "2017-02-13 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 34296,
      "QtdFinalizadas": 7305,
      "QtdAbandonadas": 22169
    },
    {
      "Dat_Referencia": "2017-02-14 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 32009,
      "QtdFinalizadas": 6491,
      "QtdAbandonadas": 20555
    },
    {
      "Dat_Referencia": "2017-02-15 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 28782,
      "QtdFinalizadas": 4636,
      "QtdAbandonadas": 19521
    },
    {
      "Dat_Referencia": "2017-02-16 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 25639,
      "QtdFinalizadas": 4087,
      "QtdAbandonadas": 18172
    },
    {
      "Dat_Referencia": "2017-02-17 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 24702,
      "QtdFinalizadas": 4203,
      "QtdAbandonadas": 17385
    },
    {
      "Dat_Referencia": "2017-02-18 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 18139,
      "QtdFinalizadas": 4596,
      "QtdAbandonadas": 11563
    },
    {
      "Dat_Referencia": "2017-02-19 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 11372,
      "QtdFinalizadas": 3037,
      "QtdAbandonadas": 7605
    },
    {
      "Dat_Referencia": "2017-02-20 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 27836,
      "QtdFinalizadas": 5363,
      "QtdAbandonadas": 19600
    },
    {
      "Dat_Referencia": "2017-02-21 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 27987,
      "QtdFinalizadas": 3996,
      "QtdAbandonadas": 19178
    },
    {
      "Dat_Referencia": "2017-02-22 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 29520,
      "QtdFinalizadas": 5627,
      "QtdAbandonadas": 18607
    },
    {
      "Dat_Referencia": "2017-02-23 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 28015,
      "QtdFinalizadas": 5134,
      "QtdAbandonadas": 18724
    },
    {
      "Dat_Referencia": "2017-02-24 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 24587,
      "QtdFinalizadas": 4006,
      "QtdAbandonadas": 16120
    },
    {
      "Dat_Referencia": "2017-02-25 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 19919,
      "QtdFinalizadas": 2954,
      "QtdAbandonadas": 12614
    },
    {
      "Dat_Referencia": "2017-02-26 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 9429,
      "QtdFinalizadas": 1386,
      "QtdAbandonadas": 7100
    },
    {
      "Dat_Referencia": "2017-02-27 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 19350,
      "QtdFinalizadas": 5185,
      "QtdAbandonadas": 12562
    },
    {
      "Dat_Referencia": "2017-02-28 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 17014,
      "QtdFinalizadas": 7125,
      "QtdAbandonadas": 11225
    },
    {
      "Dat_Referencia": "2017-03-01 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 30305,
      "QtdFinalizadas": 6129,
      "QtdAbandonadas": 19469
    },
    {
      "Dat_Referencia": "2017-03-02 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 31322,
      "QtdFinalizadas": 7756,
      "QtdAbandonadas": 22916
    },
    {
      "Dat_Referencia": "2017-03-03 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 32164,
      "QtdFinalizadas": 5239,
      "QtdAbandonadas": 22181
    },
    {
      "Dat_Referencia": "2017-03-04 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 24500,
      "QtdFinalizadas": 3729,
      "QtdAbandonadas": 15006
    },
    {
      "Dat_Referencia": "2017-03-05 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 13236,
      "QtdFinalizadas": 2164,
      "QtdAbandonadas": 8330
    },
    {
      "Dat_Referencia": "2017-03-06 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 35451,
      "QtdFinalizadas": 9714,
      "QtdAbandonadas": 25334
    },
    {
      "Dat_Referencia": "2017-03-07 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 38383,
      "QtdFinalizadas": 10587,
      "QtdAbandonadas": 28800
    },
    {
      "Dat_Referencia": "2017-03-08 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 34645,
      "QtdFinalizadas": 11761,
      "QtdAbandonadas": 26120
    },
    {
      "Dat_Referencia": "2017-03-09 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 32350,
      "QtdFinalizadas": 12262,
      "QtdAbandonadas": 24475
    },
    {
      "Dat_Referencia": "2017-03-10 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 30658,
      "QtdFinalizadas": 8105,
      "QtdAbandonadas": 21106
    },
    {
      "Dat_Referencia": "2017-03-11 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22593,
      "QtdFinalizadas": 4995,
      "QtdAbandonadas": 13447
    },
    {
      "Dat_Referencia": "2017-03-12 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 11614,
      "QtdFinalizadas": 2972,
      "QtdAbandonadas": 7009
    },
    {
      "Dat_Referencia": "2017-03-13 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 40194,
      "QtdFinalizadas": 9058,
      "QtdAbandonadas": 24061
    },
    {
      "Dat_Referencia": "2017-03-14 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 31922,
      "QtdFinalizadas": 4672,
      "QtdAbandonadas": 21189
    },
    {
      "Dat_Referencia": "2017-03-15 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 27649,
      "QtdFinalizadas": 3765,
      "QtdAbandonadas": 20242
    },
    {
      "Dat_Referencia": "2017-03-16 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 24529,
      "QtdFinalizadas": 3556,
      "QtdAbandonadas": 17424
    },
    {
      "Dat_Referencia": "2017-03-17 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 23750,
      "QtdFinalizadas": 3875,
      "QtdAbandonadas": 18011
    },
    {
      "Dat_Referencia": "2017-03-18 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21012,
      "QtdFinalizadas": 3856,
      "QtdAbandonadas": 13507
    },
    {
      "Dat_Referencia": "2017-03-19 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 16286,
      "QtdFinalizadas": 3499,
      "QtdAbandonadas": 12454
    },
    {
      "Dat_Referencia": "2017-03-20 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 35150,
      "QtdFinalizadas": 7269,
      "QtdAbandonadas": 22568
    },
    {
      "Dat_Referencia": "2017-03-21 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 29183,
      "QtdFinalizadas": 5811,
      "QtdAbandonadas": 19176
    },
    {
      "Dat_Referencia": "2017-03-22 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 28025,
      "QtdFinalizadas": 5335,
      "QtdAbandonadas": 16750
    },
    {
      "Dat_Referencia": "2017-03-23 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 28531,
      "QtdFinalizadas": 6012,
      "QtdAbandonadas": 16943
    },
    {
      "Dat_Referencia": "2017-03-24 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 24851,
      "QtdFinalizadas": 4573,
      "QtdAbandonadas": 15074
    },
    {
      "Dat_Referencia": "2017-03-25 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 18747,
      "QtdFinalizadas": 3417,
      "QtdAbandonadas": 11968
    },
    {
      "Dat_Referencia": "2017-03-26 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 13601,
      "QtdFinalizadas": 2496,
      "QtdAbandonadas": 8321
    },
    {
      "Dat_Referencia": "2017-03-27 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 34113,
      "QtdFinalizadas": 7167,
      "QtdAbandonadas": 20164
    },
    {
      "Dat_Referencia": "2017-03-28 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 35842,
      "QtdFinalizadas": 8309,
      "QtdAbandonadas": 20977
    },
    {
      "Dat_Referencia": "2017-03-29 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 36307,
      "QtdFinalizadas": 9033,
      "QtdAbandonadas": 23800
    },
    {
      "Dat_Referencia": "2017-03-30 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 30185,
      "QtdFinalizadas": 6860,
      "QtdAbandonadas": 22262
    },
    {
      "Dat_Referencia": "2017-03-31 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 26369,
      "QtdFinalizadas": 5537,
      "QtdAbandonadas": 17685
    },
    {
      "Dat_Referencia": "2017-04-01 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 19139,
      "QtdFinalizadas": 4412,
      "QtdAbandonadas": 12044
    },
    {
      "Dat_Referencia": "2017-04-02 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 12007,
      "QtdFinalizadas": 2296,
      "QtdAbandonadas": 8039
    },
    {
      "Dat_Referencia": "2017-04-03 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 34349,
      "QtdFinalizadas": 9715,
      "QtdAbandonadas": 20754
    },
    {
      "Dat_Referencia": "2017-04-04 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 33650,
      "QtdFinalizadas": 9487,
      "QtdAbandonadas": 21827
    },
    {
      "Dat_Referencia": "2017-04-05 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 33267,
      "QtdFinalizadas": 12086,
      "QtdAbandonadas": 22067
    },
    {
      "Dat_Referencia": "2017-04-06 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 31375,
      "QtdFinalizadas": 9916,
      "QtdAbandonadas": 20320
    },
    {
      "Dat_Referencia": "2017-04-07 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 30327,
      "QtdFinalizadas": 10230,
      "QtdAbandonadas": 20281
    },
    {
      "Dat_Referencia": "2017-04-08 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22589,
      "QtdFinalizadas": 4581,
      "QtdAbandonadas": 13788
    },
    {
      "Dat_Referencia": "2017-04-09 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 11653,
      "QtdFinalizadas": 2326,
      "QtdAbandonadas": 7531
    },
    {
      "Dat_Referencia": "2017-04-10 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 34796,
      "QtdFinalizadas": 6249,
      "QtdAbandonadas": 20480
    },
    {
      "Dat_Referencia": "2017-04-11 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 32488,
      "QtdFinalizadas": 5386,
      "QtdAbandonadas": 22806
    },
    {
      "Dat_Referencia": "2017-04-12 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 26664,
      "QtdFinalizadas": 4153,
      "QtdAbandonadas": 21396
    },
    {
      "Dat_Referencia": "2017-04-13 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22933,
      "QtdFinalizadas": 3144,
      "QtdAbandonadas": 15264
    },
    {
      "Dat_Referencia": "2017-04-14 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 13646,
      "QtdFinalizadas": 2114,
      "QtdAbandonadas": 8858
    },
    {
      "Dat_Referencia": "2017-04-15 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 16729,
      "QtdFinalizadas": 2704,
      "QtdAbandonadas": 10337
    },
    {
      "Dat_Referencia": "2017-04-16 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 11989,
      "QtdFinalizadas": 2423,
      "QtdAbandonadas": 7426
    },
    {
      "Dat_Referencia": "2017-04-17 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 32648,
      "QtdFinalizadas": 5639,
      "QtdAbandonadas": 20456
    },
    {
      "Dat_Referencia": "2017-04-18 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 28167,
      "QtdFinalizadas": 4600,
      "QtdAbandonadas": 17949
    },
    {
      "Dat_Referencia": "2017-04-19 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 24568,
      "QtdFinalizadas": 3879,
      "QtdAbandonadas": 15737
    },
    {
      "Dat_Referencia": "2017-04-20 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 20679,
      "QtdFinalizadas": 3030,
      "QtdAbandonadas": 14656
    },
    {
      "Dat_Referencia": "2017-04-21 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 13688,
      "QtdFinalizadas": 2560,
      "QtdAbandonadas": 8893
    },
    {
      "Dat_Referencia": "2017-04-22 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 16419,
      "QtdFinalizadas": 2406,
      "QtdAbandonadas": 10612
    },
    {
      "Dat_Referencia": "2017-04-23 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 9913,
      "QtdFinalizadas": 1485,
      "QtdAbandonadas": 7456
    },
    {
      "Dat_Referencia": "2017-04-24 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 28654,
      "QtdFinalizadas": 7386,
      "QtdAbandonadas": 19658
    },
    {
      "Dat_Referencia": "2017-04-25 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 27920,
      "QtdFinalizadas": 6617,
      "QtdAbandonadas": 18135
    },
    {
      "Dat_Referencia": "2017-04-26 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 25082,
      "QtdFinalizadas": 4784,
      "QtdAbandonadas": 16169
    },
    {
      "Dat_Referencia": "2017-04-27 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 23867,
      "QtdFinalizadas": 3500,
      "QtdAbandonadas": 15145
    },
    {
      "Dat_Referencia": "2017-04-28 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22136,
      "QtdFinalizadas": 5789,
      "QtdAbandonadas": 15912
    },
    {
      "Dat_Referencia": "2017-04-29 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 18792,
      "QtdFinalizadas": 5818,
      "QtdAbandonadas": 11803
    },
    {
      "Dat_Referencia": "2017-04-30 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 10692,
      "QtdFinalizadas": 1717,
      "QtdAbandonadas": 6853
    },
    {
      "Dat_Referencia": "2017-05-01 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21836,
      "QtdFinalizadas": 7530,
      "QtdAbandonadas": 11790
    },
    {
      "Dat_Referencia": "2017-05-02 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 33294,
      "QtdFinalizadas": 7730,
      "QtdAbandonadas": 21327
    },
    {
      "Dat_Referencia": "2017-05-03 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 36585,
      "QtdFinalizadas": 10580,
      "QtdAbandonadas": 23982
    },
    {
      "Dat_Referencia": "2017-05-04 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 32746,
      "QtdFinalizadas": 10773,
      "QtdAbandonadas": 20766
    },
    {
      "Dat_Referencia": "2017-05-05 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 32474,
      "QtdFinalizadas": 20222,
      "QtdAbandonadas": 22662
    },
    {
      "Dat_Referencia": "2017-05-06 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21607,
      "QtdFinalizadas": 14114,
      "QtdAbandonadas": 15581
    },
    {
      "Dat_Referencia": "2017-05-07 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 12326,
      "QtdFinalizadas": 6518,
      "QtdAbandonadas": 8575
    },
    {
      "Dat_Referencia": "2017-05-08 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 33790,
      "QtdFinalizadas": 13130,
      "QtdAbandonadas": 22963
    },
    {
      "Dat_Referencia": "2017-05-09 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 34617,
      "QtdFinalizadas": 7804,
      "QtdAbandonadas": 22681
    },
    {
      "Dat_Referencia": "2017-05-10 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 31959,
      "QtdFinalizadas": 5152,
      "QtdAbandonadas": 21184
    },
    {
      "Dat_Referencia": "2017-05-11 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 26585,
      "QtdFinalizadas": 4428,
      "QtdAbandonadas": 16242
    },
    {
      "Dat_Referencia": "2017-05-12 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 40068,
      "QtdFinalizadas": 3524,
      "QtdAbandonadas": 21757
    },
    {
      "Dat_Referencia": "2017-05-13 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 29076,
      "QtdFinalizadas": 4830,
      "QtdAbandonadas": 14692
    },
    {
      "Dat_Referencia": "2017-05-14 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 11749,
      "QtdFinalizadas": 2561,
      "QtdAbandonadas": 6784
    },
    {
      "Dat_Referencia": "2017-05-15 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 34202,
      "QtdFinalizadas": 6414,
      "QtdAbandonadas": 20477
    },
    {
      "Dat_Referencia": "2017-05-16 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 28480,
      "QtdFinalizadas": 6087,
      "QtdAbandonadas": 17155
    },
    {
      "Dat_Referencia": "2017-05-17 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 25358,
      "QtdFinalizadas": 5496,
      "QtdAbandonadas": 15964
    },
    {
      "Dat_Referencia": "2017-05-18 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 20971,
      "QtdFinalizadas": 5505,
      "QtdAbandonadas": 14324
    },
    {
      "Dat_Referencia": "2017-05-19 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 20225,
      "QtdFinalizadas": 5629,
      "QtdAbandonadas": 15352
    },
    {
      "Dat_Referencia": "2017-05-20 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 17745,
      "QtdFinalizadas": 4672,
      "QtdAbandonadas": 11496
    },
    {
      "Dat_Referencia": "2017-05-21 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 10225,
      "QtdFinalizadas": 2928,
      "QtdAbandonadas": 7724
    },
    {
      "Dat_Referencia": "2017-05-22 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 26310,
      "QtdFinalizadas": 8330,
      "QtdAbandonadas": 19390
    },
    {
      "Dat_Referencia": "2017-05-23 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 26133,
      "QtdFinalizadas": 7955,
      "QtdAbandonadas": 16811
    },
    {
      "Dat_Referencia": "2017-05-24 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21997,
      "QtdFinalizadas": 5737,
      "QtdAbandonadas": 16016
    },
    {
      "Dat_Referencia": "2017-05-25 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 23306,
      "QtdFinalizadas": 6363,
      "QtdAbandonadas": 14651
    },
    {
      "Dat_Referencia": "2017-05-26 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 23001,
      "QtdFinalizadas": 5438,
      "QtdAbandonadas": 14597
    },
    {
      "Dat_Referencia": "2017-05-27 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 16429,
      "QtdFinalizadas": 3250,
      "QtdAbandonadas": 11285
    },
    {
      "Dat_Referencia": "2017-05-28 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 9697,
      "QtdFinalizadas": 2022,
      "QtdAbandonadas": 6852
    },
    {
      "Dat_Referencia": "2017-05-29 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 28052,
      "QtdFinalizadas": 8558,
      "QtdAbandonadas": 19275
    },
    {
      "Dat_Referencia": "2017-05-30 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 28838,
      "QtdFinalizadas": 7000,
      "QtdAbandonadas": 19098
    },
    {
      "Dat_Referencia": "2017-05-31 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 28077,
      "QtdFinalizadas": 6562,
      "QtdAbandonadas": 18660
    },
    {
      "Dat_Referencia": "2017-06-01 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 26656,
      "QtdFinalizadas": 8221,
      "QtdAbandonadas": 19010
    },
    {
      "Dat_Referencia": "2017-06-02 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 28287,
      "QtdFinalizadas": 10735,
      "QtdAbandonadas": 20999
    },
    {
      "Dat_Referencia": "2017-06-03 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21469,
      "QtdFinalizadas": 7600,
      "QtdAbandonadas": 14765
    },
    {
      "Dat_Referencia": "2017-06-04 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 10918,
      "QtdFinalizadas": 2824,
      "QtdAbandonadas": 7680
    },
    {
      "Dat_Referencia": "2017-06-05 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 28816,
      "QtdFinalizadas": 12644,
      "QtdAbandonadas": 24492
    },
    {
      "Dat_Referencia": "2017-06-06 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 32420,
      "QtdFinalizadas": 16789,
      "QtdAbandonadas": 25843
    },
    {
      "Dat_Referencia": "2017-06-07 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 34156,
      "QtdFinalizadas": 14858,
      "QtdAbandonadas": 23764
    },
    {
      "Dat_Referencia": "2017-06-08 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 30637,
      "QtdFinalizadas": 7834,
      "QtdAbandonadas": 21816
    },
    {
      "Dat_Referencia": "2017-06-09 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22732,
      "QtdFinalizadas": 5553,
      "QtdAbandonadas": 17952
    },
    {
      "Dat_Referencia": "2017-06-10 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 17279,
      "QtdFinalizadas": 4311,
      "QtdAbandonadas": 12420
    },
    {
      "Dat_Referencia": "2017-06-11 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 10355,
      "QtdFinalizadas": 2507,
      "QtdAbandonadas": 7330
    },
    {
      "Dat_Referencia": "2017-06-12 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 27068,
      "QtdFinalizadas": 5938,
      "QtdAbandonadas": 19770
    },
    {
      "Dat_Referencia": "2017-06-13 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 23820,
      "QtdFinalizadas": 4993,
      "QtdAbandonadas": 18673
    },
    {
      "Dat_Referencia": "2017-06-14 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 24822,
      "QtdFinalizadas": 5460,
      "QtdAbandonadas": 20547
    },
    {
      "Dat_Referencia": "2017-06-15 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 15500,
      "QtdFinalizadas": 3169,
      "QtdAbandonadas": 11022
    },
    {
      "Dat_Referencia": "2017-06-16 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 20363,
      "QtdFinalizadas": 4138,
      "QtdAbandonadas": 16314
    },
    {
      "Dat_Referencia": "2017-06-17 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 14597,
      "QtdFinalizadas": 2768,
      "QtdAbandonadas": 10598
    },
    {
      "Dat_Referencia": "2017-06-18 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 11872,
      "QtdFinalizadas": 2249,
      "QtdAbandonadas": 7647
    },
    {
      "Dat_Referencia": "2017-06-19 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 27537,
      "QtdFinalizadas": 6684,
      "QtdAbandonadas": 21523
    },
    {
      "Dat_Referencia": "2017-06-20 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22270,
      "QtdFinalizadas": 5064,
      "QtdAbandonadas": 18941
    },
    {
      "Dat_Referencia": "2017-06-21 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 20937,
      "QtdFinalizadas": 4906,
      "QtdAbandonadas": 16143
    },
    {
      "Dat_Referencia": "2017-06-22 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22954,
      "QtdFinalizadas": 7673,
      "QtdAbandonadas": 20275
    },
    {
      "Dat_Referencia": "2017-06-23 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 20644,
      "QtdFinalizadas": 6251,
      "QtdAbandonadas": 16676
    },
    {
      "Dat_Referencia": "2017-06-24 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 14227,
      "QtdFinalizadas": 4055,
      "QtdAbandonadas": 11986
    },
    {
      "Dat_Referencia": "2017-06-25 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 9642,
      "QtdFinalizadas": 2552,
      "QtdAbandonadas": 8668
    },
    {
      "Dat_Referencia": "2017-06-26 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 24535,
      "QtdFinalizadas": 7302,
      "QtdAbandonadas": 20277
    },
    {
      "Dat_Referencia": "2017-06-27 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21817,
      "QtdFinalizadas": 5327,
      "QtdAbandonadas": 18890
    },
    {
      "Dat_Referencia": "2017-06-28 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21401,
      "QtdFinalizadas": 7619,
      "QtdAbandonadas": 16976
    },
    {
      "Dat_Referencia": "2017-06-29 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22020,
      "QtdFinalizadas": 6969,
      "QtdAbandonadas": 17414
    },
    {
      "Dat_Referencia": "2017-06-30 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21197,
      "QtdFinalizadas": 7035,
      "QtdAbandonadas": 17214
    },
    {
      "Dat_Referencia": "2017-07-01 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 16699,
      "QtdFinalizadas": 4993,
      "QtdAbandonadas": 12221
    },
    {
      "Dat_Referencia": "2017-07-02 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 10745,
      "QtdFinalizadas": 2882,
      "QtdAbandonadas": 7971
    },
    {
      "Dat_Referencia": "2017-07-03 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 29315,
      "QtdFinalizadas": 10910,
      "QtdAbandonadas": 24033
    },
    {
      "Dat_Referencia": "2017-07-04 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 30193,
      "QtdFinalizadas": 8680,
      "QtdAbandonadas": 23036
    },
    {
      "Dat_Referencia": "2017-07-05 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 33928,
      "QtdFinalizadas": 16037,
      "QtdAbandonadas": 26337
    },
    {
      "Dat_Referencia": "2017-07-06 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 42316,
      "QtdFinalizadas": 14259,
      "QtdAbandonadas": 27535
    },
    {
      "Dat_Referencia": "2017-07-07 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 31825,
      "QtdFinalizadas": 12909,
      "QtdAbandonadas": 25576
    },
    {
      "Dat_Referencia": "2017-07-08 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22374,
      "QtdFinalizadas": 7425,
      "QtdAbandonadas": 15773
    },
    {
      "Dat_Referencia": "2017-07-09 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 10501,
      "QtdFinalizadas": 3166,
      "QtdAbandonadas": 8584
    },
    {
      "Dat_Referencia": "2017-07-10 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 32245,
      "QtdFinalizadas": 8261,
      "QtdAbandonadas": 24874
    },
    {
      "Dat_Referencia": "2017-07-11 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 27335,
      "QtdFinalizadas": 7164,
      "QtdAbandonadas": 21077
    },
    {
      "Dat_Referencia": "2017-07-12 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 26088,
      "QtdFinalizadas": 6800,
      "QtdAbandonadas": 19273
    },
    {
      "Dat_Referencia": "2017-07-13 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22151,
      "QtdFinalizadas": 4920,
      "QtdAbandonadas": 17195
    },
    {
      "Dat_Referencia": "2017-07-14 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 19930,
      "QtdFinalizadas": 5046,
      "QtdAbandonadas": 15529
    },
    {
      "Dat_Referencia": "2017-07-15 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 15115,
      "QtdFinalizadas": 4340,
      "QtdAbandonadas": 11675
    },
    {
      "Dat_Referencia": "2017-07-16 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 11172,
      "QtdFinalizadas": 3344,
      "QtdAbandonadas": 8610
    },
    {
      "Dat_Referencia": "2017-07-17 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 27721,
      "QtdFinalizadas": 9174,
      "QtdAbandonadas": 19291
    },
    {
      "Dat_Referencia": "2017-07-18 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22699,
      "QtdFinalizadas": 7956,
      "QtdAbandonadas": 16677
    },
    {
      "Dat_Referencia": "2017-07-19 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22223,
      "QtdFinalizadas": 6103,
      "QtdAbandonadas": 16462
    },
    {
      "Dat_Referencia": "2017-07-20 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 18146,
      "QtdFinalizadas": 5058,
      "QtdAbandonadas": 14132
    },
    {
      "Dat_Referencia": "2017-07-21 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 18673,
      "QtdFinalizadas": 5222,
      "QtdAbandonadas": 14444
    },
    {
      "Dat_Referencia": "2017-07-22 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 14245,
      "QtdFinalizadas": 4413,
      "QtdAbandonadas": 10770
    },
    {
      "Dat_Referencia": "2017-07-23 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 8835,
      "QtdFinalizadas": 2696,
      "QtdAbandonadas": 7873
    },
    {
      "Dat_Referencia": "2017-07-24 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 30775,
      "QtdFinalizadas": 9314,
      "QtdAbandonadas": 22361
    },
    {
      "Dat_Referencia": "2017-07-25 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 24391,
      "QtdFinalizadas": 7366,
      "QtdAbandonadas": 17899
    },
    {
      "Dat_Referencia": "2017-07-26 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 24570,
      "QtdFinalizadas": 7268,
      "QtdAbandonadas": 18156
    },
    {
      "Dat_Referencia": "2017-07-27 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 19415,
      "QtdFinalizadas": 5806,
      "QtdAbandonadas": 14799
    },
    {
      "Dat_Referencia": "2017-07-28 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 19005,
      "QtdFinalizadas": 7926,
      "QtdAbandonadas": 15387
    },
    {
      "Dat_Referencia": "2017-07-29 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 15583,
      "QtdFinalizadas": 6154,
      "QtdAbandonadas": 12136
    },
    {
      "Dat_Referencia": "2017-07-30 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 6975,
      "QtdFinalizadas": 2750,
      "QtdAbandonadas": 6156
    },
    {
      "Dat_Referencia": "2017-07-31 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 29129,
      "QtdFinalizadas": 10784,
      "QtdAbandonadas": 23551
    },
    {
      "Dat_Referencia": "2017-08-01 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 28604,
      "QtdFinalizadas": 11869,
      "QtdAbandonadas": 21778
    },
    {
      "Dat_Referencia": "2017-08-02 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 28484,
      "QtdFinalizadas": 13069,
      "QtdAbandonadas": 21504
    },
    {
      "Dat_Referencia": "2017-08-03 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 26013,
      "QtdFinalizadas": 13590,
      "QtdAbandonadas": 20425
    },
    {
      "Dat_Referencia": "2017-08-04 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 28979,
      "QtdFinalizadas": 13800,
      "QtdAbandonadas": 22345
    },
    {
      "Dat_Referencia": "2017-08-05 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 19386,
      "QtdFinalizadas": 9080,
      "QtdAbandonadas": 14826
    },
    {
      "Dat_Referencia": "2017-08-06 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 9573,
      "QtdFinalizadas": 3516,
      "QtdAbandonadas": 7660
    },
    {
      "Dat_Referencia": "2017-08-07 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 29062,
      "QtdFinalizadas": 12917,
      "QtdAbandonadas": 22268
    },
    {
      "Dat_Referencia": "2017-08-08 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 31507,
      "QtdFinalizadas": 10270,
      "QtdAbandonadas": 24707
    },
    {
      "Dat_Referencia": "2017-08-09 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 26058,
      "QtdFinalizadas": 7729,
      "QtdAbandonadas": 19335
    },
    {
      "Dat_Referencia": "2017-08-10 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22761,
      "QtdFinalizadas": 6043,
      "QtdAbandonadas": 16239
    },
    {
      "Dat_Referencia": "2017-08-11 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 19871,
      "QtdFinalizadas": 5955,
      "QtdAbandonadas": 15393
    },
    {
      "Dat_Referencia": "2017-08-12 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 14850,
      "QtdFinalizadas": 4939,
      "QtdAbandonadas": 11559
    },
    {
      "Dat_Referencia": "2017-08-13 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 9462,
      "QtdFinalizadas": 3370,
      "QtdAbandonadas": 7373
    },
    {
      "Dat_Referencia": "2017-08-14 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 26232,
      "QtdFinalizadas": 7443,
      "QtdAbandonadas": 19578
    },
    {
      "Dat_Referencia": "2017-08-15 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22821,
      "QtdFinalizadas": 6554,
      "QtdAbandonadas": 16910
    },
    {
      "Dat_Referencia": "2017-08-16 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21984,
      "QtdFinalizadas": 6665,
      "QtdAbandonadas": 17481
    },
    {
      "Dat_Referencia": "2017-08-17 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21215,
      "QtdFinalizadas": 4703,
      "QtdAbandonadas": 16017
    },
    {
      "Dat_Referencia": "2017-08-18 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 19798,
      "QtdFinalizadas": 5013,
      "QtdAbandonadas": 14723
    },
    {
      "Dat_Referencia": "2017-08-19 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 15667,
      "QtdFinalizadas": 4066,
      "QtdAbandonadas": 11777
    },
    {
      "Dat_Referencia": "2017-08-20 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 9689,
      "QtdFinalizadas": 2664,
      "QtdAbandonadas": 8549
    },
    {
      "Dat_Referencia": "2017-08-21 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 24908,
      "QtdFinalizadas": 5721,
      "QtdAbandonadas": 17869
    },
    {
      "Dat_Referencia": "2017-08-22 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22248,
      "QtdFinalizadas": 4967,
      "QtdAbandonadas": 16750
    },
    {
      "Dat_Referencia": "2017-08-23 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 23602,
      "QtdFinalizadas": 6851,
      "QtdAbandonadas": 16827
    },
    {
      "Dat_Referencia": "2017-08-24 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 20416,
      "QtdFinalizadas": 5724,
      "QtdAbandonadas": 15734
    },
    {
      "Dat_Referencia": "2017-08-25 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 18884,
      "QtdFinalizadas": 5422,
      "QtdAbandonadas": 20007
    },
    {
      "Dat_Referencia": "2017-08-26 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 16090,
      "QtdFinalizadas": 3929,
      "QtdAbandonadas": 12307
    },
    {
      "Dat_Referencia": "2017-08-27 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 8376,
      "QtdFinalizadas": 2281,
      "QtdAbandonadas": 6829
    },
    {
      "Dat_Referencia": "2017-08-28 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 26340,
      "QtdFinalizadas": 9074,
      "QtdAbandonadas": 20081
    },
    {
      "Dat_Referencia": "2017-08-29 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 28436,
      "QtdFinalizadas": 11919,
      "QtdAbandonadas": 21235
    },
    {
      "Dat_Referencia": "2017-08-30 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22665,
      "QtdFinalizadas": 7244,
      "QtdAbandonadas": 16648
    },
    {
      "Dat_Referencia": "2017-08-31 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 25401,
      "QtdFinalizadas": 8099,
      "QtdAbandonadas": 19858
    },
    {
      "Dat_Referencia": "2017-09-01 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 26221,
      "QtdFinalizadas": 11574,
      "QtdAbandonadas": 18736
    },
    {
      "Dat_Referencia": "2017-09-02 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 15498,
      "QtdFinalizadas": 5934,
      "QtdAbandonadas": 12120
    },
    {
      "Dat_Referencia": "2017-09-03 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 7625,
      "QtdFinalizadas": 2866,
      "QtdAbandonadas": 6146
    },
    {
      "Dat_Referencia": "2017-09-04 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 27755,
      "QtdFinalizadas": 11984,
      "QtdAbandonadas": 20383
    },
    {
      "Dat_Referencia": "2017-09-05 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 34555,
      "QtdFinalizadas": 22056,
      "QtdAbandonadas": 24219
    },
    {
      "Dat_Referencia": "2017-09-06 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 31546,
      "QtdFinalizadas": 16826,
      "QtdAbandonadas": 22702
    },
    {
      "Dat_Referencia": "2017-09-07 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21192,
      "QtdFinalizadas": 10520,
      "QtdAbandonadas": 15499
    },
    {
      "Dat_Referencia": "2017-09-08 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 25584,
      "QtdFinalizadas": 9282,
      "QtdAbandonadas": 17661
    },
    {
      "Dat_Referencia": "2017-09-09 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 17791,
      "QtdFinalizadas": 6266,
      "QtdAbandonadas": 12549
    },
    {
      "Dat_Referencia": "2017-09-10 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 11976,
      "QtdFinalizadas": 6422,
      "QtdAbandonadas": 9354
    },
    {
      "Dat_Referencia": "2017-09-11 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 34032,
      "QtdFinalizadas": 12064,
      "QtdAbandonadas": 23610
    },
    {
      "Dat_Referencia": "2017-09-12 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 31858,
      "QtdFinalizadas": 10582,
      "QtdAbandonadas": 19996
    },
    {
      "Dat_Referencia": "2017-09-13 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 26599,
      "QtdFinalizadas": 7945,
      "QtdAbandonadas": 18031
    },
    {
      "Dat_Referencia": "2017-09-14 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21582,
      "QtdFinalizadas": 6520,
      "QtdAbandonadas": 15185
    },
    {
      "Dat_Referencia": "2017-09-15 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21352,
      "QtdFinalizadas": 6829,
      "QtdAbandonadas": 15212
    },
    {
      "Dat_Referencia": "2017-09-16 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 15553,
      "QtdFinalizadas": 4777,
      "QtdAbandonadas": 11653
    },
    {
      "Dat_Referencia": "2017-09-17 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 10567,
      "QtdFinalizadas": 3650,
      "QtdAbandonadas": 7729
    },
    {
      "Dat_Referencia": "2017-09-18 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 26424,
      "QtdFinalizadas": 8409,
      "QtdAbandonadas": 18986
    },
    {
      "Dat_Referencia": "2017-09-19 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 20575,
      "QtdFinalizadas": 6776,
      "QtdAbandonadas": 16158
    },
    {
      "Dat_Referencia": "2017-09-20 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 18353,
      "QtdFinalizadas": 5046,
      "QtdAbandonadas": 15187
    },
    {
      "Dat_Referencia": "2017-09-21 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 17014,
      "QtdFinalizadas": 4855,
      "QtdAbandonadas": 13722
    },
    {
      "Dat_Referencia": "2017-09-22 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 19397,
      "QtdFinalizadas": 7526,
      "QtdAbandonadas": 15624
    },
    {
      "Dat_Referencia": "2017-09-23 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 12839,
      "QtdFinalizadas": 4224,
      "QtdAbandonadas": 10886
    },
    {
      "Dat_Referencia": "2017-09-24 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 7270,
      "QtdFinalizadas": 2554,
      "QtdAbandonadas": 6532
    },
    {
      "Dat_Referencia": "2017-09-25 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 26766,
      "QtdFinalizadas": 9331,
      "QtdAbandonadas": 20658
    },
    {
      "Dat_Referencia": "2017-09-26 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21813,
      "QtdFinalizadas": 5855,
      "QtdAbandonadas": 16977
    },
    {
      "Dat_Referencia": "2017-09-27 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22368,
      "QtdFinalizadas": 8302,
      "QtdAbandonadas": 17149
    },
    {
      "Dat_Referencia": "2017-09-28 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 23061,
      "QtdFinalizadas": 9665,
      "QtdAbandonadas": 18533
    },
    {
      "Dat_Referencia": "2017-09-29 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 23517,
      "QtdFinalizadas": 8345,
      "QtdAbandonadas": 17593
    },
    {
      "Dat_Referencia": "2017-09-30 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 15271,
      "QtdFinalizadas": 5010,
      "QtdAbandonadas": 13032
    },
    {
      "Dat_Referencia": "2017-10-01 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 8771,
      "QtdFinalizadas": 3008,
      "QtdAbandonadas": 7440
    },
    {
      "Dat_Referencia": "2017-10-02 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 36227,
      "QtdFinalizadas": 18024,
      "QtdAbandonadas": 33980
    },
    {
      "Dat_Referencia": "2017-10-03 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 36705,
      "QtdFinalizadas": 19943,
      "QtdAbandonadas": 28500
    },
    {
      "Dat_Referencia": "2017-10-04 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 36065,
      "QtdFinalizadas": 19939,
      "QtdAbandonadas": 27555
    },
    {
      "Dat_Referencia": "2017-10-05 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 32981,
      "QtdFinalizadas": 18574,
      "QtdAbandonadas": 27279
    },
    {
      "Dat_Referencia": "2017-10-06 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 27143,
      "QtdFinalizadas": 11300,
      "QtdAbandonadas": 21543
    },
    {
      "Dat_Referencia": "2017-10-07 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 16665,
      "QtdFinalizadas": 6358,
      "QtdAbandonadas": 13304
    },
    {
      "Dat_Referencia": "2017-10-08 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 9260,
      "QtdFinalizadas": 3486,
      "QtdAbandonadas": 7419
    },
    {
      "Dat_Referencia": "2017-10-09 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 31379,
      "QtdFinalizadas": 11093,
      "QtdAbandonadas": 23103
    },
    {
      "Dat_Referencia": "2017-10-10 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 27943,
      "QtdFinalizadas": 10002,
      "QtdAbandonadas": 22772
    },
    {
      "Dat_Referencia": "2017-10-11 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 23595,
      "QtdFinalizadas": 8069,
      "QtdAbandonadas": 19518
    },
    {
      "Dat_Referencia": "2017-10-12 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 12996,
      "QtdFinalizadas": 4529,
      "QtdAbandonadas": 10992
    },
    {
      "Dat_Referencia": "2017-10-13 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22089,
      "QtdFinalizadas": 7737,
      "QtdAbandonadas": 18759
    },
    {
      "Dat_Referencia": "2017-10-14 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 17837,
      "QtdFinalizadas": 6438,
      "QtdAbandonadas": 13784
    },
    {
      "Dat_Referencia": "2017-10-15 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 14316,
      "QtdFinalizadas": 5054,
      "QtdAbandonadas": 10223
    },
    {
      "Dat_Referencia": "2017-10-16 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 31989,
      "QtdFinalizadas": 11008,
      "QtdAbandonadas": 23875
    },
    {
      "Dat_Referencia": "2017-10-17 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 28177,
      "QtdFinalizadas": 9117,
      "QtdAbandonadas": 22369
    },
    {
      "Dat_Referencia": "2017-10-18 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22093,
      "QtdFinalizadas": 6873,
      "QtdAbandonadas": 17344
    },
    {
      "Dat_Referencia": "2017-10-19 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 19165,
      "QtdFinalizadas": 6392,
      "QtdAbandonadas": 17442
    },
    {
      "Dat_Referencia": "2017-10-20 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 17991,
      "QtdFinalizadas": 5507,
      "QtdAbandonadas": 15086
    },
    {
      "Dat_Referencia": "2017-10-21 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 13298,
      "QtdFinalizadas": 4358,
      "QtdAbandonadas": 11545
    },
    {
      "Dat_Referencia": "2017-10-22 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 8451,
      "QtdFinalizadas": 2871,
      "QtdAbandonadas": 8131
    },
    {
      "Dat_Referencia": "2017-10-23 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 27314,
      "QtdFinalizadas": 10851,
      "QtdAbandonadas": 22551
    },
    {
      "Dat_Referencia": "2017-10-24 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21255,
      "QtdFinalizadas": 7301,
      "QtdAbandonadas": 16951
    },
    {
      "Dat_Referencia": "2017-10-25 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22012,
      "QtdFinalizadas": 6417,
      "QtdAbandonadas": 16187
    },
    {
      "Dat_Referencia": "2017-10-26 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21037,
      "QtdFinalizadas": 5351,
      "QtdAbandonadas": 15893
    },
    {
      "Dat_Referencia": "2017-10-27 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 23233,
      "QtdFinalizadas": 10846,
      "QtdAbandonadas": 17221
    },
    {
      "Dat_Referencia": "2017-10-28 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 18053,
      "QtdFinalizadas": 7051,
      "QtdAbandonadas": 14016
    },
    {
      "Dat_Referencia": "2017-10-29 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 8916,
      "QtdFinalizadas": 2907,
      "QtdAbandonadas": 7249
    },
    {
      "Dat_Referencia": "2017-10-30 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 31087,
      "QtdFinalizadas": 11066,
      "QtdAbandonadas": 22776
    },
    {
      "Dat_Referencia": "2017-10-31 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 29582,
      "QtdFinalizadas": 10840,
      "QtdAbandonadas": 22391
    },
    {
      "Dat_Referencia": "2017-11-01 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 34331,
      "QtdFinalizadas": 17301,
      "QtdAbandonadas": 25125
    },
    {
      "Dat_Referencia": "2017-11-02 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 27678,
      "QtdFinalizadas": 16753,
      "QtdAbandonadas": 19263
    },
    {
      "Dat_Referencia": "2017-11-03 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 38864,
      "QtdFinalizadas": 18609,
      "QtdAbandonadas": 27905
    },
    {
      "Dat_Referencia": "2017-11-04 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 20733,
      "QtdFinalizadas": 8367,
      "QtdAbandonadas": 15612
    },
    {
      "Dat_Referencia": "2017-11-05 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 10480,
      "QtdFinalizadas": 3981,
      "QtdAbandonadas": 8379
    },
    {
      "Dat_Referencia": "2017-11-06 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 38602,
      "QtdFinalizadas": 16303,
      "QtdAbandonadas": 28147
    },
    {
      "Dat_Referencia": "2017-11-07 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 32740,
      "QtdFinalizadas": 11986,
      "QtdAbandonadas": 24542
    },
    {
      "Dat_Referencia": "2017-11-08 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 27755,
      "QtdFinalizadas": 8276,
      "QtdAbandonadas": 22108
    },
    {
      "Dat_Referencia": "2017-11-09 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 23905,
      "QtdFinalizadas": 7225,
      "QtdAbandonadas": 18351
    },
    {
      "Dat_Referencia": "2017-11-10 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21917,
      "QtdFinalizadas": 7637,
      "QtdAbandonadas": 17429
    },
    {
      "Dat_Referencia": "2017-11-11 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 17048,
      "QtdFinalizadas": 5787,
      "QtdAbandonadas": 13602
    },
    {
      "Dat_Referencia": "2017-11-12 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 12611,
      "QtdFinalizadas": 4426,
      "QtdAbandonadas": 9540
    },
    {
      "Dat_Referencia": "2017-11-13 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 34419,
      "QtdFinalizadas": 10590,
      "QtdAbandonadas": 24351
    },
    {
      "Dat_Referencia": "2017-11-14 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 26227,
      "QtdFinalizadas": 8089,
      "QtdAbandonadas": 18888
    },
    {
      "Dat_Referencia": "2017-11-15 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 14855,
      "QtdFinalizadas": 4853,
      "QtdAbandonadas": 11825
    },
    {
      "Dat_Referencia": "2017-11-16 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 22388,
      "QtdFinalizadas": 7799,
      "QtdAbandonadas": 17635
    },
    {
      "Dat_Referencia": "2017-11-17 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21702,
      "QtdFinalizadas": 6902,
      "QtdAbandonadas": 17104
    },
    {
      "Dat_Referencia": "2017-11-18 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 14650,
      "QtdFinalizadas": 4377,
      "QtdAbandonadas": 11781
    },
    {
      "Dat_Referencia": "2017-11-19 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 9125,
      "QtdFinalizadas": 3251,
      "QtdAbandonadas": 8040
    },
    {
      "Dat_Referencia": "2017-11-20 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21407,
      "QtdFinalizadas": 6436,
      "QtdAbandonadas": 17029
    },
    {
      "Dat_Referencia": "2017-11-21 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21332,
      "QtdFinalizadas": 7608,
      "QtdAbandonadas": 18548
    },
    {
      "Dat_Referencia": "2017-11-22 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21666,
      "QtdFinalizadas": 7353,
      "QtdAbandonadas": 16485
    },
    {
      "Dat_Referencia": "2017-11-23 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21388,
      "QtdFinalizadas": 6219,
      "QtdAbandonadas": 17963
    },
    {
      "Dat_Referencia": "2017-11-24 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 19634,
      "QtdFinalizadas": 6123,
      "QtdAbandonadas": 15875
    },
    {
      "Dat_Referencia": "2017-11-25 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 16901,
      "QtdFinalizadas": 4592,
      "QtdAbandonadas": 12825
    },
    {
      "Dat_Referencia": "2017-11-26 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 9453,
      "QtdFinalizadas": 2842,
      "QtdAbandonadas": 7466
    },
    {
      "Dat_Referencia": "2017-11-27 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 30242,
      "QtdFinalizadas": 12557,
      "QtdAbandonadas": 24034
    },
    {
      "Dat_Referencia": "2017-11-28 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 25098,
      "QtdFinalizadas": 8161,
      "QtdAbandonadas": 19560
    },
    {
      "Dat_Referencia": "2017-11-29 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 24059,
      "QtdFinalizadas": 8810,
      "QtdAbandonadas": 19687
    },
    {
      "Dat_Referencia": "2017-11-30 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 23987,
      "QtdFinalizadas": 7864,
      "QtdAbandonadas": 19522
    },
    {
      "Dat_Referencia": "2017-12-01 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 23377,
      "QtdFinalizadas": 11461,
      "QtdAbandonadas": 18473
    },
    {
      "Dat_Referencia": "2017-12-02 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 17026,
      "QtdFinalizadas": 6616,
      "QtdAbandonadas": 12540
    },
    {
      "Dat_Referencia": "2017-12-03 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 10504,
      "QtdFinalizadas": 3711,
      "QtdAbandonadas": 7671
    },
    {
      "Dat_Referencia": "2017-12-04 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 34889,
      "QtdFinalizadas": 19638,
      "QtdAbandonadas": 25778
    },
    {
      "Dat_Referencia": "2017-12-05 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 34779,
      "QtdFinalizadas": 18575,
      "QtdAbandonadas": 25442
    },
    {
      "Dat_Referencia": "2017-12-06 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 35543,
      "QtdFinalizadas": 17621,
      "QtdAbandonadas": 25388
    },
    {
      "Dat_Referencia": "2017-12-07 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 28652,
      "QtdFinalizadas": 12165,
      "QtdAbandonadas": 19798
    },
    {
      "Dat_Referencia": "2017-12-08 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 21095,
      "QtdFinalizadas": 7967,
      "QtdAbandonadas": 15712
    },
    {
      "Dat_Referencia": "2017-12-09 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 15408,
      "QtdFinalizadas": 5583,
      "QtdAbandonadas": 11791
    },
    {
      "Dat_Referencia": "2017-12-10 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 9408,
      "QtdFinalizadas": 3914,
      "QtdAbandonadas": 7121
    },
    {
      "Dat_Referencia": "2017-12-11 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 28300,
      "QtdFinalizadas": 10632,
      "QtdAbandonadas": 20536
    },
    {
      "Dat_Referencia": "2017-12-12 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 26574,
      "QtdFinalizadas": 8243,
      "QtdAbandonadas": 19618
    },
    {
      "Dat_Referencia": "2017-12-13 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 25298,
      "QtdFinalizadas": 7232,
      "QtdAbandonadas": 18591
    },
    {
      "Dat_Referencia": "2017-12-14 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 18954,
      "QtdFinalizadas": 5418,
      "QtdAbandonadas": 14266
    },
    {
      "Dat_Referencia": "2017-12-15 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 19492,
      "QtdFinalizadas": 6229,
      "QtdAbandonadas": 14228
    },
    {
      "Dat_Referencia": "2017-12-16 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 16974,
      "QtdFinalizadas": 6191,
      "QtdAbandonadas": 11852
    },
    {
      "Dat_Referencia": "2017-12-17 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 10218,
      "QtdFinalizadas": 3785,
      "QtdAbandonadas": 7387
    },
    {
      "Dat_Referencia": "2017-12-18 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 25848,
      "QtdFinalizadas": 9601,
      "QtdAbandonadas": 17748
    },
    {
      "Dat_Referencia": "2017-12-19 00:00:00.000",
      "Grupo": "Oi TV",
      "QtdDerivadas": 20148,
      "QtdFinalizadas": 6312,
      "QtdAbandonadas": 14953
    },
    {
      "Dat_Referencia": "2017-01-01 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 898,
      "QtdFinalizadas": 779,
      "QtdAbandonadas": 636
    },
    {
      "Dat_Referencia": "2017-01-02 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 27474,
      "QtdFinalizadas": 5787,
      "QtdAbandonadas": 10758
    },
    {
      "Dat_Referencia": "2017-01-03 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 29231,
      "QtdFinalizadas": 6901,
      "QtdAbandonadas": 11152
    },
    {
      "Dat_Referencia": "2017-01-04 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 29443,
      "QtdFinalizadas": 6909,
      "QtdAbandonadas": 14914
    },
    {
      "Dat_Referencia": "2017-01-05 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 27219,
      "QtdFinalizadas": 6199,
      "QtdAbandonadas": 11044
    },
    {
      "Dat_Referencia": "2017-01-06 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22010,
      "QtdFinalizadas": 4770,
      "QtdAbandonadas": 8996
    },
    {
      "Dat_Referencia": "2017-01-07 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 5673,
      "QtdFinalizadas": 1948,
      "QtdAbandonadas": 2804
    },
    {
      "Dat_Referencia": "2017-01-08 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1705,
      "QtdFinalizadas": 949,
      "QtdAbandonadas": 1027
    },
    {
      "Dat_Referencia": "2017-01-09 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 31236,
      "QtdFinalizadas": 6684,
      "QtdAbandonadas": 12336
    },
    {
      "Dat_Referencia": "2017-01-10 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 38567,
      "QtdFinalizadas": 7509,
      "QtdAbandonadas": 15323
    },
    {
      "Dat_Referencia": "2017-01-11 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 31723,
      "QtdFinalizadas": 6214,
      "QtdAbandonadas": 12414
    },
    {
      "Dat_Referencia": "2017-01-12 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 28150,
      "QtdFinalizadas": 5995,
      "QtdAbandonadas": 11012
    },
    {
      "Dat_Referencia": "2017-01-13 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 27003,
      "QtdFinalizadas": 5508,
      "QtdAbandonadas": 10214
    },
    {
      "Dat_Referencia": "2017-01-14 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 6543,
      "QtdFinalizadas": 1939,
      "QtdAbandonadas": 2742
    },
    {
      "Dat_Referencia": "2017-01-15 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1704,
      "QtdFinalizadas": 887,
      "QtdAbandonadas": 1043
    },
    {
      "Dat_Referencia": "2017-01-16 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 33108,
      "QtdFinalizadas": 6007,
      "QtdAbandonadas": 13151
    },
    {
      "Dat_Referencia": "2017-01-17 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 30304,
      "QtdFinalizadas": 6038,
      "QtdAbandonadas": 12091
    },
    {
      "Dat_Referencia": "2017-01-18 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 27194,
      "QtdFinalizadas": 5722,
      "QtdAbandonadas": 12942
    },
    {
      "Dat_Referencia": "2017-01-19 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 25125,
      "QtdFinalizadas": 4918,
      "QtdAbandonadas": 10378
    },
    {
      "Dat_Referencia": "2017-01-20 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 20608,
      "QtdFinalizadas": 4257,
      "QtdAbandonadas": 8011
    },
    {
      "Dat_Referencia": "2017-01-21 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 5873,
      "QtdFinalizadas": 1756,
      "QtdAbandonadas": 2534
    },
    {
      "Dat_Referencia": "2017-01-22 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1835,
      "QtdFinalizadas": 899,
      "QtdAbandonadas": 1034
    },
    {
      "Dat_Referencia": "2017-01-23 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 29202,
      "QtdFinalizadas": 5659,
      "QtdAbandonadas": 11188
    },
    {
      "Dat_Referencia": "2017-01-24 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 27502,
      "QtdFinalizadas": 5478,
      "QtdAbandonadas": 10658
    },
    {
      "Dat_Referencia": "2017-01-25 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 29390,
      "QtdFinalizadas": 5860,
      "QtdAbandonadas": 11383
    },
    {
      "Dat_Referencia": "2017-01-26 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 26972,
      "QtdFinalizadas": 5877,
      "QtdAbandonadas": 11450
    },
    {
      "Dat_Referencia": "2017-01-27 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22599,
      "QtdFinalizadas": 4940,
      "QtdAbandonadas": 8842
    },
    {
      "Dat_Referencia": "2017-01-28 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 5755,
      "QtdFinalizadas": 1987,
      "QtdAbandonadas": 2396
    },
    {
      "Dat_Referencia": "2017-01-29 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1777,
      "QtdFinalizadas": 986,
      "QtdAbandonadas": 1057
    },
    {
      "Dat_Referencia": "2017-01-30 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 28106,
      "QtdFinalizadas": 6218,
      "QtdAbandonadas": 12497
    },
    {
      "Dat_Referencia": "2017-01-31 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 27016,
      "QtdFinalizadas": 5466,
      "QtdAbandonadas": 10810
    },
    {
      "Dat_Referencia": "2017-02-01 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 29828,
      "QtdFinalizadas": 6358,
      "QtdAbandonadas": 12368
    },
    {
      "Dat_Referencia": "2017-02-02 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 30478,
      "QtdFinalizadas": 6092,
      "QtdAbandonadas": 11806
    },
    {
      "Dat_Referencia": "2017-02-03 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 27249,
      "QtdFinalizadas": 5768,
      "QtdAbandonadas": 10906
    },
    {
      "Dat_Referencia": "2017-02-04 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 6938,
      "QtdFinalizadas": 2070,
      "QtdAbandonadas": 3039
    },
    {
      "Dat_Referencia": "2017-02-05 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1929,
      "QtdFinalizadas": 1059,
      "QtdAbandonadas": 1228
    },
    {
      "Dat_Referencia": "2017-02-06 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 37456,
      "QtdFinalizadas": 7551,
      "QtdAbandonadas": 14075
    },
    {
      "Dat_Referencia": "2017-02-07 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 31947,
      "QtdFinalizadas": 6891,
      "QtdAbandonadas": 14336
    },
    {
      "Dat_Referencia": "2017-02-08 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 30642,
      "QtdFinalizadas": 6611,
      "QtdAbandonadas": 12216
    },
    {
      "Dat_Referencia": "2017-02-09 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 32225,
      "QtdFinalizadas": 6765,
      "QtdAbandonadas": 12135
    },
    {
      "Dat_Referencia": "2017-02-10 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 28727,
      "QtdFinalizadas": 5843,
      "QtdAbandonadas": 10846
    },
    {
      "Dat_Referencia": "2017-02-11 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 7141,
      "QtdFinalizadas": 1730,
      "QtdAbandonadas": 3095
    },
    {
      "Dat_Referencia": "2017-02-12 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 2034,
      "QtdFinalizadas": 534,
      "QtdAbandonadas": 1416
    },
    {
      "Dat_Referencia": "2017-02-13 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 35291,
      "QtdFinalizadas": 6507,
      "QtdAbandonadas": 13260
    },
    {
      "Dat_Referencia": "2017-02-14 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 34437,
      "QtdFinalizadas": 5922,
      "QtdAbandonadas": 12021
    },
    {
      "Dat_Referencia": "2017-02-15 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 27804,
      "QtdFinalizadas": 5167,
      "QtdAbandonadas": 10782
    },
    {
      "Dat_Referencia": "2017-02-16 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 26128,
      "QtdFinalizadas": 5267,
      "QtdAbandonadas": 10585
    },
    {
      "Dat_Referencia": "2017-02-17 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22541,
      "QtdFinalizadas": 4686,
      "QtdAbandonadas": 9365
    },
    {
      "Dat_Referencia": "2017-02-18 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 5875,
      "QtdFinalizadas": 1413,
      "QtdAbandonadas": 2632
    },
    {
      "Dat_Referencia": "2017-02-19 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1672,
      "QtdFinalizadas": 590,
      "QtdAbandonadas": 1013
    },
    {
      "Dat_Referencia": "2017-02-20 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 28496,
      "QtdFinalizadas": 6089,
      "QtdAbandonadas": 11251
    },
    {
      "Dat_Referencia": "2017-02-21 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 26494,
      "QtdFinalizadas": 5695,
      "QtdAbandonadas": 10477
    },
    {
      "Dat_Referencia": "2017-02-22 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 26552,
      "QtdFinalizadas": 5306,
      "QtdAbandonadas": 10386
    },
    {
      "Dat_Referencia": "2017-02-23 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23642,
      "QtdFinalizadas": 4928,
      "QtdAbandonadas": 9321
    },
    {
      "Dat_Referencia": "2017-02-24 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 20233,
      "QtdFinalizadas": 4744,
      "QtdAbandonadas": 8468
    },
    {
      "Dat_Referencia": "2017-02-25 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4602,
      "QtdFinalizadas": 1390,
      "QtdAbandonadas": 2407
    },
    {
      "Dat_Referencia": "2017-02-26 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1363,
      "QtdFinalizadas": 529,
      "QtdAbandonadas": 903
    },
    {
      "Dat_Referencia": "2017-02-27 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 6322,
      "QtdFinalizadas": 1575,
      "QtdAbandonadas": 3055
    },
    {
      "Dat_Referencia": "2017-02-28 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 3025,
      "QtdFinalizadas": 855,
      "QtdAbandonadas": 1649
    },
    {
      "Dat_Referencia": "2017-03-01 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 19927,
      "QtdFinalizadas": 4249,
      "QtdAbandonadas": 8320
    },
    {
      "Dat_Referencia": "2017-03-02 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 29884,
      "QtdFinalizadas": 6172,
      "QtdAbandonadas": 11968
    },
    {
      "Dat_Referencia": "2017-03-03 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 25996,
      "QtdFinalizadas": 6048,
      "QtdAbandonadas": 10478
    },
    {
      "Dat_Referencia": "2017-03-04 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 6898,
      "QtdFinalizadas": 2312,
      "QtdAbandonadas": 3283
    },
    {
      "Dat_Referencia": "2017-03-05 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1874,
      "QtdFinalizadas": 1015,
      "QtdAbandonadas": 1233
    },
    {
      "Dat_Referencia": "2017-03-06 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 32668,
      "QtdFinalizadas": 7062,
      "QtdAbandonadas": 13290
    },
    {
      "Dat_Referencia": "2017-03-07 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 32643,
      "QtdFinalizadas": 7814,
      "QtdAbandonadas": 15382
    },
    {
      "Dat_Referencia": "2017-03-08 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 28735,
      "QtdFinalizadas": 6498,
      "QtdAbandonadas": 12145
    },
    {
      "Dat_Referencia": "2017-03-09 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 25867,
      "QtdFinalizadas": 6455,
      "QtdAbandonadas": 11987
    },
    {
      "Dat_Referencia": "2017-03-10 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 5296,
      "QtdFinalizadas": 1517,
      "QtdAbandonadas": 1910
    },
    {
      "Dat_Referencia": "2017-03-13 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 487,
      "QtdFinalizadas": 113,
      "QtdAbandonadas": 196
    },
    {
      "Dat_Referencia": "2017-03-14 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 13356,
      "QtdFinalizadas": 2775,
      "QtdAbandonadas": 5566
    },
    {
      "Dat_Referencia": "2017-03-15 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 26942,
      "QtdFinalizadas": 6397,
      "QtdAbandonadas": 10992
    },
    {
      "Dat_Referencia": "2017-03-16 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 25300,
      "QtdFinalizadas": 6318,
      "QtdAbandonadas": 10176
    },
    {
      "Dat_Referencia": "2017-03-17 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22702,
      "QtdFinalizadas": 5670,
      "QtdAbandonadas": 9955
    },
    {
      "Dat_Referencia": "2017-03-18 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 6272,
      "QtdFinalizadas": 2304,
      "QtdAbandonadas": 2907
    },
    {
      "Dat_Referencia": "2017-03-19 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 2027,
      "QtdFinalizadas": 1297,
      "QtdAbandonadas": 1378
    },
    {
      "Dat_Referencia": "2017-03-20 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 30805,
      "QtdFinalizadas": 6940,
      "QtdAbandonadas": 12040
    },
    {
      "Dat_Referencia": "2017-03-21 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 27873,
      "QtdFinalizadas": 6430,
      "QtdAbandonadas": 10873
    },
    {
      "Dat_Referencia": "2017-03-22 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 26004,
      "QtdFinalizadas": 6051,
      "QtdAbandonadas": 9664
    },
    {
      "Dat_Referencia": "2017-03-23 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 24966,
      "QtdFinalizadas": 5859,
      "QtdAbandonadas": 9356
    },
    {
      "Dat_Referencia": "2017-03-24 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21858,
      "QtdFinalizadas": 5344,
      "QtdAbandonadas": 8583
    },
    {
      "Dat_Referencia": "2017-03-25 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 5552,
      "QtdFinalizadas": 2167,
      "QtdAbandonadas": 2519
    },
    {
      "Dat_Referencia": "2017-03-26 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1723,
      "QtdFinalizadas": 1269,
      "QtdAbandonadas": 1182
    },
    {
      "Dat_Referencia": "2017-03-27 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 26203,
      "QtdFinalizadas": 6368,
      "QtdAbandonadas": 9991
    },
    {
      "Dat_Referencia": "2017-03-28 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 24950,
      "QtdFinalizadas": 5672,
      "QtdAbandonadas": 9439
    },
    {
      "Dat_Referencia": "2017-03-29 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 28429,
      "QtdFinalizadas": 5946,
      "QtdAbandonadas": 10191
    },
    {
      "Dat_Referencia": "2017-03-30 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23977,
      "QtdFinalizadas": 5848,
      "QtdAbandonadas": 10490
    },
    {
      "Dat_Referencia": "2017-03-31 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22641,
      "QtdFinalizadas": 5020,
      "QtdAbandonadas": 8429
    },
    {
      "Dat_Referencia": "2017-04-01 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 5790,
      "QtdFinalizadas": 1662,
      "QtdAbandonadas": 2659
    },
    {
      "Dat_Referencia": "2017-04-02 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1789,
      "QtdFinalizadas": 1278,
      "QtdAbandonadas": 1242
    },
    {
      "Dat_Referencia": "2017-04-03 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 28510,
      "QtdFinalizadas": 6545,
      "QtdAbandonadas": 10152
    },
    {
      "Dat_Referencia": "2017-04-04 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 29059,
      "QtdFinalizadas": 6683,
      "QtdAbandonadas": 10349
    },
    {
      "Dat_Referencia": "2017-04-05 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 25685,
      "QtdFinalizadas": 6055,
      "QtdAbandonadas": 9783
    },
    {
      "Dat_Referencia": "2017-04-06 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 24981,
      "QtdFinalizadas": 5727,
      "QtdAbandonadas": 9379
    },
    {
      "Dat_Referencia": "2017-04-07 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21724,
      "QtdFinalizadas": 5016,
      "QtdAbandonadas": 8620
    },
    {
      "Dat_Referencia": "2017-04-08 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 5481,
      "QtdFinalizadas": 2171,
      "QtdAbandonadas": 2713
    },
    {
      "Dat_Referencia": "2017-04-09 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1783,
      "QtdFinalizadas": 1228,
      "QtdAbandonadas": 1222
    },
    {
      "Dat_Referencia": "2017-04-10 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 26943,
      "QtdFinalizadas": 6493,
      "QtdAbandonadas": 10349
    },
    {
      "Dat_Referencia": "2017-04-11 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 26890,
      "QtdFinalizadas": 7303,
      "QtdAbandonadas": 12912
    },
    {
      "Dat_Referencia": "2017-04-12 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23927,
      "QtdFinalizadas": 5307,
      "QtdAbandonadas": 9820
    },
    {
      "Dat_Referencia": "2017-04-13 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 19652,
      "QtdFinalizadas": 4460,
      "QtdAbandonadas": 8007
    },
    {
      "Dat_Referencia": "2017-04-14 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 2484,
      "QtdFinalizadas": 1455,
      "QtdAbandonadas": 1688
    },
    {
      "Dat_Referencia": "2017-04-15 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 5191,
      "QtdFinalizadas": 1960,
      "QtdAbandonadas": 2609
    },
    {
      "Dat_Referencia": "2017-04-16 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1421,
      "QtdFinalizadas": 1131,
      "QtdAbandonadas": 1176
    },
    {
      "Dat_Referencia": "2017-04-17 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 31137,
      "QtdFinalizadas": 6054,
      "QtdAbandonadas": 12411
    },
    {
      "Dat_Referencia": "2017-04-18 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 26451,
      "QtdFinalizadas": 5636,
      "QtdAbandonadas": 10569
    },
    {
      "Dat_Referencia": "2017-04-19 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23018,
      "QtdFinalizadas": 4941,
      "QtdAbandonadas": 9636
    },
    {
      "Dat_Referencia": "2017-04-20 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21084,
      "QtdFinalizadas": 4511,
      "QtdAbandonadas": 9315
    },
    {
      "Dat_Referencia": "2017-04-21 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 3238,
      "QtdFinalizadas": 1550,
      "QtdAbandonadas": 1910
    },
    {
      "Dat_Referencia": "2017-04-22 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 5279,
      "QtdFinalizadas": 1879,
      "QtdAbandonadas": 2693
    },
    {
      "Dat_Referencia": "2017-04-23 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1557,
      "QtdFinalizadas": 1210,
      "QtdAbandonadas": 1319
    },
    {
      "Dat_Referencia": "2017-04-24 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 26134,
      "QtdFinalizadas": 5597,
      "QtdAbandonadas": 10677
    },
    {
      "Dat_Referencia": "2017-04-25 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 24246,
      "QtdFinalizadas": 5239,
      "QtdAbandonadas": 10187
    },
    {
      "Dat_Referencia": "2017-04-26 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 25710,
      "QtdFinalizadas": 6750,
      "QtdAbandonadas": 11237
    },
    {
      "Dat_Referencia": "2017-04-27 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23211,
      "QtdFinalizadas": 4871,
      "QtdAbandonadas": 9712
    },
    {
      "Dat_Referencia": "2017-04-28 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 17075,
      "QtdFinalizadas": 3846,
      "QtdAbandonadas": 8226
    },
    {
      "Dat_Referencia": "2017-04-29 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 5125,
      "QtdFinalizadas": 1484,
      "QtdAbandonadas": 2884
    },
    {
      "Dat_Referencia": "2017-04-30 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1543,
      "QtdFinalizadas": 1077,
      "QtdAbandonadas": 1190
    },
    {
      "Dat_Referencia": "2017-05-01 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 2640,
      "QtdFinalizadas": 1493,
      "QtdAbandonadas": 1796
    },
    {
      "Dat_Referencia": "2017-05-02 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 28623,
      "QtdFinalizadas": 6433,
      "QtdAbandonadas": 12953
    },
    {
      "Dat_Referencia": "2017-05-03 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 26205,
      "QtdFinalizadas": 5566,
      "QtdAbandonadas": 10826
    },
    {
      "Dat_Referencia": "2017-05-04 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 25912,
      "QtdFinalizadas": 5944,
      "QtdAbandonadas": 10807
    },
    {
      "Dat_Referencia": "2017-05-05 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21632,
      "QtdFinalizadas": 4464,
      "QtdAbandonadas": 9472
    },
    {
      "Dat_Referencia": "2017-05-06 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 5409,
      "QtdFinalizadas": 1646,
      "QtdAbandonadas": 3046
    },
    {
      "Dat_Referencia": "2017-05-07 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1657,
      "QtdFinalizadas": 609,
      "QtdAbandonadas": 1317
    },
    {
      "Dat_Referencia": "2017-05-08 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 27945,
      "QtdFinalizadas": 5757,
      "QtdAbandonadas": 12662
    },
    {
      "Dat_Referencia": "2017-05-09 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 27106,
      "QtdFinalizadas": 6258,
      "QtdAbandonadas": 12599
    },
    {
      "Dat_Referencia": "2017-05-10 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 25678,
      "QtdFinalizadas": 5984,
      "QtdAbandonadas": 12232
    },
    {
      "Dat_Referencia": "2017-05-11 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 24453,
      "QtdFinalizadas": 5743,
      "QtdAbandonadas": 9953
    },
    {
      "Dat_Referencia": "2017-05-12 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 19314,
      "QtdFinalizadas": 3940,
      "QtdAbandonadas": 10138
    },
    {
      "Dat_Referencia": "2017-05-13 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 5552,
      "QtdFinalizadas": 2333,
      "QtdAbandonadas": 3263
    },
    {
      "Dat_Referencia": "2017-05-14 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1496,
      "QtdFinalizadas": 1056,
      "QtdAbandonadas": 1170
    },
    {
      "Dat_Referencia": "2017-05-15 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 30589,
      "QtdFinalizadas": 5499,
      "QtdAbandonadas": 12493
    },
    {
      "Dat_Referencia": "2017-05-16 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 27052,
      "QtdFinalizadas": 5637,
      "QtdAbandonadas": 11193
    },
    {
      "Dat_Referencia": "2017-05-17 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23057,
      "QtdFinalizadas": 4862,
      "QtdAbandonadas": 10093
    },
    {
      "Dat_Referencia": "2017-05-18 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21593,
      "QtdFinalizadas": 4525,
      "QtdAbandonadas": 9285
    },
    {
      "Dat_Referencia": "2017-05-19 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 20131,
      "QtdFinalizadas": 4651,
      "QtdAbandonadas": 9613
    },
    {
      "Dat_Referencia": "2017-05-20 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 5028,
      "QtdFinalizadas": 1920,
      "QtdAbandonadas": 3183
    },
    {
      "Dat_Referencia": "2017-05-21 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1556,
      "QtdFinalizadas": 1077,
      "QtdAbandonadas": 1184
    },
    {
      "Dat_Referencia": "2017-05-22 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 26628,
      "QtdFinalizadas": 5190,
      "QtdAbandonadas": 11360
    },
    {
      "Dat_Referencia": "2017-05-23 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 24244,
      "QtdFinalizadas": 5366,
      "QtdAbandonadas": 10312
    },
    {
      "Dat_Referencia": "2017-05-24 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22449,
      "QtdFinalizadas": 5004,
      "QtdAbandonadas": 9740
    },
    {
      "Dat_Referencia": "2017-05-25 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 20995,
      "QtdFinalizadas": 4779,
      "QtdAbandonadas": 8697
    },
    {
      "Dat_Referencia": "2017-05-26 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 20052,
      "QtdFinalizadas": 4738,
      "QtdAbandonadas": 9009
    },
    {
      "Dat_Referencia": "2017-05-27 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4996,
      "QtdFinalizadas": 2063,
      "QtdAbandonadas": 2773
    },
    {
      "Dat_Referencia": "2017-05-28 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1686,
      "QtdFinalizadas": 1251,
      "QtdAbandonadas": 1326
    },
    {
      "Dat_Referencia": "2017-05-29 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 25519,
      "QtdFinalizadas": 6147,
      "QtdAbandonadas": 11358
    },
    {
      "Dat_Referencia": "2017-05-30 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 24716,
      "QtdFinalizadas": 5805,
      "QtdAbandonadas": 10992
    },
    {
      "Dat_Referencia": "2017-05-31 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22368,
      "QtdFinalizadas": 5582,
      "QtdAbandonadas": 10914
    },
    {
      "Dat_Referencia": "2017-06-01 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22318,
      "QtdFinalizadas": 5603,
      "QtdAbandonadas": 10329
    },
    {
      "Dat_Referencia": "2017-06-02 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 19050,
      "QtdFinalizadas": 4462,
      "QtdAbandonadas": 8135
    },
    {
      "Dat_Referencia": "2017-06-03 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4711,
      "QtdFinalizadas": 2087,
      "QtdAbandonadas": 2608
    },
    {
      "Dat_Referencia": "2017-06-04 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1570,
      "QtdFinalizadas": 1401,
      "QtdAbandonadas": 1171
    },
    {
      "Dat_Referencia": "2017-06-05 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 25716,
      "QtdFinalizadas": 6468,
      "QtdAbandonadas": 12108
    },
    {
      "Dat_Referencia": "2017-06-06 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 25522,
      "QtdFinalizadas": 6980,
      "QtdAbandonadas": 12221
    },
    {
      "Dat_Referencia": "2017-06-07 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23825,
      "QtdFinalizadas": 5660,
      "QtdAbandonadas": 10619
    },
    {
      "Dat_Referencia": "2017-06-08 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23246,
      "QtdFinalizadas": 5829,
      "QtdAbandonadas": 9721
    },
    {
      "Dat_Referencia": "2017-06-09 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 19748,
      "QtdFinalizadas": 4310,
      "QtdAbandonadas": 8458
    },
    {
      "Dat_Referencia": "2017-06-10 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4745,
      "QtdFinalizadas": 1763,
      "QtdAbandonadas": 2475
    },
    {
      "Dat_Referencia": "2017-06-11 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1653,
      "QtdFinalizadas": 1144,
      "QtdAbandonadas": 1085
    },
    {
      "Dat_Referencia": "2017-06-12 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23701,
      "QtdFinalizadas": 5135,
      "QtdAbandonadas": 9754
    },
    {
      "Dat_Referencia": "2017-06-13 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22832,
      "QtdFinalizadas": 5191,
      "QtdAbandonadas": 9836
    },
    {
      "Dat_Referencia": "2017-06-14 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 36827,
      "QtdFinalizadas": 8260,
      "QtdAbandonadas": 30908
    },
    {
      "Dat_Referencia": "2017-06-15 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 3993,
      "QtdFinalizadas": 1732,
      "QtdAbandonadas": 2165
    },
    {
      "Dat_Referencia": "2017-06-16 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 20270,
      "QtdFinalizadas": 4380,
      "QtdAbandonadas": 8817
    },
    {
      "Dat_Referencia": "2017-06-17 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4999,
      "QtdFinalizadas": 1959,
      "QtdAbandonadas": 2551
    },
    {
      "Dat_Referencia": "2017-06-18 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1611,
      "QtdFinalizadas": 1057,
      "QtdAbandonadas": 1158
    },
    {
      "Dat_Referencia": "2017-06-19 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 24816,
      "QtdFinalizadas": 5220,
      "QtdAbandonadas": 10540
    },
    {
      "Dat_Referencia": "2017-06-20 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22073,
      "QtdFinalizadas": 4890,
      "QtdAbandonadas": 9480
    },
    {
      "Dat_Referencia": "2017-06-21 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21976,
      "QtdFinalizadas": 4754,
      "QtdAbandonadas": 9810
    },
    {
      "Dat_Referencia": "2017-06-22 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 20287,
      "QtdFinalizadas": 4632,
      "QtdAbandonadas": 9034
    },
    {
      "Dat_Referencia": "2017-06-23 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 16452,
      "QtdFinalizadas": 3848,
      "QtdAbandonadas": 7523
    },
    {
      "Dat_Referencia": "2017-06-24 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 3867,
      "QtdFinalizadas": 1695,
      "QtdAbandonadas": 2121
    },
    {
      "Dat_Referencia": "2017-06-25 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1543,
      "QtdFinalizadas": 1205,
      "QtdAbandonadas": 1224
    },
    {
      "Dat_Referencia": "2017-06-26 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23590,
      "QtdFinalizadas": 5191,
      "QtdAbandonadas": 9918
    },
    {
      "Dat_Referencia": "2017-06-27 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22053,
      "QtdFinalizadas": 5093,
      "QtdAbandonadas": 8898
    },
    {
      "Dat_Referencia": "2017-06-28 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21647,
      "QtdFinalizadas": 4985,
      "QtdAbandonadas": 9114
    },
    {
      "Dat_Referencia": "2017-06-29 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 20022,
      "QtdFinalizadas": 5157,
      "QtdAbandonadas": 8692
    },
    {
      "Dat_Referencia": "2017-06-30 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 17242,
      "QtdFinalizadas": 4506,
      "QtdAbandonadas": 8282
    },
    {
      "Dat_Referencia": "2017-07-01 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4521,
      "QtdFinalizadas": 2031,
      "QtdAbandonadas": 2575
    },
    {
      "Dat_Referencia": "2017-07-02 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1400,
      "QtdFinalizadas": 1108,
      "QtdAbandonadas": 1001
    },
    {
      "Dat_Referencia": "2017-07-03 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23783,
      "QtdFinalizadas": 6003,
      "QtdAbandonadas": 11165
    },
    {
      "Dat_Referencia": "2017-07-04 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 24571,
      "QtdFinalizadas": 6551,
      "QtdAbandonadas": 10852
    },
    {
      "Dat_Referencia": "2017-07-05 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21941,
      "QtdFinalizadas": 6269,
      "QtdAbandonadas": 11772
    },
    {
      "Dat_Referencia": "2017-07-06 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21457,
      "QtdFinalizadas": 5383,
      "QtdAbandonadas": 10076
    },
    {
      "Dat_Referencia": "2017-07-07 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 18324,
      "QtdFinalizadas": 4647,
      "QtdAbandonadas": 8485
    },
    {
      "Dat_Referencia": "2017-07-08 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 5894,
      "QtdFinalizadas": 1996,
      "QtdAbandonadas": 2761
    },
    {
      "Dat_Referencia": "2017-07-09 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1590,
      "QtdFinalizadas": 1143,
      "QtdAbandonadas": 1089
    },
    {
      "Dat_Referencia": "2017-07-10 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 24849,
      "QtdFinalizadas": 5652,
      "QtdAbandonadas": 10274
    },
    {
      "Dat_Referencia": "2017-07-11 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23419,
      "QtdFinalizadas": 6047,
      "QtdAbandonadas": 9388
    },
    {
      "Dat_Referencia": "2017-07-12 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23044,
      "QtdFinalizadas": 4713,
      "QtdAbandonadas": 9484
    },
    {
      "Dat_Referencia": "2017-07-13 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21200,
      "QtdFinalizadas": 4814,
      "QtdAbandonadas": 8284
    },
    {
      "Dat_Referencia": "2017-07-14 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 18158,
      "QtdFinalizadas": 4169,
      "QtdAbandonadas": 7841
    },
    {
      "Dat_Referencia": "2017-07-15 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4624,
      "QtdFinalizadas": 1299,
      "QtdAbandonadas": 2206
    },
    {
      "Dat_Referencia": "2017-07-16 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1506,
      "QtdFinalizadas": 600,
      "QtdAbandonadas": 1059
    },
    {
      "Dat_Referencia": "2017-07-17 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22283,
      "QtdFinalizadas": 5162,
      "QtdAbandonadas": 9111
    },
    {
      "Dat_Referencia": "2017-07-18 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 20457,
      "QtdFinalizadas": 4823,
      "QtdAbandonadas": 8213
    },
    {
      "Dat_Referencia": "2017-07-19 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 19832,
      "QtdFinalizadas": 4705,
      "QtdAbandonadas": 8185
    },
    {
      "Dat_Referencia": "2017-07-20 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 18624,
      "QtdFinalizadas": 4604,
      "QtdAbandonadas": 7450
    },
    {
      "Dat_Referencia": "2017-07-21 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 16930,
      "QtdFinalizadas": 4045,
      "QtdAbandonadas": 6833
    },
    {
      "Dat_Referencia": "2017-07-22 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4468,
      "QtdFinalizadas": 1338,
      "QtdAbandonadas": 2243
    },
    {
      "Dat_Referencia": "2017-07-23 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1554,
      "QtdFinalizadas": 582,
      "QtdAbandonadas": 1252
    },
    {
      "Dat_Referencia": "2017-07-24 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21102,
      "QtdFinalizadas": 5030,
      "QtdAbandonadas": 8918
    },
    {
      "Dat_Referencia": "2017-07-25 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 19962,
      "QtdFinalizadas": 4816,
      "QtdAbandonadas": 8837
    },
    {
      "Dat_Referencia": "2017-07-26 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 19395,
      "QtdFinalizadas": 4500,
      "QtdAbandonadas": 8460
    },
    {
      "Dat_Referencia": "2017-07-27 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 19389,
      "QtdFinalizadas": 4921,
      "QtdAbandonadas": 7865
    },
    {
      "Dat_Referencia": "2017-07-28 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 15949,
      "QtdFinalizadas": 4221,
      "QtdAbandonadas": 7324
    },
    {
      "Dat_Referencia": "2017-07-29 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4124,
      "QtdFinalizadas": 1365,
      "QtdAbandonadas": 2034
    },
    {
      "Dat_Referencia": "2017-07-30 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1242,
      "QtdFinalizadas": 557,
      "QtdAbandonadas": 746
    },
    {
      "Dat_Referencia": "2017-07-31 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22793,
      "QtdFinalizadas": 5853,
      "QtdAbandonadas": 11278
    },
    {
      "Dat_Referencia": "2017-08-01 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 24542,
      "QtdFinalizadas": 6254,
      "QtdAbandonadas": 10018
    },
    {
      "Dat_Referencia": "2017-08-02 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21094,
      "QtdFinalizadas": 5959,
      "QtdAbandonadas": 9926
    },
    {
      "Dat_Referencia": "2017-08-03 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21371,
      "QtdFinalizadas": 5500,
      "QtdAbandonadas": 9902
    },
    {
      "Dat_Referencia": "2017-08-04 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 18566,
      "QtdFinalizadas": 5139,
      "QtdAbandonadas": 7724
    },
    {
      "Dat_Referencia": "2017-08-05 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4563,
      "QtdFinalizadas": 1452,
      "QtdAbandonadas": 2933
    },
    {
      "Dat_Referencia": "2017-08-06 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1531,
      "QtdFinalizadas": 1158,
      "QtdAbandonadas": 967
    },
    {
      "Dat_Referencia": "2017-08-07 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22831,
      "QtdFinalizadas": 5322,
      "QtdAbandonadas": 9774
    },
    {
      "Dat_Referencia": "2017-08-08 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23176,
      "QtdFinalizadas": 7048,
      "QtdAbandonadas": 10283
    },
    {
      "Dat_Referencia": "2017-08-09 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22555,
      "QtdFinalizadas": 5654,
      "QtdAbandonadas": 9804
    },
    {
      "Dat_Referencia": "2017-08-10 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21632,
      "QtdFinalizadas": 5783,
      "QtdAbandonadas": 8431
    },
    {
      "Dat_Referencia": "2017-08-11 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 18812,
      "QtdFinalizadas": 4564,
      "QtdAbandonadas": 8245
    },
    {
      "Dat_Referencia": "2017-08-12 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4481,
      "QtdFinalizadas": 1945,
      "QtdAbandonadas": 2285
    },
    {
      "Dat_Referencia": "2017-08-13 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1234,
      "QtdFinalizadas": 644,
      "QtdAbandonadas": 1358
    },
    {
      "Dat_Referencia": "2017-08-14 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23774,
      "QtdFinalizadas": 5677,
      "QtdAbandonadas": 9623
    },
    {
      "Dat_Referencia": "2017-08-15 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 20216,
      "QtdFinalizadas": 4917,
      "QtdAbandonadas": 8620
    },
    {
      "Dat_Referencia": "2017-08-16 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21733,
      "QtdFinalizadas": 6230,
      "QtdAbandonadas": 8952
    },
    {
      "Dat_Referencia": "2017-08-17 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 19870,
      "QtdFinalizadas": 4888,
      "QtdAbandonadas": 8334
    },
    {
      "Dat_Referencia": "2017-08-18 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 16844,
      "QtdFinalizadas": 4449,
      "QtdAbandonadas": 6862
    },
    {
      "Dat_Referencia": "2017-08-19 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4386,
      "QtdFinalizadas": 1359,
      "QtdAbandonadas": 2586
    },
    {
      "Dat_Referencia": "2017-08-20 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1382,
      "QtdFinalizadas": 1109,
      "QtdAbandonadas": 913
    },
    {
      "Dat_Referencia": "2017-08-21 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23018,
      "QtdFinalizadas": 5345,
      "QtdAbandonadas": 9222
    },
    {
      "Dat_Referencia": "2017-08-22 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22137,
      "QtdFinalizadas": 5900,
      "QtdAbandonadas": 8703
    },
    {
      "Dat_Referencia": "2017-08-23 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 20560,
      "QtdFinalizadas": 5093,
      "QtdAbandonadas": 8210
    },
    {
      "Dat_Referencia": "2017-08-24 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 18635,
      "QtdFinalizadas": 4991,
      "QtdAbandonadas": 7724
    },
    {
      "Dat_Referencia": "2017-08-25 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 17109,
      "QtdFinalizadas": 4310,
      "QtdAbandonadas": 9906
    },
    {
      "Dat_Referencia": "2017-08-26 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4255,
      "QtdFinalizadas": 1875,
      "QtdAbandonadas": 2007
    },
    {
      "Dat_Referencia": "2017-08-27 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1274,
      "QtdFinalizadas": 646,
      "QtdAbandonadas": 1264
    },
    {
      "Dat_Referencia": "2017-08-28 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22470,
      "QtdFinalizadas": 5742,
      "QtdAbandonadas": 8650
    },
    {
      "Dat_Referencia": "2017-08-29 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 20519,
      "QtdFinalizadas": 5174,
      "QtdAbandonadas": 8736
    },
    {
      "Dat_Referencia": "2017-08-30 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21944,
      "QtdFinalizadas": 6185,
      "QtdAbandonadas": 9022
    },
    {
      "Dat_Referencia": "2017-08-31 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 20095,
      "QtdFinalizadas": 4986,
      "QtdAbandonadas": 9200
    },
    {
      "Dat_Referencia": "2017-09-01 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 17345,
      "QtdFinalizadas": 5013,
      "QtdAbandonadas": 7490
    },
    {
      "Dat_Referencia": "2017-09-02 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4214,
      "QtdFinalizadas": 1407,
      "QtdAbandonadas": 2731
    },
    {
      "Dat_Referencia": "2017-09-03 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1115,
      "QtdFinalizadas": 1079,
      "QtdAbandonadas": 769
    },
    {
      "Dat_Referencia": "2017-09-04 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 26508,
      "QtdFinalizadas": 5815,
      "QtdAbandonadas": 10669
    },
    {
      "Dat_Referencia": "2017-09-05 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22390,
      "QtdFinalizadas": 6069,
      "QtdAbandonadas": 8800
    },
    {
      "Dat_Referencia": "2017-09-06 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 18425,
      "QtdFinalizadas": 4524,
      "QtdAbandonadas": 8104
    },
    {
      "Dat_Referencia": "2017-09-07 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 2405,
      "QtdFinalizadas": 1546,
      "QtdAbandonadas": 1630
    },
    {
      "Dat_Referencia": "2017-09-08 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 15002,
      "QtdFinalizadas": 3944,
      "QtdAbandonadas": 6748
    },
    {
      "Dat_Referencia": "2017-09-09 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 3819,
      "QtdFinalizadas": 1772,
      "QtdAbandonadas": 1752
    },
    {
      "Dat_Referencia": "2017-09-10 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1251,
      "QtdFinalizadas": 589,
      "QtdAbandonadas": 1314
    },
    {
      "Dat_Referencia": "2017-09-11 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 25460,
      "QtdFinalizadas": 6329,
      "QtdAbandonadas": 10093
    },
    {
      "Dat_Referencia": "2017-09-12 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23911,
      "QtdFinalizadas": 5945,
      "QtdAbandonadas": 9794
    },
    {
      "Dat_Referencia": "2017-09-13 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22381,
      "QtdFinalizadas": 5876,
      "QtdAbandonadas": 8714
    },
    {
      "Dat_Referencia": "2017-09-14 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21239,
      "QtdFinalizadas": 4755,
      "QtdAbandonadas": 8647
    },
    {
      "Dat_Referencia": "2017-09-15 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 18639,
      "QtdFinalizadas": 5016,
      "QtdAbandonadas": 8166
    },
    {
      "Dat_Referencia": "2017-09-16 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4480,
      "QtdFinalizadas": 1522,
      "QtdAbandonadas": 2765
    },
    {
      "Dat_Referencia": "2017-09-17 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1256,
      "QtdFinalizadas": 1139,
      "QtdAbandonadas": 859
    },
    {
      "Dat_Referencia": "2017-09-18 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21645,
      "QtdFinalizadas": 5060,
      "QtdAbandonadas": 9349
    },
    {
      "Dat_Referencia": "2017-09-19 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 19952,
      "QtdFinalizadas": 5407,
      "QtdAbandonadas": 8652
    },
    {
      "Dat_Referencia": "2017-09-20 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 17523,
      "QtdFinalizadas": 4594,
      "QtdAbandonadas": 8766
    },
    {
      "Dat_Referencia": "2017-09-21 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 18421,
      "QtdFinalizadas": 4914,
      "QtdAbandonadas": 7806
    },
    {
      "Dat_Referencia": "2017-09-22 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 15510,
      "QtdFinalizadas": 3667,
      "QtdAbandonadas": 8229
    },
    {
      "Dat_Referencia": "2017-09-23 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 3867,
      "QtdFinalizadas": 1770,
      "QtdAbandonadas": 1959
    },
    {
      "Dat_Referencia": "2017-09-24 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1227,
      "QtdFinalizadas": 489,
      "QtdAbandonadas": 1294
    },
    {
      "Dat_Referencia": "2017-09-25 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22023,
      "QtdFinalizadas": 5655,
      "QtdAbandonadas": 9116
    },
    {
      "Dat_Referencia": "2017-09-26 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 20565,
      "QtdFinalizadas": 4969,
      "QtdAbandonadas": 8997
    },
    {
      "Dat_Referencia": "2017-09-27 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 20573,
      "QtdFinalizadas": 5158,
      "QtdAbandonadas": 7842
    },
    {
      "Dat_Referencia": "2017-09-28 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 19434,
      "QtdFinalizadas": 4448,
      "QtdAbandonadas": 8515
    },
    {
      "Dat_Referencia": "2017-09-29 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 17900,
      "QtdFinalizadas": 4557,
      "QtdAbandonadas": 7108
    },
    {
      "Dat_Referencia": "2017-09-30 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4993,
      "QtdFinalizadas": 1422,
      "QtdAbandonadas": 2833
    },
    {
      "Dat_Referencia": "2017-10-01 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1560,
      "QtdFinalizadas": 650,
      "QtdAbandonadas": 886
    },
    {
      "Dat_Referencia": "2017-10-02 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 24400,
      "QtdFinalizadas": 6296,
      "QtdAbandonadas": 15238
    },
    {
      "Dat_Referencia": "2017-10-03 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 24563,
      "QtdFinalizadas": 5821,
      "QtdAbandonadas": 10587
    },
    {
      "Dat_Referencia": "2017-10-04 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 25378,
      "QtdFinalizadas": 6377,
      "QtdAbandonadas": 10560
    },
    {
      "Dat_Referencia": "2017-10-05 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22466,
      "QtdFinalizadas": 5983,
      "QtdAbandonadas": 9990
    },
    {
      "Dat_Referencia": "2017-10-06 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 19264,
      "QtdFinalizadas": 5125,
      "QtdAbandonadas": 8071
    },
    {
      "Dat_Referencia": "2017-10-07 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4943,
      "QtdFinalizadas": 1423,
      "QtdAbandonadas": 2974
    },
    {
      "Dat_Referencia": "2017-10-08 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1484,
      "QtdFinalizadas": 1126,
      "QtdAbandonadas": 937
    },
    {
      "Dat_Referencia": "2017-10-09 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 25594,
      "QtdFinalizadas": 6037,
      "QtdAbandonadas": 10635
    },
    {
      "Dat_Referencia": "2017-10-10 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 25566,
      "QtdFinalizadas": 6928,
      "QtdAbandonadas": 12319
    },
    {
      "Dat_Referencia": "2017-10-11 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21818,
      "QtdFinalizadas": 4586,
      "QtdAbandonadas": 9252
    },
    {
      "Dat_Referencia": "2017-10-12 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4805,
      "QtdFinalizadas": 2605,
      "QtdAbandonadas": 2119
    },
    {
      "Dat_Referencia": "2017-10-13 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 19046,
      "QtdFinalizadas": 4263,
      "QtdAbandonadas": 9197
    },
    {
      "Dat_Referencia": "2017-10-14 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4980,
      "QtdFinalizadas": 1980,
      "QtdAbandonadas": 2510
    },
    {
      "Dat_Referencia": "2017-10-15 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1588,
      "QtdFinalizadas": 561,
      "QtdAbandonadas": 1637
    },
    {
      "Dat_Referencia": "2017-10-16 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 28647,
      "QtdFinalizadas": 6652,
      "QtdAbandonadas": 11322
    },
    {
      "Dat_Referencia": "2017-10-17 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 25882,
      "QtdFinalizadas": 6167,
      "QtdAbandonadas": 11038
    },
    {
      "Dat_Referencia": "2017-10-18 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22841,
      "QtdFinalizadas": 5465,
      "QtdAbandonadas": 9112
    },
    {
      "Dat_Referencia": "2017-10-19 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 20872,
      "QtdFinalizadas": 4943,
      "QtdAbandonadas": 12378
    },
    {
      "Dat_Referencia": "2017-10-20 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 18148,
      "QtdFinalizadas": 4833,
      "QtdAbandonadas": 7664
    },
    {
      "Dat_Referencia": "2017-10-21 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4674,
      "QtdFinalizadas": 1509,
      "QtdAbandonadas": 2834
    },
    {
      "Dat_Referencia": "2017-10-22 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1464,
      "QtdFinalizadas": 1131,
      "QtdAbandonadas": 1432
    },
    {
      "Dat_Referencia": "2017-10-23 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23060,
      "QtdFinalizadas": 5154,
      "QtdAbandonadas": 10038
    },
    {
      "Dat_Referencia": "2017-10-24 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22058,
      "QtdFinalizadas": 5588,
      "QtdAbandonadas": 9068
    },
    {
      "Dat_Referencia": "2017-10-25 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21802,
      "QtdFinalizadas": 4881,
      "QtdAbandonadas": 9109
    },
    {
      "Dat_Referencia": "2017-10-26 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 20901,
      "QtdFinalizadas": 5315,
      "QtdAbandonadas": 8496
    },
    {
      "Dat_Referencia": "2017-10-27 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 18458,
      "QtdFinalizadas": 4339,
      "QtdAbandonadas": 7852
    },
    {
      "Dat_Referencia": "2017-10-28 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 5431,
      "QtdFinalizadas": 2543,
      "QtdAbandonadas": 2547
    },
    {
      "Dat_Referencia": "2017-10-29 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1580,
      "QtdFinalizadas": 679,
      "QtdAbandonadas": 1503
    },
    {
      "Dat_Referencia": "2017-10-30 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 25521,
      "QtdFinalizadas": 6252,
      "QtdAbandonadas": 9925
    },
    {
      "Dat_Referencia": "2017-10-31 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23099,
      "QtdFinalizadas": 5535,
      "QtdAbandonadas": 9445
    },
    {
      "Dat_Referencia": "2017-11-01 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21098,
      "QtdFinalizadas": 5689,
      "QtdAbandonadas": 8585
    },
    {
      "Dat_Referencia": "2017-11-02 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 2847,
      "QtdFinalizadas": 1041,
      "QtdAbandonadas": 1885
    },
    {
      "Dat_Referencia": "2017-11-03 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 17781,
      "QtdFinalizadas": 4288,
      "QtdAbandonadas": 7175
    },
    {
      "Dat_Referencia": "2017-11-04 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 5040,
      "QtdFinalizadas": 1542,
      "QtdAbandonadas": 2633
    },
    {
      "Dat_Referencia": "2017-11-05 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1503,
      "QtdFinalizadas": 1160,
      "QtdAbandonadas": 1136
    },
    {
      "Dat_Referencia": "2017-11-06 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 28301,
      "QtdFinalizadas": 5991,
      "QtdAbandonadas": 10565
    },
    {
      "Dat_Referencia": "2017-11-07 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23822,
      "QtdFinalizadas": 7082,
      "QtdAbandonadas": 10763
    },
    {
      "Dat_Referencia": "2017-11-08 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23025,
      "QtdFinalizadas": 5564,
      "QtdAbandonadas": 9756
    },
    {
      "Dat_Referencia": "2017-11-09 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21507,
      "QtdFinalizadas": 6086,
      "QtdAbandonadas": 9087
    },
    {
      "Dat_Referencia": "2017-11-10 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 19221,
      "QtdFinalizadas": 5122,
      "QtdAbandonadas": 9163
    },
    {
      "Dat_Referencia": "2017-11-11 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 5336,
      "QtdFinalizadas": 2207,
      "QtdAbandonadas": 2600
    },
    {
      "Dat_Referencia": "2017-11-12 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1531,
      "QtdFinalizadas": 717,
      "QtdAbandonadas": 1584
    },
    {
      "Dat_Referencia": "2017-11-13 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23320,
      "QtdFinalizadas": 6370,
      "QtdAbandonadas": 9439
    },
    {
      "Dat_Referencia": "2017-11-14 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22180,
      "QtdFinalizadas": 5678,
      "QtdAbandonadas": 9323
    },
    {
      "Dat_Referencia": "2017-11-15 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 3404,
      "QtdFinalizadas": 1769,
      "QtdAbandonadas": 2235
    },
    {
      "Dat_Referencia": "2017-11-16 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23626,
      "QtdFinalizadas": 6135,
      "QtdAbandonadas": 10437
    },
    {
      "Dat_Referencia": "2017-11-17 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 18741,
      "QtdFinalizadas": 5438,
      "QtdAbandonadas": 8076
    },
    {
      "Dat_Referencia": "2017-11-18 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4992,
      "QtdFinalizadas": 1824,
      "QtdAbandonadas": 3170
    },
    {
      "Dat_Referencia": "2017-11-19 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1532,
      "QtdFinalizadas": 1236,
      "QtdAbandonadas": 1153
    },
    {
      "Dat_Referencia": "2017-11-20 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 18512,
      "QtdFinalizadas": 4829,
      "QtdAbandonadas": 8234
    },
    {
      "Dat_Referencia": "2017-11-21 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23440,
      "QtdFinalizadas": 6793,
      "QtdAbandonadas": 9922
    },
    {
      "Dat_Referencia": "2017-11-22 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23968,
      "QtdFinalizadas": 6258,
      "QtdAbandonadas": 10033
    },
    {
      "Dat_Referencia": "2017-11-23 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 20538,
      "QtdFinalizadas": 6035,
      "QtdAbandonadas": 8737
    },
    {
      "Dat_Referencia": "2017-11-24 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 17048,
      "QtdFinalizadas": 4625,
      "QtdAbandonadas": 8961
    },
    {
      "Dat_Referencia": "2017-11-25 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4556,
      "QtdFinalizadas": 2119,
      "QtdAbandonadas": 2708
    },
    {
      "Dat_Referencia": "2017-11-26 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1488,
      "QtdFinalizadas": 772,
      "QtdAbandonadas": 1593
    },
    {
      "Dat_Referencia": "2017-11-27 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23525,
      "QtdFinalizadas": 5972,
      "QtdAbandonadas": 9464
    },
    {
      "Dat_Referencia": "2017-11-28 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21641,
      "QtdFinalizadas": 5764,
      "QtdAbandonadas": 9953
    },
    {
      "Dat_Referencia": "2017-11-29 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 20486,
      "QtdFinalizadas": 5839,
      "QtdAbandonadas": 9285
    },
    {
      "Dat_Referencia": "2017-11-30 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 19433,
      "QtdFinalizadas": 5282,
      "QtdAbandonadas": 9470
    },
    {
      "Dat_Referencia": "2017-12-01 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 18723,
      "QtdFinalizadas": 5607,
      "QtdAbandonadas": 8895
    },
    {
      "Dat_Referencia": "2017-12-02 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4658,
      "QtdFinalizadas": 1669,
      "QtdAbandonadas": 3129
    },
    {
      "Dat_Referencia": "2017-12-03 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1447,
      "QtdFinalizadas": 1356,
      "QtdAbandonadas": 1155
    },
    {
      "Dat_Referencia": "2017-12-04 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 22237,
      "QtdFinalizadas": 6394,
      "QtdAbandonadas": 10989
    },
    {
      "Dat_Referencia": "2017-12-05 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 24411,
      "QtdFinalizadas": 6805,
      "QtdAbandonadas": 10847
    },
    {
      "Dat_Referencia": "2017-12-06 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21635,
      "QtdFinalizadas": 5632,
      "QtdAbandonadas": 10218
    },
    {
      "Dat_Referencia": "2017-12-07 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 19970,
      "QtdFinalizadas": 5832,
      "QtdAbandonadas": 10329
    },
    {
      "Dat_Referencia": "2017-12-08 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 15180,
      "QtdFinalizadas": 4221,
      "QtdAbandonadas": 7506
    },
    {
      "Dat_Referencia": "2017-12-09 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 5150,
      "QtdFinalizadas": 2177,
      "QtdAbandonadas": 2896
    },
    {
      "Dat_Referencia": "2017-12-10 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1559,
      "QtdFinalizadas": 736,
      "QtdAbandonadas": 1512
    },
    {
      "Dat_Referencia": "2017-12-11 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 25324,
      "QtdFinalizadas": 7091,
      "QtdAbandonadas": 11211
    },
    {
      "Dat_Referencia": "2017-12-12 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 23139,
      "QtdFinalizadas": 6371,
      "QtdAbandonadas": 10659
    },
    {
      "Dat_Referencia": "2017-12-13 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 20650,
      "QtdFinalizadas": 5675,
      "QtdAbandonadas": 8899
    },
    {
      "Dat_Referencia": "2017-12-14 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 20197,
      "QtdFinalizadas": 5046,
      "QtdAbandonadas": 8913
    },
    {
      "Dat_Referencia": "2017-12-15 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 16379,
      "QtdFinalizadas": 4719,
      "QtdAbandonadas": 7973
    },
    {
      "Dat_Referencia": "2017-12-16 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 4333,
      "QtdFinalizadas": 1507,
      "QtdAbandonadas": 2809
    },
    {
      "Dat_Referencia": "2017-12-17 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 1435,
      "QtdFinalizadas": 1133,
      "QtdAbandonadas": 966
    },
    {
      "Dat_Referencia": "2017-12-18 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 21878,
      "QtdFinalizadas": 5372,
      "QtdAbandonadas": 10114
    },
    {
      "Dat_Referencia": "2017-12-19 00:00:00.000",
      "Grupo": "Empresarial",
      "QtdDerivadas": 19198,
      "QtdFinalizadas": 5439,
      "QtdAbandonadas": 8978
    },
    {
      "Dat_Referencia": "2017-01-01 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 454269,
      "QtdAbandonadas": 435138
    },
    {
      "Dat_Referencia": "2017-01-02 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 558482,
      "QtdAbandonadas": 571964
    },
    {
      "Dat_Referencia": "2017-01-03 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 482252,
      "QtdAbandonadas": 568023
    },
    {
      "Dat_Referencia": "2017-01-04 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 506980,
      "QtdAbandonadas": 485233
    },
    {
      "Dat_Referencia": "2017-01-05 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 485325,
      "QtdAbandonadas": 485425
    },
    {
      "Dat_Referencia": "2017-01-06 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 489860,
      "QtdAbandonadas": 465514
    },
    {
      "Dat_Referencia": "2017-01-07 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 457793,
      "QtdAbandonadas": 442711
    },
    {
      "Dat_Referencia": "2017-01-08 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 391088,
      "QtdAbandonadas": 351197
    },
    {
      "Dat_Referencia": "2017-01-09 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 458576,
      "QtdAbandonadas": 424753
    },
    {
      "Dat_Referencia": "2017-01-10 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 462620,
      "QtdAbandonadas": 425043
    },
    {
      "Dat_Referencia": "2017-01-11 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 438293,
      "QtdAbandonadas": 491269
    },
    {
      "Dat_Referencia": "2017-01-12 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 348384,
      "QtdAbandonadas": 332097
    },
    {
      "Dat_Referencia": "2017-01-13 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 454493,
      "QtdAbandonadas": 426210
    },
    {
      "Dat_Referencia": "2017-01-14 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 421422,
      "QtdAbandonadas": 363572
    },
    {
      "Dat_Referencia": "2017-01-15 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 374030,
      "QtdAbandonadas": 305107
    },
    {
      "Dat_Referencia": "2017-01-16 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 457330,
      "QtdAbandonadas": 394876
    },
    {
      "Dat_Referencia": "2017-01-17 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 454872,
      "QtdAbandonadas": 391421
    },
    {
      "Dat_Referencia": "2017-01-18 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 452474,
      "QtdAbandonadas": 416552
    },
    {
      "Dat_Referencia": "2017-01-19 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 442778,
      "QtdAbandonadas": 382822
    },
    {
      "Dat_Referencia": "2017-01-20 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 441588,
      "QtdAbandonadas": 401073
    },
    {
      "Dat_Referencia": "2017-01-21 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 420177,
      "QtdAbandonadas": 353910
    },
    {
      "Dat_Referencia": "2017-01-22 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 371393,
      "QtdAbandonadas": 294576
    },
    {
      "Dat_Referencia": "2017-01-23 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 449727,
      "QtdAbandonadas": 382719
    },
    {
      "Dat_Referencia": "2017-01-24 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 447188,
      "QtdAbandonadas": 403617
    },
    {
      "Dat_Referencia": "2017-01-25 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 434839,
      "QtdAbandonadas": 380897
    },
    {
      "Dat_Referencia": "2017-01-26 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 435334,
      "QtdAbandonadas": 359520
    },
    {
      "Dat_Referencia": "2017-01-27 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 438175,
      "QtdAbandonadas": 386194
    },
    {
      "Dat_Referencia": "2017-01-28 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 405222,
      "QtdAbandonadas": 340920
    },
    {
      "Dat_Referencia": "2017-01-29 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 361998,
      "QtdAbandonadas": 287782
    },
    {
      "Dat_Referencia": "2017-01-30 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 441874,
      "QtdAbandonadas": 378091
    },
    {
      "Dat_Referencia": "2017-01-31 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 459377,
      "QtdAbandonadas": 391430
    },
    {
      "Dat_Referencia": "2017-02-01 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 695622,
      "QtdAbandonadas": 637653
    },
    {
      "Dat_Referencia": "2017-02-02 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 588579,
      "QtdAbandonadas": 537703
    },
    {
      "Dat_Referencia": "2017-02-03 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 554815,
      "QtdAbandonadas": 481750
    },
    {
      "Dat_Referencia": "2017-02-04 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 456407,
      "QtdAbandonadas": 395386
    },
    {
      "Dat_Referencia": "2017-02-05 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 336108,
      "QtdAbandonadas": 270048
    },
    {
      "Dat_Referencia": "2017-02-06 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 535290,
      "QtdAbandonadas": 475808
    },
    {
      "Dat_Referencia": "2017-02-07 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 533224,
      "QtdAbandonadas": 437651
    },
    {
      "Dat_Referencia": "2017-02-08 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 524440,
      "QtdAbandonadas": 445213
    },
    {
      "Dat_Referencia": "2017-02-09 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 518760,
      "QtdAbandonadas": 419443
    },
    {
      "Dat_Referencia": "2017-02-10 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 517648,
      "QtdAbandonadas": 428967
    },
    {
      "Dat_Referencia": "2017-02-11 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 449071,
      "QtdAbandonadas": 363748
    },
    {
      "Dat_Referencia": "2017-02-12 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 147070,
      "QtdAbandonadas": 108228
    },
    {
      "Dat_Referencia": "2017-02-13 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 517838,
      "QtdAbandonadas": 425910
    },
    {
      "Dat_Referencia": "2017-02-14 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 489512,
      "QtdAbandonadas": 395658
    },
    {
      "Dat_Referencia": "2017-02-15 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 479945,
      "QtdAbandonadas": 421190
    },
    {
      "Dat_Referencia": "2017-02-16 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 476525,
      "QtdAbandonadas": 355521
    },
    {
      "Dat_Referencia": "2017-02-17 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 475900,
      "QtdAbandonadas": 387491
    },
    {
      "Dat_Referencia": "2017-02-18 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 468371,
      "QtdAbandonadas": 370096
    },
    {
      "Dat_Referencia": "2017-02-19 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 389531,
      "QtdAbandonadas": 308517
    },
    {
      "Dat_Referencia": "2017-02-20 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 484565,
      "QtdAbandonadas": 406044
    },
    {
      "Dat_Referencia": "2017-02-21 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 478021,
      "QtdAbandonadas": 395090
    },
    {
      "Dat_Referencia": "2017-02-22 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 454877,
      "QtdAbandonadas": 387358
    },
    {
      "Dat_Referencia": "2017-02-23 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 408860,
      "QtdAbandonadas": 401326
    },
    {
      "Dat_Referencia": "2017-02-24 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 379767,
      "QtdAbandonadas": 550372
    },
    {
      "Dat_Referencia": "2017-02-25 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 416682,
      "QtdAbandonadas": 395939
    },
    {
      "Dat_Referencia": "2017-02-26 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 367370,
      "QtdAbandonadas": 320800
    },
    {
      "Dat_Referencia": "2017-02-27 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 395780,
      "QtdAbandonadas": 343331
    },
    {
      "Dat_Referencia": "2017-02-28 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 378998,
      "QtdAbandonadas": 321327
    },
    {
      "Dat_Referencia": "2017-03-01 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 449843,
      "QtdAbandonadas": 439905
    },
    {
      "Dat_Referencia": "2017-03-02 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 591891,
      "QtdAbandonadas": 533387
    },
    {
      "Dat_Referencia": "2017-03-03 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 554867,
      "QtdAbandonadas": 489156
    },
    {
      "Dat_Referencia": "2017-03-04 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 486760,
      "QtdAbandonadas": 420955
    },
    {
      "Dat_Referencia": "2017-03-05 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 414856,
      "QtdAbandonadas": 336044
    },
    {
      "Dat_Referencia": "2017-03-06 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 527333,
      "QtdAbandonadas": 456568
    },
    {
      "Dat_Referencia": "2017-03-07 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 517349,
      "QtdAbandonadas": 440579
    },
    {
      "Dat_Referencia": "2017-03-08 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 476388,
      "QtdAbandonadas": 407733
    },
    {
      "Dat_Referencia": "2017-03-09 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 488524,
      "QtdAbandonadas": 413194
    },
    {
      "Dat_Referencia": "2017-03-10 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 483922,
      "QtdAbandonadas": 419238
    },
    {
      "Dat_Referencia": "2017-03-11 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 404644,
      "QtdAbandonadas": 349136
    },
    {
      "Dat_Referencia": "2017-03-12 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 375560,
      "QtdAbandonadas": 299919
    },
    {
      "Dat_Referencia": "2017-03-13 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 483830,
      "QtdAbandonadas": 409607
    },
    {
      "Dat_Referencia": "2017-03-14 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 477394,
      "QtdAbandonadas": 402097
    },
    {
      "Dat_Referencia": "2017-03-15 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 458724,
      "QtdAbandonadas": 379835
    },
    {
      "Dat_Referencia": "2017-03-16 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 466241,
      "QtdAbandonadas": 396112
    },
    {
      "Dat_Referencia": "2017-03-17 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 469940,
      "QtdAbandonadas": 337506
    },
    {
      "Dat_Referencia": "2017-03-18 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 403752,
      "QtdAbandonadas": 346842
    },
    {
      "Dat_Referencia": "2017-03-19 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 298290,
      "QtdAbandonadas": 236240
    },
    {
      "Dat_Referencia": "2017-03-20 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 471263,
      "QtdAbandonadas": 393744
    },
    {
      "Dat_Referencia": "2017-03-21 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 450823,
      "QtdAbandonadas": 370289
    },
    {
      "Dat_Referencia": "2017-03-22 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 441630,
      "QtdAbandonadas": 357994
    },
    {
      "Dat_Referencia": "2017-03-23 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 437306,
      "QtdAbandonadas": 367502
    },
    {
      "Dat_Referencia": "2017-03-24 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 432784,
      "QtdAbandonadas": 354621
    },
    {
      "Dat_Referencia": "2017-03-25 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 375325,
      "QtdAbandonadas": 315808
    },
    {
      "Dat_Referencia": "2017-03-26 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 325756,
      "QtdAbandonadas": 252993
    },
    {
      "Dat_Referencia": "2017-03-27 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 398460,
      "QtdAbandonadas": 327499
    },
    {
      "Dat_Referencia": "2017-03-28 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 436536,
      "QtdAbandonadas": 349007
    },
    {
      "Dat_Referencia": "2017-03-29 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 418837,
      "QtdAbandonadas": 345439
    },
    {
      "Dat_Referencia": "2017-03-30 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 423925,
      "QtdAbandonadas": 339691
    },
    {
      "Dat_Referencia": "2017-03-31 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 417491,
      "QtdAbandonadas": 343005
    },
    {
      "Dat_Referencia": "2017-04-01 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 574196,
      "QtdAbandonadas": 509479
    },
    {
      "Dat_Referencia": "2017-04-02 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 430700,
      "QtdAbandonadas": 346907
    },
    {
      "Dat_Referencia": "2017-04-03 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 507101,
      "QtdAbandonadas": 430981
    },
    {
      "Dat_Referencia": "2017-04-04 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 519749,
      "QtdAbandonadas": 428528
    },
    {
      "Dat_Referencia": "2017-04-05 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 500545,
      "QtdAbandonadas": 405087
    },
    {
      "Dat_Referencia": "2017-04-06 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 499232,
      "QtdAbandonadas": 397437
    },
    {
      "Dat_Referencia": "2017-04-07 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 502636,
      "QtdAbandonadas": 401596
    },
    {
      "Dat_Referencia": "2017-04-08 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 465659,
      "QtdAbandonadas": 366552
    },
    {
      "Dat_Referencia": "2017-04-09 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 405455,
      "QtdAbandonadas": 303682
    },
    {
      "Dat_Referencia": "2017-04-10 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 501410,
      "QtdAbandonadas": 399981
    },
    {
      "Dat_Referencia": "2017-04-11 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 481512,
      "QtdAbandonadas": 380344
    },
    {
      "Dat_Referencia": "2017-04-12 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 462480,
      "QtdAbandonadas": 361921
    },
    {
      "Dat_Referencia": "2017-04-13 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 459411,
      "QtdAbandonadas": 356831
    },
    {
      "Dat_Referencia": "2017-04-14 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 396825,
      "QtdAbandonadas": 309272
    },
    {
      "Dat_Referencia": "2017-04-15 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 400514,
      "QtdAbandonadas": 312967
    },
    {
      "Dat_Referencia": "2017-04-16 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 368649,
      "QtdAbandonadas": 272220
    },
    {
      "Dat_Referencia": "2017-04-17 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 465783,
      "QtdAbandonadas": 370389
    },
    {
      "Dat_Referencia": "2017-04-18 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 443727,
      "QtdAbandonadas": 350095
    },
    {
      "Dat_Referencia": "2017-04-19 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 424910,
      "QtdAbandonadas": 332624
    },
    {
      "Dat_Referencia": "2017-04-20 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 413500,
      "QtdAbandonadas": 329990
    },
    {
      "Dat_Referencia": "2017-04-21 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 396279,
      "QtdAbandonadas": 307906
    },
    {
      "Dat_Referencia": "2017-04-22 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 371472,
      "QtdAbandonadas": 292076
    },
    {
      "Dat_Referencia": "2017-04-23 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 276396,
      "QtdAbandonadas": 205190
    },
    {
      "Dat_Referencia": "2017-04-24 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 423328,
      "QtdAbandonadas": 333546
    },
    {
      "Dat_Referencia": "2017-04-25 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 422229,
      "QtdAbandonadas": 332168
    },
    {
      "Dat_Referencia": "2017-04-26 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 413657,
      "QtdAbandonadas": 361732
    },
    {
      "Dat_Referencia": "2017-04-27 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 414101,
      "QtdAbandonadas": 329540
    },
    {
      "Dat_Referencia": "2017-04-28 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 405579,
      "QtdAbandonadas": 321213
    },
    {
      "Dat_Referencia": "2017-04-29 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 387491,
      "QtdAbandonadas": 312155
    },
    {
      "Dat_Referencia": "2017-04-30 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 345933,
      "QtdAbandonadas": 261956
    },
    {
      "Dat_Referencia": "2017-05-01 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 517867,
      "QtdAbandonadas": 427390
    },
    {
      "Dat_Referencia": "2017-05-02 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 552642,
      "QtdAbandonadas": 453996
    },
    {
      "Dat_Referencia": "2017-05-03 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 594806,
      "QtdAbandonadas": 433739
    },
    {
      "Dat_Referencia": "2017-05-04 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 458478,
      "QtdAbandonadas": 377419
    },
    {
      "Dat_Referencia": "2017-05-05 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 465371,
      "QtdAbandonadas": 364209
    },
    {
      "Dat_Referencia": "2017-05-06 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 424342,
      "QtdAbandonadas": 343953
    },
    {
      "Dat_Referencia": "2017-05-07 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 368949,
      "QtdAbandonadas": 271229
    },
    {
      "Dat_Referencia": "2017-05-08 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 461453,
      "QtdAbandonadas": 358973
    },
    {
      "Dat_Referencia": "2017-05-09 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 439110,
      "QtdAbandonadas": 332225
    },
    {
      "Dat_Referencia": "2017-05-10 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 441772,
      "QtdAbandonadas": 332184
    },
    {
      "Dat_Referencia": "2017-05-11 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 444479,
      "QtdAbandonadas": 327868
    },
    {
      "Dat_Referencia": "2017-05-12 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 239646,
      "QtdAbandonadas": 178206
    },
    {
      "Dat_Referencia": "2017-05-13 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 397371,
      "QtdAbandonadas": 314352
    },
    {
      "Dat_Referencia": "2017-05-14 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 389782,
      "QtdAbandonadas": 289684
    },
    {
      "Dat_Referencia": "2017-05-15 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 428808,
      "QtdAbandonadas": 458218
    },
    {
      "Dat_Referencia": "2017-05-16 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 449523,
      "QtdAbandonadas": 355296
    },
    {
      "Dat_Referencia": "2017-05-17 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 442025,
      "QtdAbandonadas": 325359
    },
    {
      "Dat_Referencia": "2017-05-18 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 427729,
      "QtdAbandonadas": 318501
    },
    {
      "Dat_Referencia": "2017-05-19 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 434436,
      "QtdAbandonadas": 327701
    },
    {
      "Dat_Referencia": "2017-05-20 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 382282,
      "QtdAbandonadas": 291731
    },
    {
      "Dat_Referencia": "2017-05-21 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 288254,
      "QtdAbandonadas": 208155
    },
    {
      "Dat_Referencia": "2017-05-22 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 301354,
      "QtdAbandonadas": 295850
    },
    {
      "Dat_Referencia": "2017-05-23 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 433554,
      "QtdAbandonadas": 329928
    },
    {
      "Dat_Referencia": "2017-05-24 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 379931,
      "QtdAbandonadas": 279279
    },
    {
      "Dat_Referencia": "2017-05-25 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 419434,
      "QtdAbandonadas": 312275
    },
    {
      "Dat_Referencia": "2017-05-26 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 420414,
      "QtdAbandonadas": 318252
    },
    {
      "Dat_Referencia": "2017-05-27 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 382974,
      "QtdAbandonadas": 290468
    },
    {
      "Dat_Referencia": "2017-05-28 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 331511,
      "QtdAbandonadas": 245912
    },
    {
      "Dat_Referencia": "2017-05-29 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 429232,
      "QtdAbandonadas": 334159
    },
    {
      "Dat_Referencia": "2017-05-30 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 419475,
      "QtdAbandonadas": 324129
    },
    {
      "Dat_Referencia": "2017-05-31 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 422022,
      "QtdAbandonadas": 324819
    },
    {
      "Dat_Referencia": "2017-06-01 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 649747,
      "QtdAbandonadas": 528583
    },
    {
      "Dat_Referencia": "2017-06-02 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 531219,
      "QtdAbandonadas": 421377
    },
    {
      "Dat_Referencia": "2017-06-03 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 456602,
      "QtdAbandonadas": 359196
    },
    {
      "Dat_Referencia": "2017-06-04 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 392456,
      "QtdAbandonadas": 287214
    },
    {
      "Dat_Referencia": "2017-06-05 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 496168,
      "QtdAbandonadas": 384310
    },
    {
      "Dat_Referencia": "2017-06-06 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 484345,
      "QtdAbandonadas": 373351
    },
    {
      "Dat_Referencia": "2017-06-07 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 477345,
      "QtdAbandonadas": 360325
    },
    {
      "Dat_Referencia": "2017-06-08 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 465173,
      "QtdAbandonadas": 347408
    },
    {
      "Dat_Referencia": "2017-06-09 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 464670,
      "QtdAbandonadas": 326953
    },
    {
      "Dat_Referencia": "2017-06-10 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 428758,
      "QtdAbandonadas": 311480
    },
    {
      "Dat_Referencia": "2017-06-11 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 367027,
      "QtdAbandonadas": 255974
    },
    {
      "Dat_Referencia": "2017-06-12 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 481385,
      "QtdAbandonadas": 354311
    },
    {
      "Dat_Referencia": "2017-06-13 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 467090,
      "QtdAbandonadas": 343437
    },
    {
      "Dat_Referencia": "2017-06-14 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 469102,
      "QtdAbandonadas": 341901
    },
    {
      "Dat_Referencia": "2017-06-15 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 417651,
      "QtdAbandonadas": 301805
    },
    {
      "Dat_Referencia": "2017-06-16 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 449138,
      "QtdAbandonadas": 331535
    },
    {
      "Dat_Referencia": "2017-06-17 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 414201,
      "QtdAbandonadas": 303814
    },
    {
      "Dat_Referencia": "2017-06-18 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 379654,
      "QtdAbandonadas": 270589
    },
    {
      "Dat_Referencia": "2017-06-19 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 458785,
      "QtdAbandonadas": 343384
    },
    {
      "Dat_Referencia": "2017-06-20 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 455862,
      "QtdAbandonadas": 344274
    },
    {
      "Dat_Referencia": "2017-06-21 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 444511,
      "QtdAbandonadas": 331069
    },
    {
      "Dat_Referencia": "2017-06-22 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 441054,
      "QtdAbandonadas": 327451
    },
    {
      "Dat_Referencia": "2017-06-23 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 424059,
      "QtdAbandonadas": 316007
    },
    {
      "Dat_Referencia": "2017-06-24 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 369012,
      "QtdAbandonadas": 277953
    },
    {
      "Dat_Referencia": "2017-06-25 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 298280,
      "QtdAbandonadas": 214241
    },
    {
      "Dat_Referencia": "2017-06-26 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 450390,
      "QtdAbandonadas": 325786
    },
    {
      "Dat_Referencia": "2017-06-27 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 427723,
      "QtdAbandonadas": 322836
    },
    {
      "Dat_Referencia": "2017-06-28 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 424091,
      "QtdAbandonadas": 317367
    },
    {
      "Dat_Referencia": "2017-06-29 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 426249,
      "QtdAbandonadas": 318648
    },
    {
      "Dat_Referencia": "2017-06-30 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 428697,
      "QtdAbandonadas": 324219
    },
    {
      "Dat_Referencia": "2017-07-01 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 563853,
      "QtdAbandonadas": 462015
    },
    {
      "Dat_Referencia": "2017-07-02 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 434805,
      "QtdAbandonadas": 354944
    },
    {
      "Dat_Referencia": "2017-07-03 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 516492,
      "QtdAbandonadas": 585564
    },
    {
      "Dat_Referencia": "2017-07-04 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 485063,
      "QtdAbandonadas": 371285
    },
    {
      "Dat_Referencia": "2017-07-05 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 469913,
      "QtdAbandonadas": 357023
    },
    {
      "Dat_Referencia": "2017-07-06 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 469872,
      "QtdAbandonadas": 355840
    },
    {
      "Dat_Referencia": "2017-07-07 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 472599,
      "QtdAbandonadas": 354180
    },
    {
      "Dat_Referencia": "2017-07-08 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 422135,
      "QtdAbandonadas": 312832
    },
    {
      "Dat_Referencia": "2017-07-09 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 384943,
      "QtdAbandonadas": 268433
    },
    {
      "Dat_Referencia": "2017-07-10 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 489111,
      "QtdAbandonadas": 360700
    },
    {
      "Dat_Referencia": "2017-07-11 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 472782,
      "QtdAbandonadas": 347088
    },
    {
      "Dat_Referencia": "2017-07-12 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 429839,
      "QtdAbandonadas": 399943
    },
    {
      "Dat_Referencia": "2017-07-13 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 455201,
      "QtdAbandonadas": 329570
    },
    {
      "Dat_Referencia": "2017-07-14 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 429419,
      "QtdAbandonadas": 406888
    },
    {
      "Dat_Referencia": "2017-07-15 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 389349,
      "QtdAbandonadas": 294303
    },
    {
      "Dat_Referencia": "2017-07-16 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 358330,
      "QtdAbandonadas": 262865
    },
    {
      "Dat_Referencia": "2017-07-17 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 458737,
      "QtdAbandonadas": 357229
    },
    {
      "Dat_Referencia": "2017-07-18 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 436955,
      "QtdAbandonadas": 339675
    },
    {
      "Dat_Referencia": "2017-07-19 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 436618,
      "QtdAbandonadas": 339592
    },
    {
      "Dat_Referencia": "2017-07-20 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 452636,
      "QtdAbandonadas": 320080
    },
    {
      "Dat_Referencia": "2017-07-21 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 438275,
      "QtdAbandonadas": 318673
    },
    {
      "Dat_Referencia": "2017-07-22 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 403438,
      "QtdAbandonadas": 293676
    },
    {
      "Dat_Referencia": "2017-07-23 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 288709,
      "QtdAbandonadas": 200770
    },
    {
      "Dat_Referencia": "2017-07-24 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 440398,
      "QtdAbandonadas": 329299
    },
    {
      "Dat_Referencia": "2017-07-25 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 427480,
      "QtdAbandonadas": 320095
    },
    {
      "Dat_Referencia": "2017-07-26 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 433203,
      "QtdAbandonadas": 323163
    },
    {
      "Dat_Referencia": "2017-07-27 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 448804,
      "QtdAbandonadas": 325798
    },
    {
      "Dat_Referencia": "2017-07-28 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 421719,
      "QtdAbandonadas": 309394
    },
    {
      "Dat_Referencia": "2017-07-29 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 397463,
      "QtdAbandonadas": 287698
    },
    {
      "Dat_Referencia": "2017-07-30 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 359738,
      "QtdAbandonadas": 252873
    },
    {
      "Dat_Referencia": "2017-07-31 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 435392,
      "QtdAbandonadas": 326025
    },
    {
      "Dat_Referencia": "2017-08-01 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 662185,
      "QtdAbandonadas": 519608
    },
    {
      "Dat_Referencia": "2017-08-02 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 535022,
      "QtdAbandonadas": 449847
    },
    {
      "Dat_Referencia": "2017-08-03 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 500667,
      "QtdAbandonadas": 367973
    },
    {
      "Dat_Referencia": "2017-08-04 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 485862,
      "QtdAbandonadas": 359682
    },
    {
      "Dat_Referencia": "2017-08-05 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 442036,
      "QtdAbandonadas": 321630
    },
    {
      "Dat_Referencia": "2017-08-06 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 386705,
      "QtdAbandonadas": 266910
    },
    {
      "Dat_Referencia": "2017-08-07 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 485975,
      "QtdAbandonadas": 351132
    },
    {
      "Dat_Referencia": "2017-08-08 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 476554,
      "QtdAbandonadas": 343123
    },
    {
      "Dat_Referencia": "2017-08-09 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 463433,
      "QtdAbandonadas": 329646
    },
    {
      "Dat_Referencia": "2017-08-10 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 476041,
      "QtdAbandonadas": 331560
    },
    {
      "Dat_Referencia": "2017-08-11 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 461072,
      "QtdAbandonadas": 327884
    },
    {
      "Dat_Referencia": "2017-08-12 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 431843,
      "QtdAbandonadas": 304727
    },
    {
      "Dat_Referencia": "2017-08-13 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 404969,
      "QtdAbandonadas": 273824
    },
    {
      "Dat_Referencia": "2017-08-14 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 456286,
      "QtdAbandonadas": 328633
    },
    {
      "Dat_Referencia": "2017-08-15 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 459370,
      "QtdAbandonadas": 326535
    },
    {
      "Dat_Referencia": "2017-08-16 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 455895,
      "QtdAbandonadas": 412381
    },
    {
      "Dat_Referencia": "2017-08-17 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 420954,
      "QtdAbandonadas": 292656
    },
    {
      "Dat_Referencia": "2017-08-18 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 450295,
      "QtdAbandonadas": 325623
    },
    {
      "Dat_Referencia": "2017-08-19 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 389510,
      "QtdAbandonadas": 278567
    },
    {
      "Dat_Referencia": "2017-08-20 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 313620,
      "QtdAbandonadas": 214041
    },
    {
      "Dat_Referencia": "2017-08-21 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 466899,
      "QtdAbandonadas": 337184
    },
    {
      "Dat_Referencia": "2017-08-22 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 449809,
      "QtdAbandonadas": 321387
    },
    {
      "Dat_Referencia": "2017-08-23 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 428312,
      "QtdAbandonadas": 307727
    },
    {
      "Dat_Referencia": "2017-08-24 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 419913,
      "QtdAbandonadas": 300560
    },
    {
      "Dat_Referencia": "2017-08-25 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 285309,
      "QtdAbandonadas": 198195
    },
    {
      "Dat_Referencia": "2017-08-26 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 397164,
      "QtdAbandonadas": 285683
    },
    {
      "Dat_Referencia": "2017-08-27 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 331968,
      "QtdAbandonadas": 232297
    },
    {
      "Dat_Referencia": "2017-08-28 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 433716,
      "QtdAbandonadas": 316558
    },
    {
      "Dat_Referencia": "2017-08-29 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 419118,
      "QtdAbandonadas": 306160
    },
    {
      "Dat_Referencia": "2017-08-30 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 411757,
      "QtdAbandonadas": 298385
    },
    {
      "Dat_Referencia": "2017-08-31 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 432041,
      "QtdAbandonadas": 312921
    },
    {
      "Dat_Referencia": "2017-09-01 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 644590,
      "QtdAbandonadas": 497166
    },
    {
      "Dat_Referencia": "2017-09-02 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 472432,
      "QtdAbandonadas": 351914
    },
    {
      "Dat_Referencia": "2017-09-03 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 397919,
      "QtdAbandonadas": 279502
    },
    {
      "Dat_Referencia": "2017-09-04 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 511776,
      "QtdAbandonadas": 368609
    },
    {
      "Dat_Referencia": "2017-09-05 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 485042,
      "QtdAbandonadas": 349133
    },
    {
      "Dat_Referencia": "2017-09-06 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 483290,
      "QtdAbandonadas": 344409
    },
    {
      "Dat_Referencia": "2017-09-07 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 430972,
      "QtdAbandonadas": 297294
    },
    {
      "Dat_Referencia": "2017-09-08 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 461178,
      "QtdAbandonadas": 329261
    },
    {
      "Dat_Referencia": "2017-09-09 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 424877,
      "QtdAbandonadas": 295721
    },
    {
      "Dat_Referencia": "2017-09-10 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 363969,
      "QtdAbandonadas": 244283
    },
    {
      "Dat_Referencia": "2017-09-11 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 493754,
      "QtdAbandonadas": 342695
    },
    {
      "Dat_Referencia": "2017-09-12 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 465041,
      "QtdAbandonadas": 325332
    },
    {
      "Dat_Referencia": "2017-09-13 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 471174,
      "QtdAbandonadas": 321115
    },
    {
      "Dat_Referencia": "2017-09-14 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 462938,
      "QtdAbandonadas": 321196
    },
    {
      "Dat_Referencia": "2017-09-15 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 463349,
      "QtdAbandonadas": 324315
    },
    {
      "Dat_Referencia": "2017-09-16 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 424915,
      "QtdAbandonadas": 297602
    },
    {
      "Dat_Referencia": "2017-09-17 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 359651,
      "QtdAbandonadas": 246442
    },
    {
      "Dat_Referencia": "2017-09-18 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 461124,
      "QtdAbandonadas": 358662
    },
    {
      "Dat_Referencia": "2017-09-19 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 446717,
      "QtdAbandonadas": 316011
    },
    {
      "Dat_Referencia": "2017-09-20 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 447267,
      "QtdAbandonadas": 310550
    },
    {
      "Dat_Referencia": "2017-09-21 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 442919,
      "QtdAbandonadas": 306272
    },
    {
      "Dat_Referencia": "2017-09-22 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 435228,
      "QtdAbandonadas": 315728
    },
    {
      "Dat_Referencia": "2017-09-23 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 401991,
      "QtdAbandonadas": 283931
    },
    {
      "Dat_Referencia": "2017-09-24 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 278116,
      "QtdAbandonadas": 186658
    },
    {
      "Dat_Referencia": "2017-09-25 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 448120,
      "QtdAbandonadas": 319153
    },
    {
      "Dat_Referencia": "2017-09-26 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 420567,
      "QtdAbandonadas": 298137
    },
    {
      "Dat_Referencia": "2017-09-27 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 430769,
      "QtdAbandonadas": 305102
    },
    {
      "Dat_Referencia": "2017-09-28 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 443404,
      "QtdAbandonadas": 316321
    },
    {
      "Dat_Referencia": "2017-09-29 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 433298,
      "QtdAbandonadas": 312336
    },
    {
      "Dat_Referencia": "2017-09-30 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 413193,
      "QtdAbandonadas": 301513
    },
    {
      "Dat_Referencia": "2017-10-01 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 490896,
      "QtdAbandonadas": 336969
    },
    {
      "Dat_Referencia": "2017-10-02 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 555051,
      "QtdAbandonadas": 434682
    },
    {
      "Dat_Referencia": "2017-10-03 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 493424,
      "QtdAbandonadas": 369552
    },
    {
      "Dat_Referencia": "2017-10-04 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 474497,
      "QtdAbandonadas": 349751
    },
    {
      "Dat_Referencia": "2017-10-05 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 466968,
      "QtdAbandonadas": 336961
    },
    {
      "Dat_Referencia": "2017-10-06 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 459174,
      "QtdAbandonadas": 326745
    },
    {
      "Dat_Referencia": "2017-10-07 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 435187,
      "QtdAbandonadas": 307601
    },
    {
      "Dat_Referencia": "2017-10-08 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 384667,
      "QtdAbandonadas": 258734
    },
    {
      "Dat_Referencia": "2017-10-09 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 452649,
      "QtdAbandonadas": 313312
    },
    {
      "Dat_Referencia": "2017-10-10 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 477611,
      "QtdAbandonadas": 329939
    },
    {
      "Dat_Referencia": "2017-10-11 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 478461,
      "QtdAbandonadas": 333512
    },
    {
      "Dat_Referencia": "2017-10-12 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 429743,
      "QtdAbandonadas": 292578
    },
    {
      "Dat_Referencia": "2017-10-13 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 453270,
      "QtdAbandonadas": 318117
    },
    {
      "Dat_Referencia": "2017-10-14 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 428982,
      "QtdAbandonadas": 299557
    },
    {
      "Dat_Referencia": "2017-10-15 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 381101,
      "QtdAbandonadas": 256352
    },
    {
      "Dat_Referencia": "2017-10-16 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 466342,
      "QtdAbandonadas": 328650
    },
    {
      "Dat_Referencia": "2017-10-17 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 440197,
      "QtdAbandonadas": 305701
    },
    {
      "Dat_Referencia": "2017-10-18 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 423912,
      "QtdAbandonadas": 296283
    },
    {
      "Dat_Referencia": "2017-10-19 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 339701,
      "QtdAbandonadas": 249143
    },
    {
      "Dat_Referencia": "2017-10-20 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 429460,
      "QtdAbandonadas": 305097
    },
    {
      "Dat_Referencia": "2017-10-21 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 383180,
      "QtdAbandonadas": 273648
    },
    {
      "Dat_Referencia": "2017-10-22 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 281625,
      "QtdAbandonadas": 192154
    },
    {
      "Dat_Referencia": "2017-10-23 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 439032,
      "QtdAbandonadas": 313746
    },
    {
      "Dat_Referencia": "2017-10-24 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 429434,
      "QtdAbandonadas": 301344
    },
    {
      "Dat_Referencia": "2017-10-25 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 412157,
      "QtdAbandonadas": 293192
    },
    {
      "Dat_Referencia": "2017-10-26 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 410955,
      "QtdAbandonadas": 285007
    },
    {
      "Dat_Referencia": "2017-10-27 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 437207,
      "QtdAbandonadas": 292623
    },
    {
      "Dat_Referencia": "2017-10-28 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 388488,
      "QtdAbandonadas": 261674
    },
    {
      "Dat_Referencia": "2017-10-29 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 92874,
      "QtdAbandonadas": 59863
    },
    {
      "Dat_Referencia": "2017-10-30 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 450345,
      "QtdAbandonadas": 306405
    },
    {
      "Dat_Referencia": "2017-10-31 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 435309,
      "QtdAbandonadas": 300292
    },
    {
      "Dat_Referencia": "2017-11-01 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 487465,
      "QtdAbandonadas": 330020
    },
    {
      "Dat_Referencia": "2017-11-02 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 413992,
      "QtdAbandonadas": 284837
    },
    {
      "Dat_Referencia": "2017-11-03 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 469453,
      "QtdAbandonadas": 326142
    },
    {
      "Dat_Referencia": "2017-11-04 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 432119,
      "QtdAbandonadas": 303689
    },
    {
      "Dat_Referencia": "2017-11-05 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 351547,
      "QtdAbandonadas": 238150
    },
    {
      "Dat_Referencia": "2017-11-06 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 453769,
      "QtdAbandonadas": 307771
    },
    {
      "Dat_Referencia": "2017-11-07 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 475029,
      "QtdAbandonadas": 334447
    },
    {
      "Dat_Referencia": "2017-11-08 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 457947,
      "QtdAbandonadas": 319958
    },
    {
      "Dat_Referencia": "2017-11-09 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 424116,
      "QtdAbandonadas": 290781
    },
    {
      "Dat_Referencia": "2017-11-10 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 445330,
      "QtdAbandonadas": 300852
    },
    {
      "Dat_Referencia": "2017-11-11 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 401349,
      "QtdAbandonadas": 275733
    },
    {
      "Dat_Referencia": "2017-11-12 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 320608,
      "QtdAbandonadas": 209934
    },
    {
      "Dat_Referencia": "2017-11-13 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 428637,
      "QtdAbandonadas": 293371
    },
    {
      "Dat_Referencia": "2017-11-14 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 423266,
      "QtdAbandonadas": 293165
    },
    {
      "Dat_Referencia": "2017-11-15 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 392053,
      "QtdAbandonadas": 266022
    },
    {
      "Dat_Referencia": "2017-11-16 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 431061,
      "QtdAbandonadas": 299403
    },
    {
      "Dat_Referencia": "2017-11-17 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 439106,
      "QtdAbandonadas": 313438
    },
    {
      "Dat_Referencia": "2017-11-18 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 176616,
      "QtdAbandonadas": 122340
    },
    {
      "Dat_Referencia": "2017-11-19 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 30099,
      "QtdAbandonadas": 19219
    },
    {
      "Dat_Referencia": "2017-11-20 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 370105,
      "QtdAbandonadas": 269206
    },
    {
      "Dat_Referencia": "2017-11-21 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 420553,
      "QtdAbandonadas": 296048
    },
    {
      "Dat_Referencia": "2017-11-22 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 393911,
      "QtdAbandonadas": 274486
    },
    {
      "Dat_Referencia": "2017-11-23 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 365674,
      "QtdAbandonadas": 248199
    },
    {
      "Dat_Referencia": "2017-11-24 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 374716,
      "QtdAbandonadas": 255228
    },
    {
      "Dat_Referencia": "2017-11-25 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 364987,
      "QtdAbandonadas": 268921
    },
    {
      "Dat_Referencia": "2017-11-26 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 323178,
      "QtdAbandonadas": 245872
    },
    {
      "Dat_Referencia": "2017-11-27 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 366250,
      "QtdAbandonadas": 258428
    },
    {
      "Dat_Referencia": "2017-11-28 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 347101,
      "QtdAbandonadas": 242962
    },
    {
      "Dat_Referencia": "2017-11-29 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 370920,
      "QtdAbandonadas": 305513
    },
    {
      "Dat_Referencia": "2017-11-30 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 402656,
      "QtdAbandonadas": 298935
    },
    {
      "Dat_Referencia": "2017-12-01 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 543585,
      "QtdAbandonadas": 400015
    },
    {
      "Dat_Referencia": "2017-12-02 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 446097,
      "QtdAbandonadas": 332048
    },
    {
      "Dat_Referencia": "2017-12-03 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 370977,
      "QtdAbandonadas": 260524
    },
    {
      "Dat_Referencia": "2017-12-04 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 438442,
      "QtdAbandonadas": 335358
    },
    {
      "Dat_Referencia": "2017-12-05 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 413203,
      "QtdAbandonadas": 291040
    },
    {
      "Dat_Referencia": "2017-12-06 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 334228,
      "QtdAbandonadas": 214757
    },
    {
      "Dat_Referencia": "2017-12-07 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 423983,
      "QtdAbandonadas": 298003
    },
    {
      "Dat_Referencia": "2017-12-08 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 405463,
      "QtdAbandonadas": 285316
    },
    {
      "Dat_Referencia": "2017-12-09 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 376879,
      "QtdAbandonadas": 270172
    },
    {
      "Dat_Referencia": "2017-12-10 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 350163,
      "QtdAbandonadas": 238654
    },
    {
      "Dat_Referencia": "2017-12-11 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 416001,
      "QtdAbandonadas": 300463
    },
    {
      "Dat_Referencia": "2017-12-12 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 369330,
      "QtdAbandonadas": 267546
    },
    {
      "Dat_Referencia": "2017-12-13 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 396038,
      "QtdAbandonadas": 274467
    },
    {
      "Dat_Referencia": "2017-12-14 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 392133,
      "QtdAbandonadas": 262739
    },
    {
      "Dat_Referencia": "2017-12-15 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 382025,
      "QtdAbandonadas": 256387
    },
    {
      "Dat_Referencia": "2017-12-16 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 363093,
      "QtdAbandonadas": 245799
    },
    {
      "Dat_Referencia": "2017-12-17 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 329966,
      "QtdAbandonadas": 216036
    },
    {
      "Dat_Referencia": "2017-12-18 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 389096,
      "QtdAbandonadas": 264479
    },
    {
      "Dat_Referencia": "2017-12-19 00:00:00.000",
      "Grupo": "USSD Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 375448,
      "QtdAbandonadas": 258882
    },
    {
      "Dat_Referencia": "2017-01-01 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 36105,
      "QtdAbandonadas": 26611
    },
    {
      "Dat_Referencia": "2017-01-02 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47230,
      "QtdAbandonadas": 39765
    },
    {
      "Dat_Referencia": "2017-01-03 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42079,
      "QtdAbandonadas": 43362
    },
    {
      "Dat_Referencia": "2017-01-04 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45583,
      "QtdAbandonadas": 36293
    },
    {
      "Dat_Referencia": "2017-01-05 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43885,
      "QtdAbandonadas": 35268
    },
    {
      "Dat_Referencia": "2017-01-06 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43739,
      "QtdAbandonadas": 34542
    },
    {
      "Dat_Referencia": "2017-01-07 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39047,
      "QtdAbandonadas": 30112
    },
    {
      "Dat_Referencia": "2017-01-08 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 33118,
      "QtdAbandonadas": 23746
    },
    {
      "Dat_Referencia": "2017-01-09 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41773,
      "QtdAbandonadas": 33896
    },
    {
      "Dat_Referencia": "2017-01-10 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42864,
      "QtdAbandonadas": 34457
    },
    {
      "Dat_Referencia": "2017-01-11 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40375,
      "QtdAbandonadas": 37827
    },
    {
      "Dat_Referencia": "2017-01-12 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 31616,
      "QtdAbandonadas": 24510
    },
    {
      "Dat_Referencia": "2017-01-13 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42882,
      "QtdAbandonadas": 32252
    },
    {
      "Dat_Referencia": "2017-01-14 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 36957,
      "QtdAbandonadas": 27007
    },
    {
      "Dat_Referencia": "2017-01-15 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 32589,
      "QtdAbandonadas": 22341
    },
    {
      "Dat_Referencia": "2017-01-16 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41786,
      "QtdAbandonadas": 31911
    },
    {
      "Dat_Referencia": "2017-01-17 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41472,
      "QtdAbandonadas": 31769
    },
    {
      "Dat_Referencia": "2017-01-18 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41751,
      "QtdAbandonadas": 31160
    },
    {
      "Dat_Referencia": "2017-01-19 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41869,
      "QtdAbandonadas": 30915
    },
    {
      "Dat_Referencia": "2017-01-20 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41788,
      "QtdAbandonadas": 30379
    },
    {
      "Dat_Referencia": "2017-01-21 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38358,
      "QtdAbandonadas": 27187
    },
    {
      "Dat_Referencia": "2017-01-22 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 33681,
      "QtdAbandonadas": 22325
    },
    {
      "Dat_Referencia": "2017-01-23 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43259,
      "QtdAbandonadas": 33247
    },
    {
      "Dat_Referencia": "2017-01-24 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44180,
      "QtdAbandonadas": 36598
    },
    {
      "Dat_Referencia": "2017-01-25 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42102,
      "QtdAbandonadas": 32896
    },
    {
      "Dat_Referencia": "2017-01-26 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42980,
      "QtdAbandonadas": 32629
    },
    {
      "Dat_Referencia": "2017-01-27 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42470,
      "QtdAbandonadas": 32128
    },
    {
      "Dat_Referencia": "2017-01-28 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37102,
      "QtdAbandonadas": 26552
    },
    {
      "Dat_Referencia": "2017-01-29 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 32744,
      "QtdAbandonadas": 21913
    },
    {
      "Dat_Referencia": "2017-01-30 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43998,
      "QtdAbandonadas": 33781
    },
    {
      "Dat_Referencia": "2017-01-31 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 48435,
      "QtdAbandonadas": 37511
    },
    {
      "Dat_Referencia": "2017-02-01 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 54676,
      "QtdAbandonadas": 44994
    },
    {
      "Dat_Referencia": "2017-02-02 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 49689,
      "QtdAbandonadas": 39703
    },
    {
      "Dat_Referencia": "2017-02-03 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47596,
      "QtdAbandonadas": 35457
    },
    {
      "Dat_Referencia": "2017-02-04 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37906,
      "QtdAbandonadas": 27974
    },
    {
      "Dat_Referencia": "2017-02-05 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 29210,
      "QtdAbandonadas": 19708
    },
    {
      "Dat_Referencia": "2017-02-06 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 48268,
      "QtdAbandonadas": 39493
    },
    {
      "Dat_Referencia": "2017-02-07 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47458,
      "QtdAbandonadas": 36070
    },
    {
      "Dat_Referencia": "2017-02-08 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47052,
      "QtdAbandonadas": 35741
    },
    {
      "Dat_Referencia": "2017-02-09 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47746,
      "QtdAbandonadas": 35640
    },
    {
      "Dat_Referencia": "2017-02-10 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47632,
      "QtdAbandonadas": 35471
    },
    {
      "Dat_Referencia": "2017-02-11 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38294,
      "QtdAbandonadas": 27544
    },
    {
      "Dat_Referencia": "2017-02-12 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 12660,
      "QtdAbandonadas": 7517
    },
    {
      "Dat_Referencia": "2017-02-13 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47686,
      "QtdAbandonadas": 36570
    },
    {
      "Dat_Referencia": "2017-02-14 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44736,
      "QtdAbandonadas": 33529
    },
    {
      "Dat_Referencia": "2017-02-15 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44132,
      "QtdAbandonadas": 34384
    },
    {
      "Dat_Referencia": "2017-02-16 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43484,
      "QtdAbandonadas": 30449
    },
    {
      "Dat_Referencia": "2017-02-17 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43917,
      "QtdAbandonadas": 32008
    },
    {
      "Dat_Referencia": "2017-02-18 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40963,
      "QtdAbandonadas": 28602
    },
    {
      "Dat_Referencia": "2017-02-19 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 33880,
      "QtdAbandonadas": 22172
    },
    {
      "Dat_Referencia": "2017-02-20 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45712,
      "QtdAbandonadas": 33726
    },
    {
      "Dat_Referencia": "2017-02-21 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45317,
      "QtdAbandonadas": 32624
    },
    {
      "Dat_Referencia": "2017-02-22 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41879,
      "QtdAbandonadas": 31639
    },
    {
      "Dat_Referencia": "2017-02-23 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37111,
      "QtdAbandonadas": 27826
    },
    {
      "Dat_Referencia": "2017-02-24 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 33981,
      "QtdAbandonadas": 45824
    },
    {
      "Dat_Referencia": "2017-02-25 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37458,
      "QtdAbandonadas": 30831
    },
    {
      "Dat_Referencia": "2017-02-26 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 31820,
      "QtdAbandonadas": 22952
    },
    {
      "Dat_Referencia": "2017-02-27 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 34859,
      "QtdAbandonadas": 25773
    },
    {
      "Dat_Referencia": "2017-02-28 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 35111,
      "QtdAbandonadas": 25928
    },
    {
      "Dat_Referencia": "2017-03-01 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 32894,
      "QtdAbandonadas": 29010
    },
    {
      "Dat_Referencia": "2017-03-02 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47726,
      "QtdAbandonadas": 38643
    },
    {
      "Dat_Referencia": "2017-03-03 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44866,
      "QtdAbandonadas": 36882
    },
    {
      "Dat_Referencia": "2017-03-04 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38012,
      "QtdAbandonadas": 29655
    },
    {
      "Dat_Referencia": "2017-03-05 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 31679,
      "QtdAbandonadas": 22013
    },
    {
      "Dat_Referencia": "2017-03-06 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42863,
      "QtdAbandonadas": 34112
    },
    {
      "Dat_Referencia": "2017-03-07 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43122,
      "QtdAbandonadas": 33531
    },
    {
      "Dat_Referencia": "2017-03-08 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39032,
      "QtdAbandonadas": 30171
    },
    {
      "Dat_Referencia": "2017-03-09 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40389,
      "QtdAbandonadas": 30768
    },
    {
      "Dat_Referencia": "2017-03-10 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41084,
      "QtdAbandonadas": 31296
    },
    {
      "Dat_Referencia": "2017-03-11 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 31709,
      "QtdAbandonadas": 23597
    },
    {
      "Dat_Referencia": "2017-03-12 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 28879,
      "QtdAbandonadas": 20193
    },
    {
      "Dat_Referencia": "2017-03-13 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40998,
      "QtdAbandonadas": 32209
    },
    {
      "Dat_Referencia": "2017-03-14 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40885,
      "QtdAbandonadas": 31239
    },
    {
      "Dat_Referencia": "2017-03-15 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39327,
      "QtdAbandonadas": 30219
    },
    {
      "Dat_Referencia": "2017-03-16 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40552,
      "QtdAbandonadas": 31446
    },
    {
      "Dat_Referencia": "2017-03-17 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40444,
      "QtdAbandonadas": 26121
    },
    {
      "Dat_Referencia": "2017-03-18 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 33348,
      "QtdAbandonadas": 23968
    },
    {
      "Dat_Referencia": "2017-03-19 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 24392,
      "QtdAbandonadas": 15914
    },
    {
      "Dat_Referencia": "2017-03-20 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41380,
      "QtdAbandonadas": 31041
    },
    {
      "Dat_Referencia": "2017-03-21 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39834,
      "QtdAbandonadas": 28689
    },
    {
      "Dat_Referencia": "2017-03-22 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38363,
      "QtdAbandonadas": 27599
    },
    {
      "Dat_Referencia": "2017-03-23 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38302,
      "QtdAbandonadas": 27604
    },
    {
      "Dat_Referencia": "2017-03-24 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38689,
      "QtdAbandonadas": 27639
    },
    {
      "Dat_Referencia": "2017-03-25 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 32095,
      "QtdAbandonadas": 22625
    },
    {
      "Dat_Referencia": "2017-03-26 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 27908,
      "QtdAbandonadas": 17689
    },
    {
      "Dat_Referencia": "2017-03-27 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 36735,
      "QtdAbandonadas": 25881
    },
    {
      "Dat_Referencia": "2017-03-28 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39872,
      "QtdAbandonadas": 27199
    },
    {
      "Dat_Referencia": "2017-03-29 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38314,
      "QtdAbandonadas": 26188
    },
    {
      "Dat_Referencia": "2017-03-30 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39774,
      "QtdAbandonadas": 27540
    },
    {
      "Dat_Referencia": "2017-03-31 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40824,
      "QtdAbandonadas": 28123
    },
    {
      "Dat_Referencia": "2017-04-01 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40975,
      "QtdAbandonadas": 30959
    },
    {
      "Dat_Referencia": "2017-04-02 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 33817,
      "QtdAbandonadas": 22444
    },
    {
      "Dat_Referencia": "2017-04-03 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42014,
      "QtdAbandonadas": 31119
    },
    {
      "Dat_Referencia": "2017-04-04 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44147,
      "QtdAbandonadas": 32221
    },
    {
      "Dat_Referencia": "2017-04-05 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43582,
      "QtdAbandonadas": 30628
    },
    {
      "Dat_Referencia": "2017-04-06 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42642,
      "QtdAbandonadas": 30149
    },
    {
      "Dat_Referencia": "2017-04-07 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43178,
      "QtdAbandonadas": 30141
    },
    {
      "Dat_Referencia": "2017-04-08 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38133,
      "QtdAbandonadas": 26100
    },
    {
      "Dat_Referencia": "2017-04-09 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 32243,
      "QtdAbandonadas": 21075
    },
    {
      "Dat_Referencia": "2017-04-10 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43713,
      "QtdAbandonadas": 31382
    },
    {
      "Dat_Referencia": "2017-04-11 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42428,
      "QtdAbandonadas": 30263
    },
    {
      "Dat_Referencia": "2017-04-12 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41354,
      "QtdAbandonadas": 28264
    },
    {
      "Dat_Referencia": "2017-04-13 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40916,
      "QtdAbandonadas": 27765
    },
    {
      "Dat_Referencia": "2017-04-14 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 32883,
      "QtdAbandonadas": 21273
    },
    {
      "Dat_Referencia": "2017-04-15 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 34572,
      "QtdAbandonadas": 22776
    },
    {
      "Dat_Referencia": "2017-04-16 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 31081,
      "QtdAbandonadas": 18759
    },
    {
      "Dat_Referencia": "2017-04-17 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42055,
      "QtdAbandonadas": 28837
    },
    {
      "Dat_Referencia": "2017-04-18 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40356,
      "QtdAbandonadas": 27628
    },
    {
      "Dat_Referencia": "2017-04-19 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39077,
      "QtdAbandonadas": 26689
    },
    {
      "Dat_Referencia": "2017-04-20 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37808,
      "QtdAbandonadas": 25580
    },
    {
      "Dat_Referencia": "2017-04-21 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 34770,
      "QtdAbandonadas": 22312
    },
    {
      "Dat_Referencia": "2017-04-22 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 32901,
      "QtdAbandonadas": 20961
    },
    {
      "Dat_Referencia": "2017-04-23 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 24763,
      "QtdAbandonadas": 14985
    },
    {
      "Dat_Referencia": "2017-04-24 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40632,
      "QtdAbandonadas": 27217
    },
    {
      "Dat_Referencia": "2017-04-25 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40088,
      "QtdAbandonadas": 26896
    },
    {
      "Dat_Referencia": "2017-04-26 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39495,
      "QtdAbandonadas": 29664
    },
    {
      "Dat_Referencia": "2017-04-27 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39952,
      "QtdAbandonadas": 25760
    },
    {
      "Dat_Referencia": "2017-04-28 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38524,
      "QtdAbandonadas": 24870
    },
    {
      "Dat_Referencia": "2017-04-29 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 36056,
      "QtdAbandonadas": 23495
    },
    {
      "Dat_Referencia": "2017-04-30 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 33086,
      "QtdAbandonadas": 20972
    },
    {
      "Dat_Referencia": "2017-05-01 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38383,
      "QtdAbandonadas": 25585
    },
    {
      "Dat_Referencia": "2017-05-02 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45883,
      "QtdAbandonadas": 31365
    },
    {
      "Dat_Referencia": "2017-05-03 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 54370,
      "QtdAbandonadas": 33184
    },
    {
      "Dat_Referencia": "2017-05-04 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41069,
      "QtdAbandonadas": 27052
    },
    {
      "Dat_Referencia": "2017-05-05 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43355,
      "QtdAbandonadas": 28291
    },
    {
      "Dat_Referencia": "2017-05-06 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38170,
      "QtdAbandonadas": 24004
    },
    {
      "Dat_Referencia": "2017-05-07 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 32329,
      "QtdAbandonadas": 19594
    },
    {
      "Dat_Referencia": "2017-05-08 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42948,
      "QtdAbandonadas": 28937
    },
    {
      "Dat_Referencia": "2017-05-09 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41239,
      "QtdAbandonadas": 27093
    },
    {
      "Dat_Referencia": "2017-05-10 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40917,
      "QtdAbandonadas": 26494
    },
    {
      "Dat_Referencia": "2017-05-11 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40417,
      "QtdAbandonadas": 26028
    },
    {
      "Dat_Referencia": "2017-05-12 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 22110,
      "QtdAbandonadas": 14064
    },
    {
      "Dat_Referencia": "2017-05-13 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 36578,
      "QtdAbandonadas": 24960
    },
    {
      "Dat_Referencia": "2017-05-14 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 32255,
      "QtdAbandonadas": 20277
    },
    {
      "Dat_Referencia": "2017-05-15 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38265,
      "QtdAbandonadas": 39927
    },
    {
      "Dat_Referencia": "2017-05-16 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40925,
      "QtdAbandonadas": 27589
    },
    {
      "Dat_Referencia": "2017-05-17 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40621,
      "QtdAbandonadas": 25559
    },
    {
      "Dat_Referencia": "2017-05-18 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38016,
      "QtdAbandonadas": 24493
    },
    {
      "Dat_Referencia": "2017-05-19 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38592,
      "QtdAbandonadas": 24588
    },
    {
      "Dat_Referencia": "2017-05-20 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 32899,
      "QtdAbandonadas": 20317
    },
    {
      "Dat_Referencia": "2017-05-21 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 24601,
      "QtdAbandonadas": 14475
    },
    {
      "Dat_Referencia": "2017-05-22 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 26340,
      "QtdAbandonadas": 23704
    },
    {
      "Dat_Referencia": "2017-05-23 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39648,
      "QtdAbandonadas": 25487
    },
    {
      "Dat_Referencia": "2017-05-24 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 34497,
      "QtdAbandonadas": 21983
    },
    {
      "Dat_Referencia": "2017-05-25 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39064,
      "QtdAbandonadas": 24460
    },
    {
      "Dat_Referencia": "2017-05-26 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38942,
      "QtdAbandonadas": 24719
    },
    {
      "Dat_Referencia": "2017-05-27 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 34107,
      "QtdAbandonadas": 21045
    },
    {
      "Dat_Referencia": "2017-05-28 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 29081,
      "QtdAbandonadas": 17892
    },
    {
      "Dat_Referencia": "2017-05-29 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40551,
      "QtdAbandonadas": 26468
    },
    {
      "Dat_Referencia": "2017-05-30 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40101,
      "QtdAbandonadas": 26669
    },
    {
      "Dat_Referencia": "2017-05-31 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43534,
      "QtdAbandonadas": 29348
    },
    {
      "Dat_Referencia": "2017-06-01 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 51084,
      "QtdAbandonadas": 35450
    },
    {
      "Dat_Referencia": "2017-06-02 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47075,
      "QtdAbandonadas": 31819
    },
    {
      "Dat_Referencia": "2017-06-03 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40326,
      "QtdAbandonadas": 26328
    },
    {
      "Dat_Referencia": "2017-06-04 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 33239,
      "QtdAbandonadas": 20479
    },
    {
      "Dat_Referencia": "2017-06-05 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 46982,
      "QtdAbandonadas": 32052
    },
    {
      "Dat_Referencia": "2017-06-06 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 46161,
      "QtdAbandonadas": 30594
    },
    {
      "Dat_Referencia": "2017-06-07 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 46515,
      "QtdAbandonadas": 31067
    },
    {
      "Dat_Referencia": "2017-06-08 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45171,
      "QtdAbandonadas": 30089
    },
    {
      "Dat_Referencia": "2017-06-09 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44578,
      "QtdAbandonadas": 27804
    },
    {
      "Dat_Referencia": "2017-06-10 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38356,
      "QtdAbandonadas": 24548
    },
    {
      "Dat_Referencia": "2017-06-11 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 31550,
      "QtdAbandonadas": 18817
    },
    {
      "Dat_Referencia": "2017-06-12 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44167,
      "QtdAbandonadas": 28409
    },
    {
      "Dat_Referencia": "2017-06-13 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42861,
      "QtdAbandonadas": 27594
    },
    {
      "Dat_Referencia": "2017-06-14 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44578,
      "QtdAbandonadas": 28832
    },
    {
      "Dat_Referencia": "2017-06-15 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 36015,
      "QtdAbandonadas": 22614
    },
    {
      "Dat_Referencia": "2017-06-16 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41526,
      "QtdAbandonadas": 26518
    },
    {
      "Dat_Referencia": "2017-06-17 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37473,
      "QtdAbandonadas": 24274
    },
    {
      "Dat_Referencia": "2017-06-18 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 32556,
      "QtdAbandonadas": 21121
    },
    {
      "Dat_Referencia": "2017-06-19 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42047,
      "QtdAbandonadas": 28031
    },
    {
      "Dat_Referencia": "2017-06-20 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42946,
      "QtdAbandonadas": 29107
    },
    {
      "Dat_Referencia": "2017-06-21 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42034,
      "QtdAbandonadas": 27450
    },
    {
      "Dat_Referencia": "2017-06-22 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40858,
      "QtdAbandonadas": 26822
    },
    {
      "Dat_Referencia": "2017-06-23 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40139,
      "QtdAbandonadas": 26232
    },
    {
      "Dat_Referencia": "2017-06-24 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 33986,
      "QtdAbandonadas": 21395
    },
    {
      "Dat_Referencia": "2017-06-25 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 26854,
      "QtdAbandonadas": 16539
    },
    {
      "Dat_Referencia": "2017-06-26 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43444,
      "QtdAbandonadas": 26895
    },
    {
      "Dat_Referencia": "2017-06-27 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40827,
      "QtdAbandonadas": 26366
    },
    {
      "Dat_Referencia": "2017-06-28 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40330,
      "QtdAbandonadas": 25880
    },
    {
      "Dat_Referencia": "2017-06-29 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40402,
      "QtdAbandonadas": 25801
    },
    {
      "Dat_Referencia": "2017-06-30 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43608,
      "QtdAbandonadas": 28230
    },
    {
      "Dat_Referencia": "2017-07-01 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42471,
      "QtdAbandonadas": 29667
    },
    {
      "Dat_Referencia": "2017-07-02 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 35608,
      "QtdAbandonadas": 22303
    },
    {
      "Dat_Referencia": "2017-07-03 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47435,
      "QtdAbandonadas": 31794
    },
    {
      "Dat_Referencia": "2017-07-04 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44096,
      "QtdAbandonadas": 28830
    },
    {
      "Dat_Referencia": "2017-07-05 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44102,
      "QtdAbandonadas": 28772
    },
    {
      "Dat_Referencia": "2017-07-06 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44251,
      "QtdAbandonadas": 29161
    },
    {
      "Dat_Referencia": "2017-07-07 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44417,
      "QtdAbandonadas": 28733
    },
    {
      "Dat_Referencia": "2017-07-08 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38572,
      "QtdAbandonadas": 24555
    },
    {
      "Dat_Referencia": "2017-07-09 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 32802,
      "QtdAbandonadas": 20134
    },
    {
      "Dat_Referencia": "2017-07-10 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44301,
      "QtdAbandonadas": 29959
    },
    {
      "Dat_Referencia": "2017-07-11 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43054,
      "QtdAbandonadas": 28515
    },
    {
      "Dat_Referencia": "2017-07-12 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39007,
      "QtdAbandonadas": 33477
    },
    {
      "Dat_Referencia": "2017-07-13 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41548,
      "QtdAbandonadas": 26423
    },
    {
      "Dat_Referencia": "2017-07-14 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39039,
      "QtdAbandonadas": 34982
    },
    {
      "Dat_Referencia": "2017-07-15 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 34396,
      "QtdAbandonadas": 22543
    },
    {
      "Dat_Referencia": "2017-07-16 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 30343,
      "QtdAbandonadas": 19050
    },
    {
      "Dat_Referencia": "2017-07-17 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41432,
      "QtdAbandonadas": 28822
    },
    {
      "Dat_Referencia": "2017-07-18 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40171,
      "QtdAbandonadas": 27329
    },
    {
      "Dat_Referencia": "2017-07-19 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39162,
      "QtdAbandonadas": 27248
    },
    {
      "Dat_Referencia": "2017-07-20 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40910,
      "QtdAbandonadas": 25309
    },
    {
      "Dat_Referencia": "2017-07-21 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40448,
      "QtdAbandonadas": 25493
    },
    {
      "Dat_Referencia": "2017-07-22 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 35739,
      "QtdAbandonadas": 21857
    },
    {
      "Dat_Referencia": "2017-07-23 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 25406,
      "QtdAbandonadas": 14760
    },
    {
      "Dat_Referencia": "2017-07-24 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40865,
      "QtdAbandonadas": 26282
    },
    {
      "Dat_Referencia": "2017-07-25 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39476,
      "QtdAbandonadas": 25915
    },
    {
      "Dat_Referencia": "2017-07-26 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39996,
      "QtdAbandonadas": 25542
    },
    {
      "Dat_Referencia": "2017-07-27 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40847,
      "QtdAbandonadas": 25728
    },
    {
      "Dat_Referencia": "2017-07-28 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39475,
      "QtdAbandonadas": 24646
    },
    {
      "Dat_Referencia": "2017-07-29 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 35971,
      "QtdAbandonadas": 21739
    },
    {
      "Dat_Referencia": "2017-07-30 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 31557,
      "QtdAbandonadas": 18546
    },
    {
      "Dat_Referencia": "2017-07-31 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43712,
      "QtdAbandonadas": 28023
    },
    {
      "Dat_Referencia": "2017-08-01 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 51562,
      "QtdAbandonadas": 35226
    },
    {
      "Dat_Referencia": "2017-08-02 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 46204,
      "QtdAbandonadas": 34752
    },
    {
      "Dat_Referencia": "2017-08-03 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44515,
      "QtdAbandonadas": 28290
    },
    {
      "Dat_Referencia": "2017-08-04 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45325,
      "QtdAbandonadas": 29031
    },
    {
      "Dat_Referencia": "2017-08-05 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39804,
      "QtdAbandonadas": 24999
    },
    {
      "Dat_Referencia": "2017-08-06 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 32794,
      "QtdAbandonadas": 19489
    },
    {
      "Dat_Referencia": "2017-08-07 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45093,
      "QtdAbandonadas": 29411
    },
    {
      "Dat_Referencia": "2017-08-08 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44604,
      "QtdAbandonadas": 28355
    },
    {
      "Dat_Referencia": "2017-08-09 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43255,
      "QtdAbandonadas": 27693
    },
    {
      "Dat_Referencia": "2017-08-10 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42960,
      "QtdAbandonadas": 27585
    },
    {
      "Dat_Referencia": "2017-08-11 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41698,
      "QtdAbandonadas": 26471
    },
    {
      "Dat_Referencia": "2017-08-12 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37155,
      "QtdAbandonadas": 23142
    },
    {
      "Dat_Referencia": "2017-08-13 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 32576,
      "QtdAbandonadas": 18917
    },
    {
      "Dat_Referencia": "2017-08-14 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40382,
      "QtdAbandonadas": 26451
    },
    {
      "Dat_Referencia": "2017-08-15 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41005,
      "QtdAbandonadas": 25793
    },
    {
      "Dat_Referencia": "2017-08-16 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39802,
      "QtdAbandonadas": 34224
    },
    {
      "Dat_Referencia": "2017-08-17 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37796,
      "QtdAbandonadas": 22932
    },
    {
      "Dat_Referencia": "2017-08-18 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41276,
      "QtdAbandonadas": 25785
    },
    {
      "Dat_Referencia": "2017-08-19 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 33622,
      "QtdAbandonadas": 20626
    },
    {
      "Dat_Referencia": "2017-08-20 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 26886,
      "QtdAbandonadas": 15550
    },
    {
      "Dat_Referencia": "2017-08-21 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42107,
      "QtdAbandonadas": 26196
    },
    {
      "Dat_Referencia": "2017-08-22 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40843,
      "QtdAbandonadas": 25890
    },
    {
      "Dat_Referencia": "2017-08-23 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39174,
      "QtdAbandonadas": 24748
    },
    {
      "Dat_Referencia": "2017-08-24 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39079,
      "QtdAbandonadas": 24507
    },
    {
      "Dat_Referencia": "2017-08-25 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 27479,
      "QtdAbandonadas": 16473
    },
    {
      "Dat_Referencia": "2017-08-26 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 35938,
      "QtdAbandonadas": 21961
    },
    {
      "Dat_Referencia": "2017-08-27 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 29730,
      "QtdAbandonadas": 17639
    },
    {
      "Dat_Referencia": "2017-08-28 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41684,
      "QtdAbandonadas": 26054
    },
    {
      "Dat_Referencia": "2017-08-29 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40381,
      "QtdAbandonadas": 25516
    },
    {
      "Dat_Referencia": "2017-08-30 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41022,
      "QtdAbandonadas": 26309
    },
    {
      "Dat_Referencia": "2017-08-31 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45242,
      "QtdAbandonadas": 29312
    },
    {
      "Dat_Referencia": "2017-09-01 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 50908,
      "QtdAbandonadas": 34382
    },
    {
      "Dat_Referencia": "2017-09-02 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40391,
      "QtdAbandonadas": 25799
    },
    {
      "Dat_Referencia": "2017-09-03 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 34218,
      "QtdAbandonadas": 20084
    },
    {
      "Dat_Referencia": "2017-09-04 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47025,
      "QtdAbandonadas": 30309
    },
    {
      "Dat_Referencia": "2017-09-05 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45812,
      "QtdAbandonadas": 29436
    },
    {
      "Dat_Referencia": "2017-09-06 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 46783,
      "QtdAbandonadas": 29918
    },
    {
      "Dat_Referencia": "2017-09-07 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38728,
      "QtdAbandonadas": 23758
    },
    {
      "Dat_Referencia": "2017-09-08 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44415,
      "QtdAbandonadas": 28076
    },
    {
      "Dat_Referencia": "2017-09-09 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39776,
      "QtdAbandonadas": 24640
    },
    {
      "Dat_Referencia": "2017-09-10 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 32574,
      "QtdAbandonadas": 19420
    },
    {
      "Dat_Referencia": "2017-09-11 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 46833,
      "QtdAbandonadas": 29653
    },
    {
      "Dat_Referencia": "2017-09-12 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44901,
      "QtdAbandonadas": 28194
    },
    {
      "Dat_Referencia": "2017-09-13 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43925,
      "QtdAbandonadas": 27350
    },
    {
      "Dat_Referencia": "2017-09-14 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42963,
      "QtdAbandonadas": 26917
    },
    {
      "Dat_Referencia": "2017-09-15 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43519,
      "QtdAbandonadas": 27390
    },
    {
      "Dat_Referencia": "2017-09-16 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38053,
      "QtdAbandonadas": 23901
    },
    {
      "Dat_Referencia": "2017-09-17 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 31348,
      "QtdAbandonadas": 18862
    },
    {
      "Dat_Referencia": "2017-09-18 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42488,
      "QtdAbandonadas": 29826
    },
    {
      "Dat_Referencia": "2017-09-19 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41683,
      "QtdAbandonadas": 26104
    },
    {
      "Dat_Referencia": "2017-09-20 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42238,
      "QtdAbandonadas": 25693
    },
    {
      "Dat_Referencia": "2017-09-21 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41045,
      "QtdAbandonadas": 25063
    },
    {
      "Dat_Referencia": "2017-09-22 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41471,
      "QtdAbandonadas": 26349
    },
    {
      "Dat_Referencia": "2017-09-23 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 36253,
      "QtdAbandonadas": 21755
    },
    {
      "Dat_Referencia": "2017-09-24 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 25228,
      "QtdAbandonadas": 13855
    },
    {
      "Dat_Referencia": "2017-09-25 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42093,
      "QtdAbandonadas": 26193
    },
    {
      "Dat_Referencia": "2017-09-26 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40985,
      "QtdAbandonadas": 24853
    },
    {
      "Dat_Referencia": "2017-09-27 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40953,
      "QtdAbandonadas": 25183
    },
    {
      "Dat_Referencia": "2017-09-28 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41808,
      "QtdAbandonadas": 25437
    },
    {
      "Dat_Referencia": "2017-09-29 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42221,
      "QtdAbandonadas": 25940
    },
    {
      "Dat_Referencia": "2017-09-30 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41510,
      "QtdAbandonadas": 25254
    },
    {
      "Dat_Referencia": "2017-10-01 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38013,
      "QtdAbandonadas": 21905
    },
    {
      "Dat_Referencia": "2017-10-02 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 48222,
      "QtdAbandonadas": 32269
    },
    {
      "Dat_Referencia": "2017-10-03 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 46836,
      "QtdAbandonadas": 29765
    },
    {
      "Dat_Referencia": "2017-10-04 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 46513,
      "QtdAbandonadas": 29102
    },
    {
      "Dat_Referencia": "2017-10-05 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47134,
      "QtdAbandonadas": 29027
    },
    {
      "Dat_Referencia": "2017-10-06 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 46539,
      "QtdAbandonadas": 28030
    },
    {
      "Dat_Referencia": "2017-10-07 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42637,
      "QtdAbandonadas": 25768
    },
    {
      "Dat_Referencia": "2017-10-08 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 35616,
      "QtdAbandonadas": 20112
    },
    {
      "Dat_Referencia": "2017-10-09 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45153,
      "QtdAbandonadas": 27446
    },
    {
      "Dat_Referencia": "2017-10-10 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 48167,
      "QtdAbandonadas": 29591
    },
    {
      "Dat_Referencia": "2017-10-11 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47034,
      "QtdAbandonadas": 28768
    },
    {
      "Dat_Referencia": "2017-10-12 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39604,
      "QtdAbandonadas": 23748
    },
    {
      "Dat_Referencia": "2017-10-13 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43584,
      "QtdAbandonadas": 26682
    },
    {
      "Dat_Referencia": "2017-10-14 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40370,
      "QtdAbandonadas": 23477
    },
    {
      "Dat_Referencia": "2017-10-15 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 33892,
      "QtdAbandonadas": 19281
    },
    {
      "Dat_Referencia": "2017-10-16 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43957,
      "QtdAbandonadas": 27516
    },
    {
      "Dat_Referencia": "2017-10-17 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42637,
      "QtdAbandonadas": 26001
    },
    {
      "Dat_Referencia": "2017-10-18 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41826,
      "QtdAbandonadas": 25183
    },
    {
      "Dat_Referencia": "2017-10-19 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 34300,
      "QtdAbandonadas": 21973
    },
    {
      "Dat_Referencia": "2017-10-20 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42924,
      "QtdAbandonadas": 26491
    },
    {
      "Dat_Referencia": "2017-10-21 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37110,
      "QtdAbandonadas": 22516
    },
    {
      "Dat_Referencia": "2017-10-22 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 27737,
      "QtdAbandonadas": 15786
    },
    {
      "Dat_Referencia": "2017-10-23 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44020,
      "QtdAbandonadas": 27287
    },
    {
      "Dat_Referencia": "2017-10-24 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43353,
      "QtdAbandonadas": 26797
    },
    {
      "Dat_Referencia": "2017-10-25 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43137,
      "QtdAbandonadas": 26511
    },
    {
      "Dat_Referencia": "2017-10-26 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42427,
      "QtdAbandonadas": 25393
    },
    {
      "Dat_Referencia": "2017-10-27 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44057,
      "QtdAbandonadas": 25798
    },
    {
      "Dat_Referencia": "2017-10-28 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37140,
      "QtdAbandonadas": 21448
    },
    {
      "Dat_Referencia": "2017-10-29 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 9054,
      "QtdAbandonadas": 4834
    },
    {
      "Dat_Referencia": "2017-10-30 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 46619,
      "QtdAbandonadas": 27941
    },
    {
      "Dat_Referencia": "2017-10-31 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 48045,
      "QtdAbandonadas": 29175
    },
    {
      "Dat_Referencia": "2017-11-01 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42102,
      "QtdAbandonadas": 24801
    },
    {
      "Dat_Referencia": "2017-11-02 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37720,
      "QtdAbandonadas": 21966
    },
    {
      "Dat_Referencia": "2017-11-03 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47096,
      "QtdAbandonadas": 27519
    },
    {
      "Dat_Referencia": "2017-11-04 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42404,
      "QtdAbandonadas": 25334
    },
    {
      "Dat_Referencia": "2017-11-05 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 34351,
      "QtdAbandonadas": 19826
    },
    {
      "Dat_Referencia": "2017-11-06 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 46876,
      "QtdAbandonadas": 27934
    },
    {
      "Dat_Referencia": "2017-11-07 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 51103,
      "QtdAbandonadas": 31406
    },
    {
      "Dat_Referencia": "2017-11-08 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 48604,
      "QtdAbandonadas": 29722
    },
    {
      "Dat_Referencia": "2017-11-09 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44499,
      "QtdAbandonadas": 26822
    },
    {
      "Dat_Referencia": "2017-11-10 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 46168,
      "QtdAbandonadas": 28074
    },
    {
      "Dat_Referencia": "2017-11-11 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39196,
      "QtdAbandonadas": 23361
    },
    {
      "Dat_Referencia": "2017-11-12 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 30379,
      "QtdAbandonadas": 16819
    },
    {
      "Dat_Referencia": "2017-11-13 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42711,
      "QtdAbandonadas": 25451
    },
    {
      "Dat_Referencia": "2017-11-14 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43243,
      "QtdAbandonadas": 25811
    },
    {
      "Dat_Referencia": "2017-11-15 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37036,
      "QtdAbandonadas": 21175
    },
    {
      "Dat_Referencia": "2017-11-16 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42445,
      "QtdAbandonadas": 25884
    },
    {
      "Dat_Referencia": "2017-11-17 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43586,
      "QtdAbandonadas": 26783
    },
    {
      "Dat_Referencia": "2017-11-18 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 16776,
      "QtdAbandonadas": 9903
    },
    {
      "Dat_Referencia": "2017-11-19 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2776,
      "QtdAbandonadas": 1491
    },
    {
      "Dat_Referencia": "2017-11-20 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 36777,
      "QtdAbandonadas": 22797
    },
    {
      "Dat_Referencia": "2017-11-21 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42083,
      "QtdAbandonadas": 25761
    },
    {
      "Dat_Referencia": "2017-11-22 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40734,
      "QtdAbandonadas": 24834
    },
    {
      "Dat_Referencia": "2017-11-23 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38321,
      "QtdAbandonadas": 21434
    },
    {
      "Dat_Referencia": "2017-11-24 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39735,
      "QtdAbandonadas": 22739
    },
    {
      "Dat_Referencia": "2017-11-25 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 36881,
      "QtdAbandonadas": 23431
    },
    {
      "Dat_Referencia": "2017-11-26 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 31216,
      "QtdAbandonadas": 20090
    },
    {
      "Dat_Referencia": "2017-11-27 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37174,
      "QtdAbandonadas": 22213
    },
    {
      "Dat_Referencia": "2017-11-28 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 35486,
      "QtdAbandonadas": 21429
    },
    {
      "Dat_Referencia": "2017-11-29 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39448,
      "QtdAbandonadas": 27819
    },
    {
      "Dat_Referencia": "2017-11-30 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45699,
      "QtdAbandonadas": 28982
    },
    {
      "Dat_Referencia": "2017-12-01 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47101,
      "QtdAbandonadas": 28976
    },
    {
      "Dat_Referencia": "2017-12-02 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42513,
      "QtdAbandonadas": 25959
    },
    {
      "Dat_Referencia": "2017-12-03 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 35394,
      "QtdAbandonadas": 20413
    },
    {
      "Dat_Referencia": "2017-12-04 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44664,
      "QtdAbandonadas": 29080
    },
    {
      "Dat_Referencia": "2017-12-05 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43211,
      "QtdAbandonadas": 25537
    },
    {
      "Dat_Referencia": "2017-12-06 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 35165,
      "QtdAbandonadas": 19273
    },
    {
      "Dat_Referencia": "2017-12-07 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45152,
      "QtdAbandonadas": 27069
    },
    {
      "Dat_Referencia": "2017-12-08 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42555,
      "QtdAbandonadas": 25405
    },
    {
      "Dat_Referencia": "2017-12-09 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37938,
      "QtdAbandonadas": 23378
    },
    {
      "Dat_Referencia": "2017-12-10 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 33025,
      "QtdAbandonadas": 19106
    },
    {
      "Dat_Referencia": "2017-12-11 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42351,
      "QtdAbandonadas": 26359
    },
    {
      "Dat_Referencia": "2017-12-12 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37988,
      "QtdAbandonadas": 24253
    },
    {
      "Dat_Referencia": "2017-12-13 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40653,
      "QtdAbandonadas": 24298
    },
    {
      "Dat_Referencia": "2017-12-14 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39260,
      "QtdAbandonadas": 23687
    },
    {
      "Dat_Referencia": "2017-12-15 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39802,
      "QtdAbandonadas": 23372
    },
    {
      "Dat_Referencia": "2017-12-16 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 36129,
      "QtdAbandonadas": 20778
    },
    {
      "Dat_Referencia": "2017-12-17 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 31272,
      "QtdAbandonadas": 17178
    },
    {
      "Dat_Referencia": "2017-12-18 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39932,
      "QtdAbandonadas": 23178
    },
    {
      "Dat_Referencia": "2017-12-19 00:00:00.000",
      "Grupo": "USSD Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39116,
      "QtdAbandonadas": 23574
    },
    {
      "Dat_Referencia": "2017-01-01 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2387,
      "QtdAbandonadas": 3309
    },
    {
      "Dat_Referencia": "2017-01-02 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6473,
      "QtdAbandonadas": 8494
    },
    {
      "Dat_Referencia": "2017-01-03 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6137,
      "QtdAbandonadas": 8626
    },
    {
      "Dat_Referencia": "2017-01-04 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 9579,
      "QtdAbandonadas": 10017
    },
    {
      "Dat_Referencia": "2017-01-05 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7023,
      "QtdAbandonadas": 8187
    },
    {
      "Dat_Referencia": "2017-01-06 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6370,
      "QtdAbandonadas": 7750
    },
    {
      "Dat_Referencia": "2017-01-07 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3713,
      "QtdAbandonadas": 4988
    },
    {
      "Dat_Referencia": "2017-01-08 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2732,
      "QtdAbandonadas": 3484
    },
    {
      "Dat_Referencia": "2017-01-09 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 9376,
      "QtdAbandonadas": 10175
    },
    {
      "Dat_Referencia": "2017-01-10 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6945,
      "QtdAbandonadas": 8711
    },
    {
      "Dat_Referencia": "2017-01-11 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8212,
      "QtdAbandonadas": 9894
    },
    {
      "Dat_Referencia": "2017-01-12 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6289,
      "QtdAbandonadas": 7673
    },
    {
      "Dat_Referencia": "2017-01-13 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6404,
      "QtdAbandonadas": 7294
    },
    {
      "Dat_Referencia": "2017-01-14 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3811,
      "QtdAbandonadas": 4965
    },
    {
      "Dat_Referencia": "2017-01-15 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2946,
      "QtdAbandonadas": 3817
    },
    {
      "Dat_Referencia": "2017-01-16 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5579,
      "QtdAbandonadas": 7465
    },
    {
      "Dat_Referencia": "2017-01-17 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5925,
      "QtdAbandonadas": 7842
    },
    {
      "Dat_Referencia": "2017-01-18 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7717,
      "QtdAbandonadas": 8453
    },
    {
      "Dat_Referencia": "2017-01-19 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6328,
      "QtdAbandonadas": 7808
    },
    {
      "Dat_Referencia": "2017-01-20 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5681,
      "QtdAbandonadas": 6873
    },
    {
      "Dat_Referencia": "2017-01-21 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3611,
      "QtdAbandonadas": 4929
    },
    {
      "Dat_Referencia": "2017-01-22 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2892,
      "QtdAbandonadas": 3686
    },
    {
      "Dat_Referencia": "2017-01-23 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6364,
      "QtdAbandonadas": 7591
    },
    {
      "Dat_Referencia": "2017-01-24 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8001,
      "QtdAbandonadas": 8476
    },
    {
      "Dat_Referencia": "2017-01-25 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5700,
      "QtdAbandonadas": 6973
    },
    {
      "Dat_Referencia": "2017-01-26 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5769,
      "QtdAbandonadas": 7358
    },
    {
      "Dat_Referencia": "2017-01-27 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5346,
      "QtdAbandonadas": 7045
    },
    {
      "Dat_Referencia": "2017-01-28 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3397,
      "QtdAbandonadas": 5094
    },
    {
      "Dat_Referencia": "2017-01-29 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2886,
      "QtdAbandonadas": 4010
    },
    {
      "Dat_Referencia": "2017-01-30 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8371,
      "QtdAbandonadas": 9290
    },
    {
      "Dat_Referencia": "2017-01-31 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6919,
      "QtdAbandonadas": 8901
    },
    {
      "Dat_Referencia": "2017-02-01 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 10455,
      "QtdAbandonadas": 10756
    },
    {
      "Dat_Referencia": "2017-02-02 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7835,
      "QtdAbandonadas": 9267
    },
    {
      "Dat_Referencia": "2017-02-03 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6359,
      "QtdAbandonadas": 7509
    },
    {
      "Dat_Referencia": "2017-02-04 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3914,
      "QtdAbandonadas": 4984
    },
    {
      "Dat_Referencia": "2017-02-05 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2407,
      "QtdAbandonadas": 3254
    },
    {
      "Dat_Referencia": "2017-02-06 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6008,
      "QtdAbandonadas": 8471
    },
    {
      "Dat_Referencia": "2017-02-07 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6777,
      "QtdAbandonadas": 8476
    },
    {
      "Dat_Referencia": "2017-02-08 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6617,
      "QtdAbandonadas": 8411
    },
    {
      "Dat_Referencia": "2017-02-09 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 10909,
      "QtdAbandonadas": 11175
    },
    {
      "Dat_Referencia": "2017-02-10 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6547,
      "QtdAbandonadas": 8172
    },
    {
      "Dat_Referencia": "2017-02-11 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3900,
      "QtdAbandonadas": 5533
    },
    {
      "Dat_Referencia": "2017-02-12 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 1110,
      "QtdAbandonadas": 1289
    },
    {
      "Dat_Referencia": "2017-02-13 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8909,
      "QtdAbandonadas": 9425
    },
    {
      "Dat_Referencia": "2017-02-14 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6758,
      "QtdAbandonadas": 8050
    },
    {
      "Dat_Referencia": "2017-02-15 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5759,
      "QtdAbandonadas": 7452
    },
    {
      "Dat_Referencia": "2017-02-16 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5242,
      "QtdAbandonadas": 6945
    },
    {
      "Dat_Referencia": "2017-02-17 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5886,
      "QtdAbandonadas": 7455
    },
    {
      "Dat_Referencia": "2017-02-18 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3727,
      "QtdAbandonadas": 5513
    },
    {
      "Dat_Referencia": "2017-02-19 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2872,
      "QtdAbandonadas": 4098
    },
    {
      "Dat_Referencia": "2017-02-20 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8586,
      "QtdAbandonadas": 9491
    },
    {
      "Dat_Referencia": "2017-02-21 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6757,
      "QtdAbandonadas": 8952
    },
    {
      "Dat_Referencia": "2017-02-22 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5919,
      "QtdAbandonadas": 7718
    },
    {
      "Dat_Referencia": "2017-02-23 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5176,
      "QtdAbandonadas": 6452
    },
    {
      "Dat_Referencia": "2017-02-24 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6618,
      "QtdAbandonadas": 9303
    },
    {
      "Dat_Referencia": "2017-02-25 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4532,
      "QtdAbandonadas": 5740
    },
    {
      "Dat_Referencia": "2017-02-26 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3128,
      "QtdAbandonadas": 4602
    },
    {
      "Dat_Referencia": "2017-02-27 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3625,
      "QtdAbandonadas": 5153
    },
    {
      "Dat_Referencia": "2017-02-28 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3267,
      "QtdAbandonadas": 4840
    },
    {
      "Dat_Referencia": "2017-03-01 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4308,
      "QtdAbandonadas": 5783
    },
    {
      "Dat_Referencia": "2017-03-02 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 12170,
      "QtdAbandonadas": 12730
    },
    {
      "Dat_Referencia": "2017-03-03 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7455,
      "QtdAbandonadas": 9100
    },
    {
      "Dat_Referencia": "2017-03-04 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4715,
      "QtdAbandonadas": 6059
    },
    {
      "Dat_Referencia": "2017-03-05 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3245,
      "QtdAbandonadas": 4583
    },
    {
      "Dat_Referencia": "2017-03-06 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8049,
      "QtdAbandonadas": 10706
    },
    {
      "Dat_Referencia": "2017-03-07 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 11456,
      "QtdAbandonadas": 12515
    },
    {
      "Dat_Referencia": "2017-03-08 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7685,
      "QtdAbandonadas": 9548
    },
    {
      "Dat_Referencia": "2017-03-09 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6586,
      "QtdAbandonadas": 9387
    },
    {
      "Dat_Referencia": "2017-03-10 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6495,
      "QtdAbandonadas": 8943
    },
    {
      "Dat_Referencia": "2017-03-11 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3740,
      "QtdAbandonadas": 5461
    },
    {
      "Dat_Referencia": "2017-03-12 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2559,
      "QtdAbandonadas": 3886
    },
    {
      "Dat_Referencia": "2017-03-13 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 10351,
      "QtdAbandonadas": 11843
    },
    {
      "Dat_Referencia": "2017-03-14 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7436,
      "QtdAbandonadas": 9564
    },
    {
      "Dat_Referencia": "2017-03-15 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 9799,
      "QtdAbandonadas": 10775
    },
    {
      "Dat_Referencia": "2017-03-16 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6755,
      "QtdAbandonadas": 9219
    },
    {
      "Dat_Referencia": "2017-03-17 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5252,
      "QtdAbandonadas": 7364
    },
    {
      "Dat_Referencia": "2017-03-18 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3700,
      "QtdAbandonadas": 5662
    },
    {
      "Dat_Referencia": "2017-03-19 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2416,
      "QtdAbandonadas": 3602
    },
    {
      "Dat_Referencia": "2017-03-20 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7010,
      "QtdAbandonadas": 9705
    },
    {
      "Dat_Referencia": "2017-03-21 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6798,
      "QtdAbandonadas": 9039
    },
    {
      "Dat_Referencia": "2017-03-22 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8370,
      "QtdAbandonadas": 10004
    },
    {
      "Dat_Referencia": "2017-03-23 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5994,
      "QtdAbandonadas": 7609
    },
    {
      "Dat_Referencia": "2017-03-24 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4927,
      "QtdAbandonadas": 6299
    },
    {
      "Dat_Referencia": "2017-03-25 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3420,
      "QtdAbandonadas": 4246
    },
    {
      "Dat_Referencia": "2017-03-26 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2331,
      "QtdAbandonadas": 3364
    },
    {
      "Dat_Referencia": "2017-03-27 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7297,
      "QtdAbandonadas": 9012
    },
    {
      "Dat_Referencia": "2017-03-28 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6348,
      "QtdAbandonadas": 8734
    },
    {
      "Dat_Referencia": "2017-03-29 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5359,
      "QtdAbandonadas": 8145
    },
    {
      "Dat_Referencia": "2017-03-30 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5896,
      "QtdAbandonadas": 7843
    },
    {
      "Dat_Referencia": "2017-03-31 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5145,
      "QtdAbandonadas": 6957
    },
    {
      "Dat_Referencia": "2017-04-01 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3787,
      "QtdAbandonadas": 5299
    },
    {
      "Dat_Referencia": "2017-04-02 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2767,
      "QtdAbandonadas": 3712
    },
    {
      "Dat_Referencia": "2017-04-03 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8777,
      "QtdAbandonadas": 9054
    },
    {
      "Dat_Referencia": "2017-04-04 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7362,
      "QtdAbandonadas": 8696
    },
    {
      "Dat_Referencia": "2017-04-05 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 10895,
      "QtdAbandonadas": 10518
    },
    {
      "Dat_Referencia": "2017-04-06 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7337,
      "QtdAbandonadas": 8581
    },
    {
      "Dat_Referencia": "2017-04-07 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6356,
      "QtdAbandonadas": 7718
    },
    {
      "Dat_Referencia": "2017-04-08 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3968,
      "QtdAbandonadas": 5333
    },
    {
      "Dat_Referencia": "2017-04-09 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2850,
      "QtdAbandonadas": 3885
    },
    {
      "Dat_Referencia": "2017-04-10 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 10318,
      "QtdAbandonadas": 10348
    },
    {
      "Dat_Referencia": "2017-04-11 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7668,
      "QtdAbandonadas": 8544
    },
    {
      "Dat_Referencia": "2017-04-12 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8586,
      "QtdAbandonadas": 8520
    },
    {
      "Dat_Referencia": "2017-04-13 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5914,
      "QtdAbandonadas": 6903
    },
    {
      "Dat_Referencia": "2017-04-14 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3147,
      "QtdAbandonadas": 3973
    },
    {
      "Dat_Referencia": "2017-04-15 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3153,
      "QtdAbandonadas": 4273
    },
    {
      "Dat_Referencia": "2017-04-16 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2384,
      "QtdAbandonadas": 3266
    },
    {
      "Dat_Referencia": "2017-04-17 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5707,
      "QtdAbandonadas": 7321
    },
    {
      "Dat_Referencia": "2017-04-18 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6153,
      "QtdAbandonadas": 7278
    },
    {
      "Dat_Referencia": "2017-04-19 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5901,
      "QtdAbandonadas": 7065
    },
    {
      "Dat_Referencia": "2017-04-20 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5461,
      "QtdAbandonadas": 6654
    },
    {
      "Dat_Referencia": "2017-04-21 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3204,
      "QtdAbandonadas": 4144
    },
    {
      "Dat_Referencia": "2017-04-22 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2853,
      "QtdAbandonadas": 3775
    },
    {
      "Dat_Referencia": "2017-04-23 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2041,
      "QtdAbandonadas": 2416
    },
    {
      "Dat_Referencia": "2017-04-24 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7643,
      "QtdAbandonadas": 7615
    },
    {
      "Dat_Referencia": "2017-04-25 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5610,
      "QtdAbandonadas": 6534
    },
    {
      "Dat_Referencia": "2017-04-26 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5002,
      "QtdAbandonadas": 6683
    },
    {
      "Dat_Referencia": "2017-04-27 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4678,
      "QtdAbandonadas": 6025
    },
    {
      "Dat_Referencia": "2017-04-28 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6223,
      "QtdAbandonadas": 6358
    },
    {
      "Dat_Referencia": "2017-04-29 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3544,
      "QtdAbandonadas": 4780
    },
    {
      "Dat_Referencia": "2017-04-30 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2262,
      "QtdAbandonadas": 3072
    },
    {
      "Dat_Referencia": "2017-05-01 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3080,
      "QtdAbandonadas": 4165
    },
    {
      "Dat_Referencia": "2017-05-02 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 10103,
      "QtdAbandonadas": 9858
    },
    {
      "Dat_Referencia": "2017-05-03 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 9776,
      "QtdAbandonadas": 10046
    },
    {
      "Dat_Referencia": "2017-05-04 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5754,
      "QtdAbandonadas": 7007
    },
    {
      "Dat_Referencia": "2017-05-05 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5686,
      "QtdAbandonadas": 6446
    },
    {
      "Dat_Referencia": "2017-05-06 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3530,
      "QtdAbandonadas": 4872
    },
    {
      "Dat_Referencia": "2017-05-07 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2431,
      "QtdAbandonadas": 3482
    },
    {
      "Dat_Referencia": "2017-05-08 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5818,
      "QtdAbandonadas": 7463
    },
    {
      "Dat_Referencia": "2017-05-09 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5485,
      "QtdAbandonadas": 7139
    },
    {
      "Dat_Referencia": "2017-05-10 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 9503,
      "QtdAbandonadas": 9959
    },
    {
      "Dat_Referencia": "2017-05-11 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8700,
      "QtdAbandonadas": 9168
    },
    {
      "Dat_Referencia": "2017-05-12 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3314,
      "QtdAbandonadas": 3983
    },
    {
      "Dat_Referencia": "2017-05-13 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3627,
      "QtdAbandonadas": 4641
    },
    {
      "Dat_Referencia": "2017-05-14 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2455,
      "QtdAbandonadas": 3182
    },
    {
      "Dat_Referencia": "2017-05-15 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5343,
      "QtdAbandonadas": 7999
    },
    {
      "Dat_Referencia": "2017-05-16 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5640,
      "QtdAbandonadas": 7483
    },
    {
      "Dat_Referencia": "2017-05-17 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4681,
      "QtdAbandonadas": 5887
    },
    {
      "Dat_Referencia": "2017-05-18 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4472,
      "QtdAbandonadas": 5793
    },
    {
      "Dat_Referencia": "2017-05-19 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4354,
      "QtdAbandonadas": 5750
    },
    {
      "Dat_Referencia": "2017-05-20 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2559,
      "QtdAbandonadas": 3756
    },
    {
      "Dat_Referencia": "2017-05-21 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 1766,
      "QtdAbandonadas": 2428
    },
    {
      "Dat_Referencia": "2017-05-22 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5281,
      "QtdAbandonadas": 6144
    },
    {
      "Dat_Referencia": "2017-05-23 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3306,
      "QtdAbandonadas": 3432
    },
    {
      "Dat_Referencia": "2017-05-24 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7392,
      "QtdAbandonadas": 7093
    },
    {
      "Dat_Referencia": "2017-05-25 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5232,
      "QtdAbandonadas": 5847
    },
    {
      "Dat_Referencia": "2017-05-26 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4098,
      "QtdAbandonadas": 5569
    },
    {
      "Dat_Referencia": "2017-05-27 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2324,
      "QtdAbandonadas": 3477
    },
    {
      "Dat_Referencia": "2017-05-28 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2001,
      "QtdAbandonadas": 2947
    },
    {
      "Dat_Referencia": "2017-05-29 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4847,
      "QtdAbandonadas": 6033
    },
    {
      "Dat_Referencia": "2017-05-30 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4949,
      "QtdAbandonadas": 6303
    },
    {
      "Dat_Referencia": "2017-05-31 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5467,
      "QtdAbandonadas": 6510
    },
    {
      "Dat_Referencia": "2017-06-01 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8058,
      "QtdAbandonadas": 8130
    },
    {
      "Dat_Referencia": "2017-06-02 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5373,
      "QtdAbandonadas": 6234
    },
    {
      "Dat_Referencia": "2017-06-03 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3406,
      "QtdAbandonadas": 4253
    },
    {
      "Dat_Referencia": "2017-06-04 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2468,
      "QtdAbandonadas": 2961
    },
    {
      "Dat_Referencia": "2017-06-05 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7807,
      "QtdAbandonadas": 7692
    },
    {
      "Dat_Referencia": "2017-06-06 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8885,
      "QtdAbandonadas": 9082
    },
    {
      "Dat_Referencia": "2017-06-07 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 10776,
      "QtdAbandonadas": 9790
    },
    {
      "Dat_Referencia": "2017-06-08 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5722,
      "QtdAbandonadas": 6737
    },
    {
      "Dat_Referencia": "2017-06-09 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5121,
      "QtdAbandonadas": 5896
    },
    {
      "Dat_Referencia": "2017-06-10 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3011,
      "QtdAbandonadas": 3981
    },
    {
      "Dat_Referencia": "2017-06-11 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2093,
      "QtdAbandonadas": 2767
    },
    {
      "Dat_Referencia": "2017-06-12 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7047,
      "QtdAbandonadas": 6824
    },
    {
      "Dat_Referencia": "2017-06-13 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5417,
      "QtdAbandonadas": 6053
    },
    {
      "Dat_Referencia": "2017-06-14 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5265,
      "QtdAbandonadas": 6076
    },
    {
      "Dat_Referencia": "2017-06-15 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3084,
      "QtdAbandonadas": 3601
    },
    {
      "Dat_Referencia": "2017-06-16 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4096,
      "QtdAbandonadas": 5463
    },
    {
      "Dat_Referencia": "2017-06-17 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2892,
      "QtdAbandonadas": 4504
    },
    {
      "Dat_Referencia": "2017-06-18 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2539,
      "QtdAbandonadas": 4858
    },
    {
      "Dat_Referencia": "2017-06-19 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7492,
      "QtdAbandonadas": 7920
    },
    {
      "Dat_Referencia": "2017-06-20 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5436,
      "QtdAbandonadas": 7545
    },
    {
      "Dat_Referencia": "2017-06-21 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4607,
      "QtdAbandonadas": 5996
    },
    {
      "Dat_Referencia": "2017-06-22 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7422,
      "QtdAbandonadas": 7812
    },
    {
      "Dat_Referencia": "2017-06-23 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4453,
      "QtdAbandonadas": 5499
    },
    {
      "Dat_Referencia": "2017-06-24 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2564,
      "QtdAbandonadas": 3205
    },
    {
      "Dat_Referencia": "2017-06-25 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 1876,
      "QtdAbandonadas": 2159
    },
    {
      "Dat_Referencia": "2017-06-26 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4507,
      "QtdAbandonadas": 5663
    },
    {
      "Dat_Referencia": "2017-06-27 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8385,
      "QtdAbandonadas": 8505
    },
    {
      "Dat_Referencia": "2017-06-28 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5221,
      "QtdAbandonadas": 6260
    },
    {
      "Dat_Referencia": "2017-06-29 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4148,
      "QtdAbandonadas": 5610
    },
    {
      "Dat_Referencia": "2017-06-30 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5009,
      "QtdAbandonadas": 6323
    },
    {
      "Dat_Referencia": "2017-07-01 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3525,
      "QtdAbandonadas": 4402
    },
    {
      "Dat_Referencia": "2017-07-02 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2422,
      "QtdAbandonadas": 3456
    },
    {
      "Dat_Referencia": "2017-07-03 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 9462,
      "QtdAbandonadas": 8691
    },
    {
      "Dat_Referencia": "2017-07-04 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6752,
      "QtdAbandonadas": 7134
    },
    {
      "Dat_Referencia": "2017-07-05 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5571,
      "QtdAbandonadas": 6320
    },
    {
      "Dat_Referencia": "2017-07-06 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5013,
      "QtdAbandonadas": 6434
    },
    {
      "Dat_Referencia": "2017-07-07 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4501,
      "QtdAbandonadas": 5759
    },
    {
      "Dat_Referencia": "2017-07-08 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2892,
      "QtdAbandonadas": 4450
    },
    {
      "Dat_Referencia": "2017-07-09 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2234,
      "QtdAbandonadas": 3386
    },
    {
      "Dat_Referencia": "2017-07-10 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8179,
      "QtdAbandonadas": 8187
    },
    {
      "Dat_Referencia": "2017-07-11 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5754,
      "QtdAbandonadas": 7544
    },
    {
      "Dat_Referencia": "2017-07-12 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7365,
      "QtdAbandonadas": 8682
    },
    {
      "Dat_Referencia": "2017-07-13 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5145,
      "QtdAbandonadas": 6513
    },
    {
      "Dat_Referencia": "2017-07-14 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4048,
      "QtdAbandonadas": 5847
    },
    {
      "Dat_Referencia": "2017-07-15 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2958,
      "QtdAbandonadas": 3927
    },
    {
      "Dat_Referencia": "2017-07-16 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2345,
      "QtdAbandonadas": 3019
    },
    {
      "Dat_Referencia": "2017-07-17 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4366,
      "QtdAbandonadas": 5817
    },
    {
      "Dat_Referencia": "2017-07-18 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7224,
      "QtdAbandonadas": 7700
    },
    {
      "Dat_Referencia": "2017-07-19 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5178,
      "QtdAbandonadas": 6357
    },
    {
      "Dat_Referencia": "2017-07-20 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5798,
      "QtdAbandonadas": 6339
    },
    {
      "Dat_Referencia": "2017-07-21 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5253,
      "QtdAbandonadas": 5714
    },
    {
      "Dat_Referencia": "2017-07-22 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3942,
      "QtdAbandonadas": 4142
    },
    {
      "Dat_Referencia": "2017-07-23 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2261,
      "QtdAbandonadas": 2392
    },
    {
      "Dat_Referencia": "2017-07-24 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5112,
      "QtdAbandonadas": 5633
    },
    {
      "Dat_Referencia": "2017-07-25 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7126,
      "QtdAbandonadas": 7022
    },
    {
      "Dat_Referencia": "2017-07-26 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5479,
      "QtdAbandonadas": 6079
    },
    {
      "Dat_Referencia": "2017-07-27 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4974,
      "QtdAbandonadas": 6363
    },
    {
      "Dat_Referencia": "2017-07-28 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3951,
      "QtdAbandonadas": 5266
    },
    {
      "Dat_Referencia": "2017-07-29 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2976,
      "QtdAbandonadas": 3983
    },
    {
      "Dat_Referencia": "2017-07-30 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2374,
      "QtdAbandonadas": 3068
    },
    {
      "Dat_Referencia": "2017-07-31 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6815,
      "QtdAbandonadas": 7614
    },
    {
      "Dat_Referencia": "2017-08-01 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 10674,
      "QtdAbandonadas": 10440
    },
    {
      "Dat_Referencia": "2017-08-02 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6741,
      "QtdAbandonadas": 8657
    },
    {
      "Dat_Referencia": "2017-08-03 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5647,
      "QtdAbandonadas": 6869
    },
    {
      "Dat_Referencia": "2017-08-04 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4638,
      "QtdAbandonadas": 5396
    },
    {
      "Dat_Referencia": "2017-08-05 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3221,
      "QtdAbandonadas": 3892
    },
    {
      "Dat_Referencia": "2017-08-06 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2346,
      "QtdAbandonadas": 3144
    },
    {
      "Dat_Referencia": "2017-08-07 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4872,
      "QtdAbandonadas": 6364
    },
    {
      "Dat_Referencia": "2017-08-08 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 9265,
      "QtdAbandonadas": 8656
    },
    {
      "Dat_Referencia": "2017-08-09 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7865,
      "QtdAbandonadas": 7913
    },
    {
      "Dat_Referencia": "2017-08-10 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5252,
      "QtdAbandonadas": 6754
    },
    {
      "Dat_Referencia": "2017-08-11 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4427,
      "QtdAbandonadas": 5270
    },
    {
      "Dat_Referencia": "2017-08-12 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2832,
      "QtdAbandonadas": 3453
    },
    {
      "Dat_Referencia": "2017-08-13 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2149,
      "QtdAbandonadas": 2354
    },
    {
      "Dat_Referencia": "2017-08-14 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4267,
      "QtdAbandonadas": 5093
    },
    {
      "Dat_Referencia": "2017-08-15 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4202,
      "QtdAbandonadas": 5110
    },
    {
      "Dat_Referencia": "2017-08-16 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7075,
      "QtdAbandonadas": 8763
    },
    {
      "Dat_Referencia": "2017-08-17 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4904,
      "QtdAbandonadas": 6007
    },
    {
      "Dat_Referencia": "2017-08-18 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4178,
      "QtdAbandonadas": 5405
    },
    {
      "Dat_Referencia": "2017-08-19 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2735,
      "QtdAbandonadas": 3622
    },
    {
      "Dat_Referencia": "2017-08-20 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2089,
      "QtdAbandonadas": 2508
    },
    {
      "Dat_Referencia": "2017-08-21 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4491,
      "QtdAbandonadas": 5617
    },
    {
      "Dat_Referencia": "2017-08-22 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7235,
      "QtdAbandonadas": 7258
    },
    {
      "Dat_Referencia": "2017-08-23 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4607,
      "QtdAbandonadas": 5566
    },
    {
      "Dat_Referencia": "2017-08-24 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4206,
      "QtdAbandonadas": 5335
    },
    {
      "Dat_Referencia": "2017-08-25 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2746,
      "QtdAbandonadas": 3219
    },
    {
      "Dat_Referencia": "2017-08-26 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2837,
      "QtdAbandonadas": 4019
    },
    {
      "Dat_Referencia": "2017-08-27 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2084,
      "QtdAbandonadas": 2934
    },
    {
      "Dat_Referencia": "2017-08-28 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6274,
      "QtdAbandonadas": 7010
    },
    {
      "Dat_Referencia": "2017-08-29 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5497,
      "QtdAbandonadas": 6265
    },
    {
      "Dat_Referencia": "2017-08-30 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4562,
      "QtdAbandonadas": 5880
    },
    {
      "Dat_Referencia": "2017-08-31 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 9304,
      "QtdAbandonadas": 9369
    },
    {
      "Dat_Referencia": "2017-09-01 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6208,
      "QtdAbandonadas": 6976
    },
    {
      "Dat_Referencia": "2017-09-02 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3187,
      "QtdAbandonadas": 4403
    },
    {
      "Dat_Referencia": "2017-09-03 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2529,
      "QtdAbandonadas": 3004
    },
    {
      "Dat_Referencia": "2017-09-04 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5259,
      "QtdAbandonadas": 6614
    },
    {
      "Dat_Referencia": "2017-09-05 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5328,
      "QtdAbandonadas": 6290
    },
    {
      "Dat_Referencia": "2017-09-06 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8887,
      "QtdAbandonadas": 8904
    },
    {
      "Dat_Referencia": "2017-09-07 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3310,
      "QtdAbandonadas": 4172
    },
    {
      "Dat_Referencia": "2017-09-08 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4998,
      "QtdAbandonadas": 5769
    },
    {
      "Dat_Referencia": "2017-09-09 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2059,
      "QtdAbandonadas": 2360
    },
    {
      "Dat_Referencia": "2017-09-10 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2524,
      "QtdAbandonadas": 3017
    },
    {
      "Dat_Referencia": "2017-09-11 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8444,
      "QtdAbandonadas": 8556
    },
    {
      "Dat_Referencia": "2017-09-12 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5356,
      "QtdAbandonadas": 6472
    },
    {
      "Dat_Referencia": "2017-09-13 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5139,
      "QtdAbandonadas": 5976
    },
    {
      "Dat_Referencia": "2017-09-14 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4662,
      "QtdAbandonadas": 5465
    },
    {
      "Dat_Referencia": "2017-09-15 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4430,
      "QtdAbandonadas": 5127
    },
    {
      "Dat_Referencia": "2017-09-16 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2876,
      "QtdAbandonadas": 3728
    },
    {
      "Dat_Referencia": "2017-09-17 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2095,
      "QtdAbandonadas": 2638
    },
    {
      "Dat_Referencia": "2017-09-18 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4145,
      "QtdAbandonadas": 5755
    },
    {
      "Dat_Referencia": "2017-09-19 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7059,
      "QtdAbandonadas": 7618
    },
    {
      "Dat_Referencia": "2017-09-20 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4673,
      "QtdAbandonadas": 5463
    },
    {
      "Dat_Referencia": "2017-09-21 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4162,
      "QtdAbandonadas": 5052
    },
    {
      "Dat_Referencia": "2017-09-22 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4111,
      "QtdAbandonadas": 4855
    },
    {
      "Dat_Referencia": "2017-09-23 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2804,
      "QtdAbandonadas": 3435
    },
    {
      "Dat_Referencia": "2017-09-24 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 1728,
      "QtdAbandonadas": 1912
    },
    {
      "Dat_Referencia": "2017-09-25 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7129,
      "QtdAbandonadas": 6827
    },
    {
      "Dat_Referencia": "2017-09-26 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4513,
      "QtdAbandonadas": 5625
    },
    {
      "Dat_Referencia": "2017-09-27 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4832,
      "QtdAbandonadas": 6231
    },
    {
      "Dat_Referencia": "2017-09-28 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7560,
      "QtdAbandonadas": 7559
    },
    {
      "Dat_Referencia": "2017-09-29 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5061,
      "QtdAbandonadas": 5831
    },
    {
      "Dat_Referencia": "2017-09-30 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3857,
      "QtdAbandonadas": 4639
    },
    {
      "Dat_Referencia": "2017-10-01 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3198,
      "QtdAbandonadas": 3536
    },
    {
      "Dat_Referencia": "2017-10-02 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 10366,
      "QtdAbandonadas": 9724
    },
    {
      "Dat_Referencia": "2017-10-03 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7669,
      "QtdAbandonadas": 8111
    },
    {
      "Dat_Referencia": "2017-10-04 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5695,
      "QtdAbandonadas": 6603
    },
    {
      "Dat_Referencia": "2017-10-05 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5671,
      "QtdAbandonadas": 6471
    },
    {
      "Dat_Referencia": "2017-10-06 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5864,
      "QtdAbandonadas": 6514
    },
    {
      "Dat_Referencia": "2017-10-07 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3975,
      "QtdAbandonadas": 5043
    },
    {
      "Dat_Referencia": "2017-10-08 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3083,
      "QtdAbandonadas": 3435
    },
    {
      "Dat_Referencia": "2017-10-09 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7903,
      "QtdAbandonadas": 7646
    },
    {
      "Dat_Referencia": "2017-10-10 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 10336,
      "QtdAbandonadas": 10176
    },
    {
      "Dat_Referencia": "2017-10-11 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6584,
      "QtdAbandonadas": 7000
    },
    {
      "Dat_Referencia": "2017-10-12 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3945,
      "QtdAbandonadas": 4332
    },
    {
      "Dat_Referencia": "2017-10-13 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4856,
      "QtdAbandonadas": 5541
    },
    {
      "Dat_Referencia": "2017-10-14 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3751,
      "QtdAbandonadas": 4121
    },
    {
      "Dat_Referencia": "2017-10-15 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2823,
      "QtdAbandonadas": 2957
    },
    {
      "Dat_Referencia": "2017-10-16 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4884,
      "QtdAbandonadas": 5713
    },
    {
      "Dat_Referencia": "2017-10-17 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8693,
      "QtdAbandonadas": 8564
    },
    {
      "Dat_Referencia": "2017-10-18 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4986,
      "QtdAbandonadas": 5404
    },
    {
      "Dat_Referencia": "2017-10-19 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3952,
      "QtdAbandonadas": 4660
    },
    {
      "Dat_Referencia": "2017-10-20 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4900,
      "QtdAbandonadas": 5471
    },
    {
      "Dat_Referencia": "2017-10-21 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3375,
      "QtdAbandonadas": 3851
    },
    {
      "Dat_Referencia": "2017-10-22 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2472,
      "QtdAbandonadas": 2555
    },
    {
      "Dat_Referencia": "2017-10-23 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8122,
      "QtdAbandonadas": 7993
    },
    {
      "Dat_Referencia": "2017-10-24 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5750,
      "QtdAbandonadas": 6331
    },
    {
      "Dat_Referencia": "2017-10-25 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5628,
      "QtdAbandonadas": 6453
    },
    {
      "Dat_Referencia": "2017-10-26 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4545,
      "QtdAbandonadas": 5394
    },
    {
      "Dat_Referencia": "2017-10-27 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4659,
      "QtdAbandonadas": 5455
    },
    {
      "Dat_Referencia": "2017-10-28 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3566,
      "QtdAbandonadas": 4352
    },
    {
      "Dat_Referencia": "2017-10-29 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 809,
      "QtdAbandonadas": 920
    },
    {
      "Dat_Referencia": "2017-10-30 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7269,
      "QtdAbandonadas": 7246
    },
    {
      "Dat_Referencia": "2017-10-31 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 9929,
      "QtdAbandonadas": 9113
    },
    {
      "Dat_Referencia": "2017-11-01 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5459,
      "QtdAbandonadas": 5352
    },
    {
      "Dat_Referencia": "2017-11-02 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3754,
      "QtdAbandonadas": 3984
    },
    {
      "Dat_Referencia": "2017-11-03 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4530,
      "QtdAbandonadas": 5117
    },
    {
      "Dat_Referencia": "2017-11-04 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3555,
      "QtdAbandonadas": 4127
    },
    {
      "Dat_Referencia": "2017-11-05 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2819,
      "QtdAbandonadas": 3129
    },
    {
      "Dat_Referencia": "2017-11-06 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4757,
      "QtdAbandonadas": 4879
    },
    {
      "Dat_Referencia": "2017-11-07 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 10343,
      "QtdAbandonadas": 10021
    },
    {
      "Dat_Referencia": "2017-11-08 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6424,
      "QtdAbandonadas": 7404
    },
    {
      "Dat_Referencia": "2017-11-09 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6915,
      "QtdAbandonadas": 6538
    },
    {
      "Dat_Referencia": "2017-11-10 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4385,
      "QtdAbandonadas": 5216
    },
    {
      "Dat_Referencia": "2017-11-11 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3515,
      "QtdAbandonadas": 4836
    },
    {
      "Dat_Referencia": "2017-11-12 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2789,
      "QtdAbandonadas": 3015
    },
    {
      "Dat_Referencia": "2017-11-13 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4936,
      "QtdAbandonadas": 5765
    },
    {
      "Dat_Referencia": "2017-11-14 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4657,
      "QtdAbandonadas": 5332
    },
    {
      "Dat_Referencia": "2017-11-15 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3450,
      "QtdAbandonadas": 4025
    },
    {
      "Dat_Referencia": "2017-11-16 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5004,
      "QtdAbandonadas": 6406
    },
    {
      "Dat_Referencia": "2017-11-17 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4976,
      "QtdAbandonadas": 6654
    },
    {
      "Dat_Referencia": "2017-11-18 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 1794,
      "QtdAbandonadas": 2194
    },
    {
      "Dat_Referencia": "2017-11-19 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 363,
      "QtdAbandonadas": 365
    },
    {
      "Dat_Referencia": "2017-11-20 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6171,
      "QtdAbandonadas": 6061
    },
    {
      "Dat_Referencia": "2017-11-21 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5194,
      "QtdAbandonadas": 5501
    },
    {
      "Dat_Referencia": "2017-11-22 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4434,
      "QtdAbandonadas": 5656
    },
    {
      "Dat_Referencia": "2017-11-23 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6932,
      "QtdAbandonadas": 7451
    },
    {
      "Dat_Referencia": "2017-11-24 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4534,
      "QtdAbandonadas": 5126
    },
    {
      "Dat_Referencia": "2017-11-25 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3645,
      "QtdAbandonadas": 4503
    },
    {
      "Dat_Referencia": "2017-11-26 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2985,
      "QtdAbandonadas": 3459
    },
    {
      "Dat_Referencia": "2017-11-27 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4379,
      "QtdAbandonadas": 5234
    },
    {
      "Dat_Referencia": "2017-11-28 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3746,
      "QtdAbandonadas": 4492
    },
    {
      "Dat_Referencia": "2017-11-29 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6021,
      "QtdAbandonadas": 5677
    },
    {
      "Dat_Referencia": "2017-11-30 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4556,
      "QtdAbandonadas": 4744
    },
    {
      "Dat_Referencia": "2017-12-01 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3677,
      "QtdAbandonadas": 3802
    },
    {
      "Dat_Referencia": "2017-12-02 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 1278,
      "QtdAbandonadas": 1247
    },
    {
      "Dat_Referencia": "2017-12-03 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2755,
      "QtdAbandonadas": 2900
    },
    {
      "Dat_Referencia": "2017-12-04 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4800,
      "QtdAbandonadas": 4234
    },
    {
      "Dat_Referencia": "2017-12-05 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4533,
      "QtdAbandonadas": 3802
    },
    {
      "Dat_Referencia": "2017-12-06 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 455,
      "QtdAbandonadas": 333
    },
    {
      "Dat_Referencia": "2017-12-07 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4000,
      "QtdAbandonadas": 4150
    },
    {
      "Dat_Referencia": "2017-12-08 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2006,
      "QtdAbandonadas": 2062
    },
    {
      "Dat_Referencia": "2017-12-09 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2309,
      "QtdAbandonadas": 2669
    },
    {
      "Dat_Referencia": "2017-12-10 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 1902,
      "QtdAbandonadas": 2047
    },
    {
      "Dat_Referencia": "2017-12-11 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4621,
      "QtdAbandonadas": 3467
    },
    {
      "Dat_Referencia": "2017-12-12 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5930,
      "QtdAbandonadas": 5633
    },
    {
      "Dat_Referencia": "2017-12-13 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4069,
      "QtdAbandonadas": 4230
    },
    {
      "Dat_Referencia": "2017-12-14 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4864,
      "QtdAbandonadas": 4783
    },
    {
      "Dat_Referencia": "2017-12-15 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3741,
      "QtdAbandonadas": 3456
    },
    {
      "Dat_Referencia": "2017-12-16 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3351,
      "QtdAbandonadas": 3427
    },
    {
      "Dat_Referencia": "2017-12-17 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 1668,
      "QtdAbandonadas": 1325
    },
    {
      "Dat_Referencia": "2017-12-18 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4063,
      "QtdAbandonadas": 4435
    },
    {
      "Dat_Referencia": "2017-12-19 00:00:00.000",
      "Grupo": "USSD Pós",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4440,
      "QtdAbandonadas": 4445
    },
    {
      "Dat_Referencia": "2017-01-01 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 82581,
      "QtdAbandonadas": 175147
    },
    {
      "Dat_Referencia": "2017-01-02 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 143099,
      "QtdAbandonadas": 327913
    },
    {
      "Dat_Referencia": "2017-01-03 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 128524,
      "QtdAbandonadas": 280377
    },
    {
      "Dat_Referencia": "2017-01-04 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 117921,
      "QtdAbandonadas": 261795
    },
    {
      "Dat_Referencia": "2017-01-05 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 78186,
      "QtdAbandonadas": 173958
    },
    {
      "Dat_Referencia": "2017-01-06 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 73639,
      "QtdAbandonadas": 161279
    },
    {
      "Dat_Referencia": "2017-01-07 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 65484,
      "QtdAbandonadas": 143190
    },
    {
      "Dat_Referencia": "2017-01-08 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 48178,
      "QtdAbandonadas": 101881
    },
    {
      "Dat_Referencia": "2017-01-09 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 68900,
      "QtdAbandonadas": 153755
    },
    {
      "Dat_Referencia": "2017-01-10 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 66756,
      "QtdAbandonadas": 147565
    },
    {
      "Dat_Referencia": "2017-01-11 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 64202,
      "QtdAbandonadas": 139533
    },
    {
      "Dat_Referencia": "2017-01-12 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 59858,
      "QtdAbandonadas": 133716
    },
    {
      "Dat_Referencia": "2017-01-13 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 57781,
      "QtdAbandonadas": 124717
    },
    {
      "Dat_Referencia": "2017-01-14 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 52090,
      "QtdAbandonadas": 111047
    },
    {
      "Dat_Referencia": "2017-01-15 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40204,
      "QtdAbandonadas": 85365
    },
    {
      "Dat_Referencia": "2017-01-16 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 58038,
      "QtdAbandonadas": 127115
    },
    {
      "Dat_Referencia": "2017-01-17 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 57664,
      "QtdAbandonadas": 121577
    },
    {
      "Dat_Referencia": "2017-01-18 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 55935,
      "QtdAbandonadas": 121676
    },
    {
      "Dat_Referencia": "2017-01-19 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 53446,
      "QtdAbandonadas": 118503
    },
    {
      "Dat_Referencia": "2017-01-20 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 52588,
      "QtdAbandonadas": 118316
    },
    {
      "Dat_Referencia": "2017-01-21 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 49813,
      "QtdAbandonadas": 110624
    },
    {
      "Dat_Referencia": "2017-01-22 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38193,
      "QtdAbandonadas": 82874
    },
    {
      "Dat_Referencia": "2017-01-23 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 52867,
      "QtdAbandonadas": 119014
    },
    {
      "Dat_Referencia": "2017-01-24 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 60109,
      "QtdAbandonadas": 116790
    },
    {
      "Dat_Referencia": "2017-01-25 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 52826,
      "QtdAbandonadas": 120377
    },
    {
      "Dat_Referencia": "2017-01-26 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 50982,
      "QtdAbandonadas": 117083
    },
    {
      "Dat_Referencia": "2017-01-27 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 48689,
      "QtdAbandonadas": 114357
    },
    {
      "Dat_Referencia": "2017-01-28 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43133,
      "QtdAbandonadas": 101586
    },
    {
      "Dat_Referencia": "2017-01-29 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 35314,
      "QtdAbandonadas": 79600
    },
    {
      "Dat_Referencia": "2017-01-30 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 52600,
      "QtdAbandonadas": 129092
    },
    {
      "Dat_Referencia": "2017-01-31 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 53375,
      "QtdAbandonadas": 124766
    },
    {
      "Dat_Referencia": "2017-02-01 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 99765,
      "QtdAbandonadas": 228592
    },
    {
      "Dat_Referencia": "2017-02-02 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 89787,
      "QtdAbandonadas": 186540
    },
    {
      "Dat_Referencia": "2017-02-03 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 77395,
      "QtdAbandonadas": 175592
    },
    {
      "Dat_Referencia": "2017-02-04 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 63486,
      "QtdAbandonadas": 140511
    },
    {
      "Dat_Referencia": "2017-02-05 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 51947,
      "QtdAbandonadas": 108510
    },
    {
      "Dat_Referencia": "2017-02-06 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 70651,
      "QtdAbandonadas": 158176
    },
    {
      "Dat_Referencia": "2017-02-07 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 68963,
      "QtdAbandonadas": 153230
    },
    {
      "Dat_Referencia": "2017-02-08 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 66507,
      "QtdAbandonadas": 147447
    },
    {
      "Dat_Referencia": "2017-02-09 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 62191,
      "QtdAbandonadas": 136879
    },
    {
      "Dat_Referencia": "2017-02-10 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 61409,
      "QtdAbandonadas": 136444
    },
    {
      "Dat_Referencia": "2017-02-11 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 51649,
      "QtdAbandonadas": 115219
    },
    {
      "Dat_Referencia": "2017-02-12 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38303,
      "QtdAbandonadas": 70598
    },
    {
      "Dat_Referencia": "2017-02-13 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 60669,
      "QtdAbandonadas": 134541
    },
    {
      "Dat_Referencia": "2017-02-14 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 57027,
      "QtdAbandonadas": 127847
    },
    {
      "Dat_Referencia": "2017-02-15 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 60344,
      "QtdAbandonadas": 123635
    },
    {
      "Dat_Referencia": "2017-02-16 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 54243,
      "QtdAbandonadas": 121429
    },
    {
      "Dat_Referencia": "2017-02-17 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 52636,
      "QtdAbandonadas": 119290
    },
    {
      "Dat_Referencia": "2017-02-18 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 48459,
      "QtdAbandonadas": 108258
    },
    {
      "Dat_Referencia": "2017-02-19 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37727,
      "QtdAbandonadas": 83280
    },
    {
      "Dat_Referencia": "2017-02-20 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 52307,
      "QtdAbandonadas": 119869
    },
    {
      "Dat_Referencia": "2017-02-21 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 51765,
      "QtdAbandonadas": 116790
    },
    {
      "Dat_Referencia": "2017-02-22 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 51574,
      "QtdAbandonadas": 120553
    },
    {
      "Dat_Referencia": "2017-02-23 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 52107,
      "QtdAbandonadas": 118855
    },
    {
      "Dat_Referencia": "2017-02-24 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 54700,
      "QtdAbandonadas": 127347
    },
    {
      "Dat_Referencia": "2017-02-25 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 48337,
      "QtdAbandonadas": 112313
    },
    {
      "Dat_Referencia": "2017-02-26 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38062,
      "QtdAbandonadas": 87419
    },
    {
      "Dat_Referencia": "2017-02-27 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45584,
      "QtdAbandonadas": 110978
    },
    {
      "Dat_Referencia": "2017-02-28 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40693,
      "QtdAbandonadas": 94338
    },
    {
      "Dat_Referencia": "2017-03-01 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 110545,
      "QtdAbandonadas": 256274
    },
    {
      "Dat_Referencia": "2017-03-02 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 87222,
      "QtdAbandonadas": 213293
    },
    {
      "Dat_Referencia": "2017-03-03 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 78301,
      "QtdAbandonadas": 192977
    },
    {
      "Dat_Referencia": "2017-03-04 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 65060,
      "QtdAbandonadas": 160003
    },
    {
      "Dat_Referencia": "2017-03-05 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 48314,
      "QtdAbandonadas": 114696
    },
    {
      "Dat_Referencia": "2017-03-06 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 69047,
      "QtdAbandonadas": 168842
    },
    {
      "Dat_Referencia": "2017-03-07 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 67282,
      "QtdAbandonadas": 164469
    },
    {
      "Dat_Referencia": "2017-03-08 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 67826,
      "QtdAbandonadas": 154991
    },
    {
      "Dat_Referencia": "2017-03-09 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 61879,
      "QtdAbandonadas": 152815
    },
    {
      "Dat_Referencia": "2017-03-10 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 59523,
      "QtdAbandonadas": 148313
    },
    {
      "Dat_Referencia": "2017-03-11 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 52042,
      "QtdAbandonadas": 126398
    },
    {
      "Dat_Referencia": "2017-03-12 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41009,
      "QtdAbandonadas": 96367
    },
    {
      "Dat_Referencia": "2017-03-13 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 57539,
      "QtdAbandonadas": 143352
    },
    {
      "Dat_Referencia": "2017-03-14 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 57847,
      "QtdAbandonadas": 142929
    },
    {
      "Dat_Referencia": "2017-03-15 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 62305,
      "QtdAbandonadas": 192454
    },
    {
      "Dat_Referencia": "2017-03-16 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 71636,
      "QtdAbandonadas": 243740
    },
    {
      "Dat_Referencia": "2017-03-17 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 64426,
      "QtdAbandonadas": 217075
    },
    {
      "Dat_Referencia": "2017-03-18 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 58072,
      "QtdAbandonadas": 210376
    },
    {
      "Dat_Referencia": "2017-03-19 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38684,
      "QtdAbandonadas": 131162
    },
    {
      "Dat_Referencia": "2017-03-20 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 74748,
      "QtdAbandonadas": 232782
    },
    {
      "Dat_Referencia": "2017-03-21 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 79867,
      "QtdAbandonadas": 182313
    },
    {
      "Dat_Referencia": "2017-03-22 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 76465,
      "QtdAbandonadas": 172855
    },
    {
      "Dat_Referencia": "2017-03-23 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 73462,
      "QtdAbandonadas": 165591
    },
    {
      "Dat_Referencia": "2017-03-24 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 69676,
      "QtdAbandonadas": 156575
    },
    {
      "Dat_Referencia": "2017-03-25 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 60011,
      "QtdAbandonadas": 133316
    },
    {
      "Dat_Referencia": "2017-03-26 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47054,
      "QtdAbandonadas": 102770
    },
    {
      "Dat_Referencia": "2017-03-27 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 63798,
      "QtdAbandonadas": 142644
    },
    {
      "Dat_Referencia": "2017-03-28 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 72876,
      "QtdAbandonadas": 164047
    },
    {
      "Dat_Referencia": "2017-03-29 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 71687,
      "QtdAbandonadas": 156291
    },
    {
      "Dat_Referencia": "2017-03-30 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 76172,
      "QtdAbandonadas": 171421
    },
    {
      "Dat_Referencia": "2017-03-31 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 74255,
      "QtdAbandonadas": 163974
    },
    {
      "Dat_Referencia": "2017-04-01 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 125602,
      "QtdAbandonadas": 265631
    },
    {
      "Dat_Referencia": "2017-04-02 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 80629,
      "QtdAbandonadas": 171989
    },
    {
      "Dat_Referencia": "2017-04-03 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 115433,
      "QtdAbandonadas": 258940
    },
    {
      "Dat_Referencia": "2017-04-04 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 103914,
      "QtdAbandonadas": 231791
    },
    {
      "Dat_Referencia": "2017-04-05 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 99184,
      "QtdAbandonadas": 223827
    },
    {
      "Dat_Referencia": "2017-04-06 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 93773,
      "QtdAbandonadas": 212797
    },
    {
      "Dat_Referencia": "2017-04-07 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 89770,
      "QtdAbandonadas": 193981
    },
    {
      "Dat_Referencia": "2017-04-08 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 79925,
      "QtdAbandonadas": 172944
    },
    {
      "Dat_Referencia": "2017-04-09 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47801,
      "QtdAbandonadas": 101819
    },
    {
      "Dat_Referencia": "2017-04-10 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 81305,
      "QtdAbandonadas": 214577
    },
    {
      "Dat_Referencia": "2017-04-11 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 79403,
      "QtdAbandonadas": 205443
    },
    {
      "Dat_Referencia": "2017-04-12 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 72523,
      "QtdAbandonadas": 190934
    },
    {
      "Dat_Referencia": "2017-04-13 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 69433,
      "QtdAbandonadas": 180994
    },
    {
      "Dat_Referencia": "2017-04-14 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 53317,
      "QtdAbandonadas": 137525
    },
    {
      "Dat_Referencia": "2017-04-15 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 56504,
      "QtdAbandonadas": 147726
    },
    {
      "Dat_Referencia": "2017-04-16 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 46795,
      "QtdAbandonadas": 123554
    },
    {
      "Dat_Referencia": "2017-04-17 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 70612,
      "QtdAbandonadas": 189648
    },
    {
      "Dat_Referencia": "2017-04-18 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 64879,
      "QtdAbandonadas": 183679
    },
    {
      "Dat_Referencia": "2017-04-19 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 62717,
      "QtdAbandonadas": 177178
    },
    {
      "Dat_Referencia": "2017-04-20 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 64141,
      "QtdAbandonadas": 179713
    },
    {
      "Dat_Referencia": "2017-04-21 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 53470,
      "QtdAbandonadas": 148930
    },
    {
      "Dat_Referencia": "2017-04-22 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 51367,
      "QtdAbandonadas": 144551
    },
    {
      "Dat_Referencia": "2017-04-23 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 33685,
      "QtdAbandonadas": 93464
    },
    {
      "Dat_Referencia": "2017-04-24 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 54308,
      "QtdAbandonadas": 159163
    },
    {
      "Dat_Referencia": "2017-04-25 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 59471,
      "QtdAbandonadas": 169648
    },
    {
      "Dat_Referencia": "2017-04-26 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 69763,
      "QtdAbandonadas": 170811
    },
    {
      "Dat_Referencia": "2017-04-27 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 60968,
      "QtdAbandonadas": 173936
    },
    {
      "Dat_Referencia": "2017-04-28 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 58552,
      "QtdAbandonadas": 166930
    },
    {
      "Dat_Referencia": "2017-04-29 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 59930,
      "QtdAbandonadas": 166928
    },
    {
      "Dat_Referencia": "2017-04-30 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47662,
      "QtdAbandonadas": 129460
    },
    {
      "Dat_Referencia": "2017-05-01 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 98712,
      "QtdAbandonadas": 248696
    },
    {
      "Dat_Referencia": "2017-05-02 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 112832,
      "QtdAbandonadas": 291399
    },
    {
      "Dat_Referencia": "2017-05-03 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 100485,
      "QtdAbandonadas": 264850
    },
    {
      "Dat_Referencia": "2017-05-04 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 84341,
      "QtdAbandonadas": 217194
    },
    {
      "Dat_Referencia": "2017-05-05 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 81048,
      "QtdAbandonadas": 212025
    },
    {
      "Dat_Referencia": "2017-05-06 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 71071,
      "QtdAbandonadas": 185150
    },
    {
      "Dat_Referencia": "2017-05-07 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 53826,
      "QtdAbandonadas": 137447
    },
    {
      "Dat_Referencia": "2017-05-08 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 75904,
      "QtdAbandonadas": 198393
    },
    {
      "Dat_Referencia": "2017-05-09 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 70083,
      "QtdAbandonadas": 181416
    },
    {
      "Dat_Referencia": "2017-05-10 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 69042,
      "QtdAbandonadas": 182622
    },
    {
      "Dat_Referencia": "2017-05-11 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 66704,
      "QtdAbandonadas": 172481
    },
    {
      "Dat_Referencia": "2017-05-12 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38611,
      "QtdAbandonadas": 95623
    },
    {
      "Dat_Referencia": "2017-05-13 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 20320,
      "QtdAbandonadas": 37560
    },
    {
      "Dat_Referencia": "2017-05-14 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 30766,
      "QtdAbandonadas": 48975
    },
    {
      "Dat_Referencia": "2017-05-15 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 71730,
      "QtdAbandonadas": 167028
    },
    {
      "Dat_Referencia": "2017-05-16 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 68995,
      "QtdAbandonadas": 157894
    },
    {
      "Dat_Referencia": "2017-05-17 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 64603,
      "QtdAbandonadas": 153318
    },
    {
      "Dat_Referencia": "2017-05-18 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 61944,
      "QtdAbandonadas": 145863
    },
    {
      "Dat_Referencia": "2017-05-19 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 61206,
      "QtdAbandonadas": 142684
    },
    {
      "Dat_Referencia": "2017-05-20 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 54237,
      "QtdAbandonadas": 126694
    },
    {
      "Dat_Referencia": "2017-05-21 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37355,
      "QtdAbandonadas": 83482
    },
    {
      "Dat_Referencia": "2017-05-22 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 77689,
      "QtdAbandonadas": 153670
    },
    {
      "Dat_Referencia": "2017-05-23 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 58240,
      "QtdAbandonadas": 144783
    },
    {
      "Dat_Referencia": "2017-05-24 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 54080,
      "QtdAbandonadas": 140124
    },
    {
      "Dat_Referencia": "2017-05-25 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 52376,
      "QtdAbandonadas": 131889
    },
    {
      "Dat_Referencia": "2017-05-26 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 51930,
      "QtdAbandonadas": 129131
    },
    {
      "Dat_Referencia": "2017-05-27 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47916,
      "QtdAbandonadas": 120213
    },
    {
      "Dat_Referencia": "2017-05-28 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37841,
      "QtdAbandonadas": 95393
    },
    {
      "Dat_Referencia": "2017-05-29 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 54942,
      "QtdAbandonadas": 135987
    },
    {
      "Dat_Referencia": "2017-05-30 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 56520,
      "QtdAbandonadas": 145846
    },
    {
      "Dat_Referencia": "2017-05-31 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 57362,
      "QtdAbandonadas": 143950
    },
    {
      "Dat_Referencia": "2017-06-01 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 115839,
      "QtdAbandonadas": 276109
    },
    {
      "Dat_Referencia": "2017-06-02 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 87032,
      "QtdAbandonadas": 215966
    },
    {
      "Dat_Referencia": "2017-06-03 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 68354,
      "QtdAbandonadas": 169072
    },
    {
      "Dat_Referencia": "2017-06-04 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 51980,
      "QtdAbandonadas": 125969
    },
    {
      "Dat_Referencia": "2017-06-05 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 73126,
      "QtdAbandonadas": 195639
    },
    {
      "Dat_Referencia": "2017-06-06 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 71559,
      "QtdAbandonadas": 189578
    },
    {
      "Dat_Referencia": "2017-06-07 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 69438,
      "QtdAbandonadas": 180838
    },
    {
      "Dat_Referencia": "2017-06-08 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 64183,
      "QtdAbandonadas": 165361
    },
    {
      "Dat_Referencia": "2017-06-09 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 60006,
      "QtdAbandonadas": 153323
    },
    {
      "Dat_Referencia": "2017-06-10 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 53788,
      "QtdAbandonadas": 135404
    },
    {
      "Dat_Referencia": "2017-06-11 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40022,
      "QtdAbandonadas": 98598
    },
    {
      "Dat_Referencia": "2017-06-12 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 57693,
      "QtdAbandonadas": 147306
    },
    {
      "Dat_Referencia": "2017-06-13 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 56602,
      "QtdAbandonadas": 141519
    },
    {
      "Dat_Referencia": "2017-06-14 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 54437,
      "QtdAbandonadas": 139483
    },
    {
      "Dat_Referencia": "2017-06-15 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47371,
      "QtdAbandonadas": 115490
    },
    {
      "Dat_Referencia": "2017-06-16 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 53212,
      "QtdAbandonadas": 129947
    },
    {
      "Dat_Referencia": "2017-06-17 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 46915,
      "QtdAbandonadas": 113304
    },
    {
      "Dat_Referencia": "2017-06-18 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39431,
      "QtdAbandonadas": 93600
    },
    {
      "Dat_Referencia": "2017-06-19 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 51063,
      "QtdAbandonadas": 128234
    },
    {
      "Dat_Referencia": "2017-06-20 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 50704,
      "QtdAbandonadas": 128683
    },
    {
      "Dat_Referencia": "2017-06-21 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 50763,
      "QtdAbandonadas": 124286
    },
    {
      "Dat_Referencia": "2017-06-22 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 48418,
      "QtdAbandonadas": 121158
    },
    {
      "Dat_Referencia": "2017-06-23 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45624,
      "QtdAbandonadas": 115097
    },
    {
      "Dat_Referencia": "2017-06-24 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40031,
      "QtdAbandonadas": 101272
    },
    {
      "Dat_Referencia": "2017-06-25 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 30921,
      "QtdAbandonadas": 77011
    },
    {
      "Dat_Referencia": "2017-06-26 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45646,
      "QtdAbandonadas": 125871
    },
    {
      "Dat_Referencia": "2017-06-27 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 48339,
      "QtdAbandonadas": 128787
    },
    {
      "Dat_Referencia": "2017-06-28 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 49245,
      "QtdAbandonadas": 127701
    },
    {
      "Dat_Referencia": "2017-06-29 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 52526,
      "QtdAbandonadas": 132633
    },
    {
      "Dat_Referencia": "2017-06-30 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 51953,
      "QtdAbandonadas": 129647
    },
    {
      "Dat_Referencia": "2017-07-01 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 87610,
      "QtdAbandonadas": 205968
    },
    {
      "Dat_Referencia": "2017-07-02 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 59127,
      "QtdAbandonadas": 138274
    },
    {
      "Dat_Referencia": "2017-07-03 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 77991,
      "QtdAbandonadas": 189783
    },
    {
      "Dat_Referencia": "2017-07-04 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 71895,
      "QtdAbandonadas": 197503
    },
    {
      "Dat_Referencia": "2017-07-05 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 66730,
      "QtdAbandonadas": 187607
    },
    {
      "Dat_Referencia": "2017-07-06 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 65524,
      "QtdAbandonadas": 180271
    },
    {
      "Dat_Referencia": "2017-07-07 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 60454,
      "QtdAbandonadas": 170175
    },
    {
      "Dat_Referencia": "2017-07-08 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 54283,
      "QtdAbandonadas": 149584
    },
    {
      "Dat_Referencia": "2017-07-09 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42027,
      "QtdAbandonadas": 112707
    },
    {
      "Dat_Referencia": "2017-07-10 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 64297,
      "QtdAbandonadas": 177979
    },
    {
      "Dat_Referencia": "2017-07-11 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 59020,
      "QtdAbandonadas": 166350
    },
    {
      "Dat_Referencia": "2017-07-12 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 75079,
      "QtdAbandonadas": 162633
    },
    {
      "Dat_Referencia": "2017-07-13 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 53840,
      "QtdAbandonadas": 153472
    },
    {
      "Dat_Referencia": "2017-07-14 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 51315,
      "QtdAbandonadas": 141118
    },
    {
      "Dat_Referencia": "2017-07-15 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 48076,
      "QtdAbandonadas": 134801
    },
    {
      "Dat_Referencia": "2017-07-16 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 36817,
      "QtdAbandonadas": 104068
    },
    {
      "Dat_Referencia": "2017-07-17 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 50590,
      "QtdAbandonadas": 143424
    },
    {
      "Dat_Referencia": "2017-07-18 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47713,
      "QtdAbandonadas": 131157
    },
    {
      "Dat_Referencia": "2017-07-19 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 48436,
      "QtdAbandonadas": 142444
    },
    {
      "Dat_Referencia": "2017-07-20 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 46784,
      "QtdAbandonadas": 136954
    },
    {
      "Dat_Referencia": "2017-07-21 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45618,
      "QtdAbandonadas": 132690
    },
    {
      "Dat_Referencia": "2017-07-22 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40562,
      "QtdAbandonadas": 117964
    },
    {
      "Dat_Referencia": "2017-07-23 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 26331,
      "QtdAbandonadas": 75173
    },
    {
      "Dat_Referencia": "2017-07-24 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45938,
      "QtdAbandonadas": 138276
    },
    {
      "Dat_Referencia": "2017-07-25 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45410,
      "QtdAbandonadas": 135468
    },
    {
      "Dat_Referencia": "2017-07-26 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47010,
      "QtdAbandonadas": 145814
    },
    {
      "Dat_Referencia": "2017-07-27 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 50207,
      "QtdAbandonadas": 148786
    },
    {
      "Dat_Referencia": "2017-07-28 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47508,
      "QtdAbandonadas": 144810
    },
    {
      "Dat_Referencia": "2017-07-29 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 44750,
      "QtdAbandonadas": 131441
    },
    {
      "Dat_Referencia": "2017-07-30 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38900,
      "QtdAbandonadas": 115674
    },
    {
      "Dat_Referencia": "2017-07-31 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45072,
      "QtdAbandonadas": 144029
    },
    {
      "Dat_Referencia": "2017-08-01 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 85872,
      "QtdAbandonadas": 252577
    },
    {
      "Dat_Referencia": "2017-08-02 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 85887,
      "QtdAbandonadas": 207856
    },
    {
      "Dat_Referencia": "2017-08-03 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 78570,
      "QtdAbandonadas": 192132
    },
    {
      "Dat_Referencia": "2017-08-04 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 73622,
      "QtdAbandonadas": 181356
    },
    {
      "Dat_Referencia": "2017-08-05 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 64814,
      "QtdAbandonadas": 158856
    },
    {
      "Dat_Referencia": "2017-08-06 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 49016,
      "QtdAbandonadas": 116248
    },
    {
      "Dat_Referencia": "2017-08-07 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 64063,
      "QtdAbandonadas": 158972
    },
    {
      "Dat_Referencia": "2017-08-08 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 59911,
      "QtdAbandonadas": 149423
    },
    {
      "Dat_Referencia": "2017-08-09 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 59322,
      "QtdAbandonadas": 147762
    },
    {
      "Dat_Referencia": "2017-08-10 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 58571,
      "QtdAbandonadas": 143545
    },
    {
      "Dat_Referencia": "2017-08-11 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 54569,
      "QtdAbandonadas": 130340
    },
    {
      "Dat_Referencia": "2017-08-12 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 50312,
      "QtdAbandonadas": 123203
    },
    {
      "Dat_Referencia": "2017-08-13 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 21645,
      "QtdAbandonadas": 52847
    },
    {
      "Dat_Referencia": "2017-08-14 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 58166,
      "QtdAbandonadas": 142218
    },
    {
      "Dat_Referencia": "2017-08-15 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 56316,
      "QtdAbandonadas": 137116
    },
    {
      "Dat_Referencia": "2017-08-16 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 57041,
      "QtdAbandonadas": 139536
    },
    {
      "Dat_Referencia": "2017-08-17 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 55375,
      "QtdAbandonadas": 132072
    },
    {
      "Dat_Referencia": "2017-08-18 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 50117,
      "QtdAbandonadas": 122665
    },
    {
      "Dat_Referencia": "2017-08-19 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42834,
      "QtdAbandonadas": 105490
    },
    {
      "Dat_Referencia": "2017-08-20 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 30927,
      "QtdAbandonadas": 72059
    },
    {
      "Dat_Referencia": "2017-08-21 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 52867,
      "QtdAbandonadas": 127776
    },
    {
      "Dat_Referencia": "2017-08-22 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 51555,
      "QtdAbandonadas": 124151
    },
    {
      "Dat_Referencia": "2017-08-23 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45797,
      "QtdAbandonadas": 116141
    },
    {
      "Dat_Referencia": "2017-08-24 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39473,
      "QtdAbandonadas": 101358
    },
    {
      "Dat_Referencia": "2017-08-25 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 27465,
      "QtdAbandonadas": 66275
    },
    {
      "Dat_Referencia": "2017-08-26 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 32259,
      "QtdAbandonadas": 84539
    },
    {
      "Dat_Referencia": "2017-08-27 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 23720,
      "QtdAbandonadas": 61530
    },
    {
      "Dat_Referencia": "2017-08-28 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 34825,
      "QtdAbandonadas": 91675
    },
    {
      "Dat_Referencia": "2017-08-29 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43939,
      "QtdAbandonadas": 119675
    },
    {
      "Dat_Referencia": "2017-08-30 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 49525,
      "QtdAbandonadas": 137348
    },
    {
      "Dat_Referencia": "2017-08-31 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 49529,
      "QtdAbandonadas": 134222
    },
    {
      "Dat_Referencia": "2017-09-01 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 97100,
      "QtdAbandonadas": 250094
    },
    {
      "Dat_Referencia": "2017-09-02 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 68158,
      "QtdAbandonadas": 186278
    },
    {
      "Dat_Referencia": "2017-09-03 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 46899,
      "QtdAbandonadas": 125791
    },
    {
      "Dat_Referencia": "2017-09-04 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 64377,
      "QtdAbandonadas": 181783
    },
    {
      "Dat_Referencia": "2017-09-05 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 59442,
      "QtdAbandonadas": 173027
    },
    {
      "Dat_Referencia": "2017-09-06 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 58828,
      "QtdAbandonadas": 168049
    },
    {
      "Dat_Referencia": "2017-09-07 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 46931,
      "QtdAbandonadas": 134122
    },
    {
      "Dat_Referencia": "2017-09-08 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 51534,
      "QtdAbandonadas": 148833
    },
    {
      "Dat_Referencia": "2017-09-09 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43321,
      "QtdAbandonadas": 126940
    },
    {
      "Dat_Referencia": "2017-09-10 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 34058,
      "QtdAbandonadas": 95853
    },
    {
      "Dat_Referencia": "2017-09-11 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 50819,
      "QtdAbandonadas": 148556
    },
    {
      "Dat_Referencia": "2017-09-12 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 49230,
      "QtdAbandonadas": 143749
    },
    {
      "Dat_Referencia": "2017-09-13 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 49067,
      "QtdAbandonadas": 144203
    },
    {
      "Dat_Referencia": "2017-09-14 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 46511,
      "QtdAbandonadas": 143437
    },
    {
      "Dat_Referencia": "2017-09-15 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45291,
      "QtdAbandonadas": 140175
    },
    {
      "Dat_Referencia": "2017-09-16 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40586,
      "QtdAbandonadas": 127168
    },
    {
      "Dat_Referencia": "2017-09-17 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 32209,
      "QtdAbandonadas": 97538
    },
    {
      "Dat_Referencia": "2017-09-18 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 48224,
      "QtdAbandonadas": 143725
    },
    {
      "Dat_Referencia": "2017-09-19 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38655,
      "QtdAbandonadas": 124567
    },
    {
      "Dat_Referencia": "2017-09-20 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 36338,
      "QtdAbandonadas": 110955
    },
    {
      "Dat_Referencia": "2017-09-21 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 40069,
      "QtdAbandonadas": 131589
    },
    {
      "Dat_Referencia": "2017-09-22 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 36674,
      "QtdAbandonadas": 128351
    },
    {
      "Dat_Referencia": "2017-09-23 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 32683,
      "QtdAbandonadas": 115039
    },
    {
      "Dat_Referencia": "2017-09-24 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 21361,
      "QtdAbandonadas": 68832
    },
    {
      "Dat_Referencia": "2017-09-25 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38868,
      "QtdAbandonadas": 131286
    },
    {
      "Dat_Referencia": "2017-09-26 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38801,
      "QtdAbandonadas": 132235
    },
    {
      "Dat_Referencia": "2017-09-27 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39144,
      "QtdAbandonadas": 132868
    },
    {
      "Dat_Referencia": "2017-09-28 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42173,
      "QtdAbandonadas": 132078
    },
    {
      "Dat_Referencia": "2017-09-29 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43028,
      "QtdAbandonadas": 141841
    },
    {
      "Dat_Referencia": "2017-09-30 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39813,
      "QtdAbandonadas": 130176
    },
    {
      "Dat_Referencia": "2017-10-01 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 49431,
      "QtdAbandonadas": 152381
    },
    {
      "Dat_Referencia": "2017-10-02 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 69239,
      "QtdAbandonadas": 215889
    },
    {
      "Dat_Referencia": "2017-10-03 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 69573,
      "QtdAbandonadas": 190247
    },
    {
      "Dat_Referencia": "2017-10-04 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 53532,
      "QtdAbandonadas": 166123
    },
    {
      "Dat_Referencia": "2017-10-05 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 51834,
      "QtdAbandonadas": 165016
    },
    {
      "Dat_Referencia": "2017-10-06 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 52368,
      "QtdAbandonadas": 159918
    },
    {
      "Dat_Referencia": "2017-10-07 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47159,
      "QtdAbandonadas": 144708
    },
    {
      "Dat_Referencia": "2017-10-08 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37045,
      "QtdAbandonadas": 109924
    },
    {
      "Dat_Referencia": "2017-10-09 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 51731,
      "QtdAbandonadas": 156704
    },
    {
      "Dat_Referencia": "2017-10-10 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 48629,
      "QtdAbandonadas": 148705
    },
    {
      "Dat_Referencia": "2017-10-11 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47667,
      "QtdAbandonadas": 147615
    },
    {
      "Dat_Referencia": "2017-10-12 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38755,
      "QtdAbandonadas": 118822
    },
    {
      "Dat_Referencia": "2017-10-13 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43202,
      "QtdAbandonadas": 134294
    },
    {
      "Dat_Referencia": "2017-10-14 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39721,
      "QtdAbandonadas": 122876
    },
    {
      "Dat_Referencia": "2017-10-15 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 33145,
      "QtdAbandonadas": 99361
    },
    {
      "Dat_Referencia": "2017-10-16 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 48155,
      "QtdAbandonadas": 140953
    },
    {
      "Dat_Referencia": "2017-10-17 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45213,
      "QtdAbandonadas": 140946
    },
    {
      "Dat_Referencia": "2017-10-18 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42250,
      "QtdAbandonadas": 136207
    },
    {
      "Dat_Referencia": "2017-10-19 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 48009,
      "QtdAbandonadas": 137334
    },
    {
      "Dat_Referencia": "2017-10-20 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39589,
      "QtdAbandonadas": 124428
    },
    {
      "Dat_Referencia": "2017-10-21 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 32724,
      "QtdAbandonadas": 108005
    },
    {
      "Dat_Referencia": "2017-10-22 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 19698,
      "QtdAbandonadas": 63729
    },
    {
      "Dat_Referencia": "2017-10-23 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 36160,
      "QtdAbandonadas": 128306
    },
    {
      "Dat_Referencia": "2017-10-24 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37936,
      "QtdAbandonadas": 128802
    },
    {
      "Dat_Referencia": "2017-10-25 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37320,
      "QtdAbandonadas": 122078
    },
    {
      "Dat_Referencia": "2017-10-26 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 34680,
      "QtdAbandonadas": 118258
    },
    {
      "Dat_Referencia": "2017-10-27 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 34616,
      "QtdAbandonadas": 119092
    },
    {
      "Dat_Referencia": "2017-10-28 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 29990,
      "QtdAbandonadas": 104506
    },
    {
      "Dat_Referencia": "2017-10-29 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 28914,
      "QtdAbandonadas": 83403
    },
    {
      "Dat_Referencia": "2017-10-30 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39674,
      "QtdAbandonadas": 137496
    },
    {
      "Dat_Referencia": "2017-10-31 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39032,
      "QtdAbandonadas": 133314
    },
    {
      "Dat_Referencia": "2017-11-01 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 78857,
      "QtdAbandonadas": 269319
    },
    {
      "Dat_Referencia": "2017-11-02 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 71653,
      "QtdAbandonadas": 161701
    },
    {
      "Dat_Referencia": "2017-11-03 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 51750,
      "QtdAbandonadas": 177229
    },
    {
      "Dat_Referencia": "2017-11-04 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41496,
      "QtdAbandonadas": 143793
    },
    {
      "Dat_Referencia": "2017-11-05 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 31665,
      "QtdAbandonadas": 104063
    },
    {
      "Dat_Referencia": "2017-11-06 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 51108,
      "QtdAbandonadas": 181200
    },
    {
      "Dat_Referencia": "2017-11-07 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 48194,
      "QtdAbandonadas": 161567
    },
    {
      "Dat_Referencia": "2017-11-08 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 46879,
      "QtdAbandonadas": 156400
    },
    {
      "Dat_Referencia": "2017-11-09 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45294,
      "QtdAbandonadas": 144558
    },
    {
      "Dat_Referencia": "2017-11-10 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42751,
      "QtdAbandonadas": 140002
    },
    {
      "Dat_Referencia": "2017-11-11 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38360,
      "QtdAbandonadas": 125980
    },
    {
      "Dat_Referencia": "2017-11-12 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 28543,
      "QtdAbandonadas": 91338
    },
    {
      "Dat_Referencia": "2017-11-13 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 42954,
      "QtdAbandonadas": 145412
    },
    {
      "Dat_Referencia": "2017-11-14 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41415,
      "QtdAbandonadas": 140778
    },
    {
      "Dat_Referencia": "2017-11-15 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 35503,
      "QtdAbandonadas": 116622
    },
    {
      "Dat_Referencia": "2017-11-16 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39903,
      "QtdAbandonadas": 139412
    },
    {
      "Dat_Referencia": "2017-11-17 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39921,
      "QtdAbandonadas": 138301
    },
    {
      "Dat_Referencia": "2017-11-18 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 36428,
      "QtdAbandonadas": 120869
    },
    {
      "Dat_Referencia": "2017-11-19 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 22782,
      "QtdAbandonadas": 74357
    },
    {
      "Dat_Referencia": "2017-11-20 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39952,
      "QtdAbandonadas": 136066
    },
    {
      "Dat_Referencia": "2017-11-21 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39772,
      "QtdAbandonadas": 141339
    },
    {
      "Dat_Referencia": "2017-11-22 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 36807,
      "QtdAbandonadas": 124904
    },
    {
      "Dat_Referencia": "2017-11-23 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 37520,
      "QtdAbandonadas": 127839
    },
    {
      "Dat_Referencia": "2017-11-24 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 35511,
      "QtdAbandonadas": 120944
    },
    {
      "Dat_Referencia": "2017-11-25 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 33588,
      "QtdAbandonadas": 104332
    },
    {
      "Dat_Referencia": "2017-11-26 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 29646,
      "QtdAbandonadas": 87539
    },
    {
      "Dat_Referencia": "2017-11-27 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 34877,
      "QtdAbandonadas": 120321
    },
    {
      "Dat_Referencia": "2017-11-28 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 35682,
      "QtdAbandonadas": 121763
    },
    {
      "Dat_Referencia": "2017-11-29 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45837,
      "QtdAbandonadas": 122558
    },
    {
      "Dat_Referencia": "2017-11-30 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45796,
      "QtdAbandonadas": 115138
    },
    {
      "Dat_Referencia": "2017-12-01 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 78479,
      "QtdAbandonadas": 201140
    },
    {
      "Dat_Referencia": "2017-12-02 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 55998,
      "QtdAbandonadas": 149990
    },
    {
      "Dat_Referencia": "2017-12-03 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39564,
      "QtdAbandonadas": 101486
    },
    {
      "Dat_Referencia": "2017-12-04 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 55751,
      "QtdAbandonadas": 138870
    },
    {
      "Dat_Referencia": "2017-12-05 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 51153,
      "QtdAbandonadas": 135336
    },
    {
      "Dat_Referencia": "2017-12-06 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 51664,
      "QtdAbandonadas": 135608
    },
    {
      "Dat_Referencia": "2017-12-07 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 47923,
      "QtdAbandonadas": 127224
    },
    {
      "Dat_Referencia": "2017-12-08 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 43983,
      "QtdAbandonadas": 116915
    },
    {
      "Dat_Referencia": "2017-12-09 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39948,
      "QtdAbandonadas": 104586
    },
    {
      "Dat_Referencia": "2017-12-10 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 32922,
      "QtdAbandonadas": 86071
    },
    {
      "Dat_Referencia": "2017-12-11 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45243,
      "QtdAbandonadas": 119669
    },
    {
      "Dat_Referencia": "2017-12-12 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 45286,
      "QtdAbandonadas": 120560
    },
    {
      "Dat_Referencia": "2017-12-13 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 41714,
      "QtdAbandonadas": 109861
    },
    {
      "Dat_Referencia": "2017-12-14 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39866,
      "QtdAbandonadas": 98420
    },
    {
      "Dat_Referencia": "2017-12-15 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38452,
      "QtdAbandonadas": 96538
    },
    {
      "Dat_Referencia": "2017-12-16 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 35233,
      "QtdAbandonadas": 88111
    },
    {
      "Dat_Referencia": "2017-12-17 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 29398,
      "QtdAbandonadas": 72943
    },
    {
      "Dat_Referencia": "2017-12-18 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 38724,
      "QtdAbandonadas": 99132
    },
    {
      "Dat_Referencia": "2017-12-19 00:00:00.000",
      "Grupo": "*880 Pré",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 39311,
      "QtdAbandonadas": 98197
    },
    {
      "Dat_Referencia": "2017-01-01 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6374,
      "QtdAbandonadas": 12609
    },
    {
      "Dat_Referencia": "2017-01-02 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 12489,
      "QtdAbandonadas": 27426
    },
    {
      "Dat_Referencia": "2017-01-03 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 12110,
      "QtdAbandonadas": 25752
    },
    {
      "Dat_Referencia": "2017-01-04 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 11496,
      "QtdAbandonadas": 24782
    },
    {
      "Dat_Referencia": "2017-01-05 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7874,
      "QtdAbandonadas": 17388
    },
    {
      "Dat_Referencia": "2017-01-06 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6951,
      "QtdAbandonadas": 15396
    },
    {
      "Dat_Referencia": "2017-01-07 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5853,
      "QtdAbandonadas": 12578
    },
    {
      "Dat_Referencia": "2017-01-08 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4260,
      "QtdAbandonadas": 9534
    },
    {
      "Dat_Referencia": "2017-01-09 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6957,
      "QtdAbandonadas": 16129
    },
    {
      "Dat_Referencia": "2017-01-10 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6833,
      "QtdAbandonadas": 15568
    },
    {
      "Dat_Referencia": "2017-01-11 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7082,
      "QtdAbandonadas": 14231
    },
    {
      "Dat_Referencia": "2017-01-12 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6279,
      "QtdAbandonadas": 13837
    },
    {
      "Dat_Referencia": "2017-01-13 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6014,
      "QtdAbandonadas": 13229
    },
    {
      "Dat_Referencia": "2017-01-14 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4492,
      "QtdAbandonadas": 10227
    },
    {
      "Dat_Referencia": "2017-01-15 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3567,
      "QtdAbandonadas": 8096
    },
    {
      "Dat_Referencia": "2017-01-16 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6040,
      "QtdAbandonadas": 13381
    },
    {
      "Dat_Referencia": "2017-01-17 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5813,
      "QtdAbandonadas": 13056
    },
    {
      "Dat_Referencia": "2017-01-18 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5533,
      "QtdAbandonadas": 12931
    },
    {
      "Dat_Referencia": "2017-01-19 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5448,
      "QtdAbandonadas": 13363
    },
    {
      "Dat_Referencia": "2017-01-20 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5403,
      "QtdAbandonadas": 14139
    },
    {
      "Dat_Referencia": "2017-01-21 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4850,
      "QtdAbandonadas": 11286
    },
    {
      "Dat_Referencia": "2017-01-22 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3561,
      "QtdAbandonadas": 8633
    },
    {
      "Dat_Referencia": "2017-01-23 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5967,
      "QtdAbandonadas": 15129
    },
    {
      "Dat_Referencia": "2017-01-24 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6777,
      "QtdAbandonadas": 14655
    },
    {
      "Dat_Referencia": "2017-01-25 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5842,
      "QtdAbandonadas": 15428
    },
    {
      "Dat_Referencia": "2017-01-26 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5579,
      "QtdAbandonadas": 15054
    },
    {
      "Dat_Referencia": "2017-01-27 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5333,
      "QtdAbandonadas": 14315
    },
    {
      "Dat_Referencia": "2017-01-28 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4117,
      "QtdAbandonadas": 10914
    },
    {
      "Dat_Referencia": "2017-01-29 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3260,
      "QtdAbandonadas": 7524
    },
    {
      "Dat_Referencia": "2017-01-30 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5751,
      "QtdAbandonadas": 13846
    },
    {
      "Dat_Referencia": "2017-01-31 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6759,
      "QtdAbandonadas": 15839
    },
    {
      "Dat_Referencia": "2017-02-01 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8138,
      "QtdAbandonadas": 20087
    },
    {
      "Dat_Referencia": "2017-02-02 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8009,
      "QtdAbandonadas": 17151
    },
    {
      "Dat_Referencia": "2017-02-03 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6724,
      "QtdAbandonadas": 15774
    },
    {
      "Dat_Referencia": "2017-02-04 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5569,
      "QtdAbandonadas": 12057
    },
    {
      "Dat_Referencia": "2017-02-05 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4397,
      "QtdAbandonadas": 10128
    },
    {
      "Dat_Referencia": "2017-02-06 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6844,
      "QtdAbandonadas": 17135
    },
    {
      "Dat_Referencia": "2017-02-07 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6669,
      "QtdAbandonadas": 16705
    },
    {
      "Dat_Referencia": "2017-02-08 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6651,
      "QtdAbandonadas": 16838
    },
    {
      "Dat_Referencia": "2017-02-09 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6614,
      "QtdAbandonadas": 15726
    },
    {
      "Dat_Referencia": "2017-02-10 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6145,
      "QtdAbandonadas": 16373
    },
    {
      "Dat_Referencia": "2017-02-11 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4659,
      "QtdAbandonadas": 12077
    },
    {
      "Dat_Referencia": "2017-02-12 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3338,
      "QtdAbandonadas": 6231
    },
    {
      "Dat_Referencia": "2017-02-13 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6262,
      "QtdAbandonadas": 16408
    },
    {
      "Dat_Referencia": "2017-02-14 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5997,
      "QtdAbandonadas": 15003
    },
    {
      "Dat_Referencia": "2017-02-15 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6295,
      "QtdAbandonadas": 15364
    },
    {
      "Dat_Referencia": "2017-02-16 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5832,
      "QtdAbandonadas": 14243
    },
    {
      "Dat_Referencia": "2017-02-17 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5406,
      "QtdAbandonadas": 14253
    },
    {
      "Dat_Referencia": "2017-02-18 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4728,
      "QtdAbandonadas": 11672
    },
    {
      "Dat_Referencia": "2017-02-19 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3436,
      "QtdAbandonadas": 8252
    },
    {
      "Dat_Referencia": "2017-02-20 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5570,
      "QtdAbandonadas": 14567
    },
    {
      "Dat_Referencia": "2017-02-21 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5509,
      "QtdAbandonadas": 13273
    },
    {
      "Dat_Referencia": "2017-02-22 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5498,
      "QtdAbandonadas": 13183
    },
    {
      "Dat_Referencia": "2017-02-23 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5260,
      "QtdAbandonadas": 12883
    },
    {
      "Dat_Referencia": "2017-02-24 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5573,
      "QtdAbandonadas": 12935
    },
    {
      "Dat_Referencia": "2017-02-25 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4776,
      "QtdAbandonadas": 11300
    },
    {
      "Dat_Referencia": "2017-02-26 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3604,
      "QtdAbandonadas": 8589
    },
    {
      "Dat_Referencia": "2017-02-27 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4361,
      "QtdAbandonadas": 10181
    },
    {
      "Dat_Referencia": "2017-02-28 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4579,
      "QtdAbandonadas": 10411
    },
    {
      "Dat_Referencia": "2017-03-01 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8974,
      "QtdAbandonadas": 21301
    },
    {
      "Dat_Referencia": "2017-03-02 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7754,
      "QtdAbandonadas": 20290
    },
    {
      "Dat_Referencia": "2017-03-03 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7234,
      "QtdAbandonadas": 19012
    },
    {
      "Dat_Referencia": "2017-03-04 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5497,
      "QtdAbandonadas": 14296
    },
    {
      "Dat_Referencia": "2017-03-05 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3834,
      "QtdAbandonadas": 9981
    },
    {
      "Dat_Referencia": "2017-03-06 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6328,
      "QtdAbandonadas": 16434
    },
    {
      "Dat_Referencia": "2017-03-07 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6431,
      "QtdAbandonadas": 16896
    },
    {
      "Dat_Referencia": "2017-03-08 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6488,
      "QtdAbandonadas": 15536
    },
    {
      "Dat_Referencia": "2017-03-09 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5895,
      "QtdAbandonadas": 15813
    },
    {
      "Dat_Referencia": "2017-03-10 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5466,
      "QtdAbandonadas": 15489
    },
    {
      "Dat_Referencia": "2017-03-11 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4395,
      "QtdAbandonadas": 12165
    },
    {
      "Dat_Referencia": "2017-03-12 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3407,
      "QtdAbandonadas": 8810
    },
    {
      "Dat_Referencia": "2017-03-13 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5666,
      "QtdAbandonadas": 15505
    },
    {
      "Dat_Referencia": "2017-03-14 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5476,
      "QtdAbandonadas": 15506
    },
    {
      "Dat_Referencia": "2017-03-15 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6174,
      "QtdAbandonadas": 21640
    },
    {
      "Dat_Referencia": "2017-03-16 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7262,
      "QtdAbandonadas": 27557
    },
    {
      "Dat_Referencia": "2017-03-17 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6851,
      "QtdAbandonadas": 24120
    },
    {
      "Dat_Referencia": "2017-03-18 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5355,
      "QtdAbandonadas": 21222
    },
    {
      "Dat_Referencia": "2017-03-19 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3201,
      "QtdAbandonadas": 12101
    },
    {
      "Dat_Referencia": "2017-03-20 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7573,
      "QtdAbandonadas": 26580
    },
    {
      "Dat_Referencia": "2017-03-21 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8226,
      "QtdAbandonadas": 20144
    },
    {
      "Dat_Referencia": "2017-03-22 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7814,
      "QtdAbandonadas": 18383
    },
    {
      "Dat_Referencia": "2017-03-23 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7675,
      "QtdAbandonadas": 17769
    },
    {
      "Dat_Referencia": "2017-03-24 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7371,
      "QtdAbandonadas": 16653
    },
    {
      "Dat_Referencia": "2017-03-25 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5781,
      "QtdAbandonadas": 13547
    },
    {
      "Dat_Referencia": "2017-03-26 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4200,
      "QtdAbandonadas": 9968
    },
    {
      "Dat_Referencia": "2017-03-27 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6699,
      "QtdAbandonadas": 16558
    },
    {
      "Dat_Referencia": "2017-03-28 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7729,
      "QtdAbandonadas": 18995
    },
    {
      "Dat_Referencia": "2017-03-29 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7539,
      "QtdAbandonadas": 17449
    },
    {
      "Dat_Referencia": "2017-03-30 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8393,
      "QtdAbandonadas": 17776
    },
    {
      "Dat_Referencia": "2017-03-31 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8840,
      "QtdAbandonadas": 18105
    },
    {
      "Dat_Referencia": "2017-04-01 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 9456,
      "QtdAbandonadas": 20623
    },
    {
      "Dat_Referencia": "2017-04-02 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7008,
      "QtdAbandonadas": 14576
    },
    {
      "Dat_Referencia": "2017-04-03 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 10920,
      "QtdAbandonadas": 25420
    },
    {
      "Dat_Referencia": "2017-04-04 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 10092,
      "QtdAbandonadas": 23629
    },
    {
      "Dat_Referencia": "2017-04-05 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 10033,
      "QtdAbandonadas": 24065
    },
    {
      "Dat_Referencia": "2017-04-06 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 9476,
      "QtdAbandonadas": 22402
    },
    {
      "Dat_Referencia": "2017-04-07 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8873,
      "QtdAbandonadas": 19984
    },
    {
      "Dat_Referencia": "2017-04-08 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7211,
      "QtdAbandonadas": 16235
    },
    {
      "Dat_Referencia": "2017-04-09 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4980,
      "QtdAbandonadas": 9883
    },
    {
      "Dat_Referencia": "2017-04-10 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8746,
      "QtdAbandonadas": 23561
    },
    {
      "Dat_Referencia": "2017-04-11 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8695,
      "QtdAbandonadas": 23020
    },
    {
      "Dat_Referencia": "2017-04-12 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8506,
      "QtdAbandonadas": 22594
    },
    {
      "Dat_Referencia": "2017-04-13 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7827,
      "QtdAbandonadas": 21129
    },
    {
      "Dat_Referencia": "2017-04-14 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5511,
      "QtdAbandonadas": 14202
    },
    {
      "Dat_Referencia": "2017-04-15 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5805,
      "QtdAbandonadas": 15526
    },
    {
      "Dat_Referencia": "2017-04-16 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4838,
      "QtdAbandonadas": 12417
    },
    {
      "Dat_Referencia": "2017-04-17 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8409,
      "QtdAbandonadas": 23106
    },
    {
      "Dat_Referencia": "2017-04-18 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7874,
      "QtdAbandonadas": 22335
    },
    {
      "Dat_Referencia": "2017-04-19 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7325,
      "QtdAbandonadas": 20671
    },
    {
      "Dat_Referencia": "2017-04-20 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7470,
      "QtdAbandonadas": 20454
    },
    {
      "Dat_Referencia": "2017-04-21 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5974,
      "QtdAbandonadas": 15557
    },
    {
      "Dat_Referencia": "2017-04-22 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5847,
      "QtdAbandonadas": 14630
    },
    {
      "Dat_Referencia": "2017-04-23 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3616,
      "QtdAbandonadas": 8985
    },
    {
      "Dat_Referencia": "2017-04-24 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6666,
      "QtdAbandonadas": 18264
    },
    {
      "Dat_Referencia": "2017-04-25 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7208,
      "QtdAbandonadas": 20245
    },
    {
      "Dat_Referencia": "2017-04-26 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8172,
      "QtdAbandonadas": 20504
    },
    {
      "Dat_Referencia": "2017-04-27 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7034,
      "QtdAbandonadas": 20148
    },
    {
      "Dat_Referencia": "2017-04-28 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6842,
      "QtdAbandonadas": 18568
    },
    {
      "Dat_Referencia": "2017-04-29 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6502,
      "QtdAbandonadas": 15686
    },
    {
      "Dat_Referencia": "2017-04-30 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6374,
      "QtdAbandonadas": 13486
    },
    {
      "Dat_Referencia": "2017-05-01 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8382,
      "QtdAbandonadas": 20291
    },
    {
      "Dat_Referencia": "2017-05-02 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 11093,
      "QtdAbandonadas": 27123
    },
    {
      "Dat_Referencia": "2017-05-03 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 14817,
      "QtdAbandonadas": 24762
    },
    {
      "Dat_Referencia": "2017-05-04 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 9257,
      "QtdAbandonadas": 22411
    },
    {
      "Dat_Referencia": "2017-05-05 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 9444,
      "QtdAbandonadas": 22192
    },
    {
      "Dat_Referencia": "2017-05-06 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7438,
      "QtdAbandonadas": 18506
    },
    {
      "Dat_Referencia": "2017-05-07 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5650,
      "QtdAbandonadas": 13581
    },
    {
      "Dat_Referencia": "2017-05-08 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8842,
      "QtdAbandonadas": 23273
    },
    {
      "Dat_Referencia": "2017-05-09 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8628,
      "QtdAbandonadas": 21792
    },
    {
      "Dat_Referencia": "2017-05-10 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8390,
      "QtdAbandonadas": 21694
    },
    {
      "Dat_Referencia": "2017-05-11 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8023,
      "QtdAbandonadas": 20527
    },
    {
      "Dat_Referencia": "2017-05-12 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4499,
      "QtdAbandonadas": 11342
    },
    {
      "Dat_Referencia": "2017-05-13 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2245,
      "QtdAbandonadas": 3874
    },
    {
      "Dat_Referencia": "2017-05-14 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3030,
      "QtdAbandonadas": 4799
    },
    {
      "Dat_Referencia": "2017-05-15 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8755,
      "QtdAbandonadas": 20375
    },
    {
      "Dat_Referencia": "2017-05-16 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8072,
      "QtdAbandonadas": 19403
    },
    {
      "Dat_Referencia": "2017-05-17 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7783,
      "QtdAbandonadas": 18046
    },
    {
      "Dat_Referencia": "2017-05-18 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7381,
      "QtdAbandonadas": 16761
    },
    {
      "Dat_Referencia": "2017-05-19 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6933,
      "QtdAbandonadas": 15804
    },
    {
      "Dat_Referencia": "2017-05-20 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5822,
      "QtdAbandonadas": 12956
    },
    {
      "Dat_Referencia": "2017-05-21 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3621,
      "QtdAbandonadas": 7878
    },
    {
      "Dat_Referencia": "2017-05-22 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 9248,
      "QtdAbandonadas": 17050
    },
    {
      "Dat_Referencia": "2017-05-23 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7017,
      "QtdAbandonadas": 16414
    },
    {
      "Dat_Referencia": "2017-05-24 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6374,
      "QtdAbandonadas": 16062
    },
    {
      "Dat_Referencia": "2017-05-25 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6069,
      "QtdAbandonadas": 15762
    },
    {
      "Dat_Referencia": "2017-05-26 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5901,
      "QtdAbandonadas": 14545
    },
    {
      "Dat_Referencia": "2017-05-27 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5292,
      "QtdAbandonadas": 12589
    },
    {
      "Dat_Referencia": "2017-05-28 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3943,
      "QtdAbandonadas": 9886
    },
    {
      "Dat_Referencia": "2017-05-29 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6597,
      "QtdAbandonadas": 15230
    },
    {
      "Dat_Referencia": "2017-05-30 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6626,
      "QtdAbandonadas": 15446
    },
    {
      "Dat_Referencia": "2017-05-31 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7940,
      "QtdAbandonadas": 17599
    },
    {
      "Dat_Referencia": "2017-06-01 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 10428,
      "QtdAbandonadas": 25205
    },
    {
      "Dat_Referencia": "2017-06-02 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8984,
      "QtdAbandonadas": 21236
    },
    {
      "Dat_Referencia": "2017-06-03 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6904,
      "QtdAbandonadas": 16447
    },
    {
      "Dat_Referencia": "2017-06-04 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5049,
      "QtdAbandonadas": 12256
    },
    {
      "Dat_Referencia": "2017-06-05 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8421,
      "QtdAbandonadas": 23855
    },
    {
      "Dat_Referencia": "2017-06-06 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8355,
      "QtdAbandonadas": 22387
    },
    {
      "Dat_Referencia": "2017-06-07 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8122,
      "QtdAbandonadas": 22205
    },
    {
      "Dat_Referencia": "2017-06-08 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7821,
      "QtdAbandonadas": 21477
    },
    {
      "Dat_Referencia": "2017-06-09 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7376,
      "QtdAbandonadas": 18884
    },
    {
      "Dat_Referencia": "2017-06-10 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5619,
      "QtdAbandonadas": 15306
    },
    {
      "Dat_Referencia": "2017-06-11 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4196,
      "QtdAbandonadas": 10357
    },
    {
      "Dat_Referencia": "2017-06-12 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6833,
      "QtdAbandonadas": 18378
    },
    {
      "Dat_Referencia": "2017-06-13 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6569,
      "QtdAbandonadas": 17813
    },
    {
      "Dat_Referencia": "2017-06-14 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6550,
      "QtdAbandonadas": 18303
    },
    {
      "Dat_Referencia": "2017-06-15 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5173,
      "QtdAbandonadas": 13749
    },
    {
      "Dat_Referencia": "2017-06-16 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6432,
      "QtdAbandonadas": 16406
    },
    {
      "Dat_Referencia": "2017-06-17 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5215,
      "QtdAbandonadas": 12839
    },
    {
      "Dat_Referencia": "2017-06-18 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4138,
      "QtdAbandonadas": 9917
    },
    {
      "Dat_Referencia": "2017-06-19 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6296,
      "QtdAbandonadas": 16418
    },
    {
      "Dat_Referencia": "2017-06-20 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6462,
      "QtdAbandonadas": 17183
    },
    {
      "Dat_Referencia": "2017-06-21 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6211,
      "QtdAbandonadas": 15813
    },
    {
      "Dat_Referencia": "2017-06-22 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6139,
      "QtdAbandonadas": 14674
    },
    {
      "Dat_Referencia": "2017-06-23 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5338,
      "QtdAbandonadas": 13739
    },
    {
      "Dat_Referencia": "2017-06-24 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4461,
      "QtdAbandonadas": 10781
    },
    {
      "Dat_Referencia": "2017-06-25 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3354,
      "QtdAbandonadas": 8393
    },
    {
      "Dat_Referencia": "2017-06-26 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 9122,
      "QtdAbandonadas": 14141
    },
    {
      "Dat_Referencia": "2017-06-27 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5965,
      "QtdAbandonadas": 16434
    },
    {
      "Dat_Referencia": "2017-06-28 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5782,
      "QtdAbandonadas": 15991
    },
    {
      "Dat_Referencia": "2017-06-29 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5792,
      "QtdAbandonadas": 14329
    },
    {
      "Dat_Referencia": "2017-06-30 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6903,
      "QtdAbandonadas": 15469
    },
    {
      "Dat_Referencia": "2017-07-01 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7497,
      "QtdAbandonadas": 18073
    },
    {
      "Dat_Referencia": "2017-07-02 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5623,
      "QtdAbandonadas": 12182
    },
    {
      "Dat_Referencia": "2017-07-03 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8201,
      "QtdAbandonadas": 19264
    },
    {
      "Dat_Referencia": "2017-07-04 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8006,
      "QtdAbandonadas": 20299
    },
    {
      "Dat_Referencia": "2017-07-05 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7187,
      "QtdAbandonadas": 20725
    },
    {
      "Dat_Referencia": "2017-07-06 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8146,
      "QtdAbandonadas": 19062
    },
    {
      "Dat_Referencia": "2017-07-07 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7313,
      "QtdAbandonadas": 17949
    },
    {
      "Dat_Referencia": "2017-07-08 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5680,
      "QtdAbandonadas": 14915
    },
    {
      "Dat_Referencia": "2017-07-09 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4440,
      "QtdAbandonadas": 11089
    },
    {
      "Dat_Referencia": "2017-07-10 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7509,
      "QtdAbandonadas": 20945
    },
    {
      "Dat_Referencia": "2017-07-11 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7325,
      "QtdAbandonadas": 19656
    },
    {
      "Dat_Referencia": "2017-07-12 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 9145,
      "QtdAbandonadas": 18389
    },
    {
      "Dat_Referencia": "2017-07-13 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6380,
      "QtdAbandonadas": 17538
    },
    {
      "Dat_Referencia": "2017-07-14 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6206,
      "QtdAbandonadas": 15857
    },
    {
      "Dat_Referencia": "2017-07-15 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5237,
      "QtdAbandonadas": 13629
    },
    {
      "Dat_Referencia": "2017-07-16 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3893,
      "QtdAbandonadas": 10076
    },
    {
      "Dat_Referencia": "2017-07-17 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6182,
      "QtdAbandonadas": 16628
    },
    {
      "Dat_Referencia": "2017-07-18 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5855,
      "QtdAbandonadas": 15086
    },
    {
      "Dat_Referencia": "2017-07-19 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5688,
      "QtdAbandonadas": 15757
    },
    {
      "Dat_Referencia": "2017-07-20 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5850,
      "QtdAbandonadas": 16096
    },
    {
      "Dat_Referencia": "2017-07-21 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5543,
      "QtdAbandonadas": 14912
    },
    {
      "Dat_Referencia": "2017-07-22 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4555,
      "QtdAbandonadas": 11677
    },
    {
      "Dat_Referencia": "2017-07-23 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2650,
      "QtdAbandonadas": 7113
    },
    {
      "Dat_Referencia": "2017-07-24 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5858,
      "QtdAbandonadas": 16788
    },
    {
      "Dat_Referencia": "2017-07-25 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6059,
      "QtdAbandonadas": 17006
    },
    {
      "Dat_Referencia": "2017-07-26 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8626,
      "QtdAbandonadas": 15395
    },
    {
      "Dat_Referencia": "2017-07-27 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 9523,
      "QtdAbandonadas": 14891
    },
    {
      "Dat_Referencia": "2017-07-28 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5663,
      "QtdAbandonadas": 16726
    },
    {
      "Dat_Referencia": "2017-07-29 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5012,
      "QtdAbandonadas": 13107
    },
    {
      "Dat_Referencia": "2017-07-30 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3957,
      "QtdAbandonadas": 10175
    },
    {
      "Dat_Referencia": "2017-07-31 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6057,
      "QtdAbandonadas": 17118
    },
    {
      "Dat_Referencia": "2017-08-01 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7993,
      "QtdAbandonadas": 22989
    },
    {
      "Dat_Referencia": "2017-08-02 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 9297,
      "QtdAbandonadas": 20956
    },
    {
      "Dat_Referencia": "2017-08-03 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 8189,
      "QtdAbandonadas": 19848
    },
    {
      "Dat_Referencia": "2017-08-04 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 9041,
      "QtdAbandonadas": 18863
    },
    {
      "Dat_Referencia": "2017-08-05 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6785,
      "QtdAbandonadas": 15791
    },
    {
      "Dat_Referencia": "2017-08-06 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4869,
      "QtdAbandonadas": 11539
    },
    {
      "Dat_Referencia": "2017-08-07 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7444,
      "QtdAbandonadas": 18382
    },
    {
      "Dat_Referencia": "2017-08-08 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7135,
      "QtdAbandonadas": 17648
    },
    {
      "Dat_Referencia": "2017-08-09 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7209,
      "QtdAbandonadas": 18507
    },
    {
      "Dat_Referencia": "2017-08-10 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7016,
      "QtdAbandonadas": 17493
    },
    {
      "Dat_Referencia": "2017-08-11 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6283,
      "QtdAbandonadas": 15075
    },
    {
      "Dat_Referencia": "2017-08-12 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5377,
      "QtdAbandonadas": 12568
    },
    {
      "Dat_Referencia": "2017-08-13 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2109,
      "QtdAbandonadas": 4952
    },
    {
      "Dat_Referencia": "2017-08-14 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6884,
      "QtdAbandonadas": 17279
    },
    {
      "Dat_Referencia": "2017-08-15 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6686,
      "QtdAbandonadas": 16647
    },
    {
      "Dat_Referencia": "2017-08-16 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6908,
      "QtdAbandonadas": 16822
    },
    {
      "Dat_Referencia": "2017-08-17 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6668,
      "QtdAbandonadas": 15868
    },
    {
      "Dat_Referencia": "2017-08-18 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6028,
      "QtdAbandonadas": 14522
    },
    {
      "Dat_Referencia": "2017-08-19 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4546,
      "QtdAbandonadas": 11182
    },
    {
      "Dat_Referencia": "2017-08-20 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3092,
      "QtdAbandonadas": 7385
    },
    {
      "Dat_Referencia": "2017-08-21 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6292,
      "QtdAbandonadas": 15002
    },
    {
      "Dat_Referencia": "2017-08-22 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6092,
      "QtdAbandonadas": 14634
    },
    {
      "Dat_Referencia": "2017-08-23 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5987,
      "QtdAbandonadas": 13562
    },
    {
      "Dat_Referencia": "2017-08-24 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4693,
      "QtdAbandonadas": 11393
    },
    {
      "Dat_Referencia": "2017-08-25 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3544,
      "QtdAbandonadas": 6902
    },
    {
      "Dat_Referencia": "2017-08-26 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3602,
      "QtdAbandonadas": 9037
    },
    {
      "Dat_Referencia": "2017-08-27 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2619,
      "QtdAbandonadas": 6426
    },
    {
      "Dat_Referencia": "2017-08-28 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4304,
      "QtdAbandonadas": 11208
    },
    {
      "Dat_Referencia": "2017-08-29 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5569,
      "QtdAbandonadas": 13550
    },
    {
      "Dat_Referencia": "2017-08-30 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6200,
      "QtdAbandonadas": 15512
    },
    {
      "Dat_Referencia": "2017-08-31 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6444,
      "QtdAbandonadas": 17672
    },
    {
      "Dat_Referencia": "2017-09-01 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7963,
      "QtdAbandonadas": 23477
    },
    {
      "Dat_Referencia": "2017-09-02 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6334,
      "QtdAbandonadas": 17790
    },
    {
      "Dat_Referencia": "2017-09-03 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4371,
      "QtdAbandonadas": 12341
    },
    {
      "Dat_Referencia": "2017-09-04 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6873,
      "QtdAbandonadas": 21671
    },
    {
      "Dat_Referencia": "2017-09-05 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6887,
      "QtdAbandonadas": 21748
    },
    {
      "Dat_Referencia": "2017-09-06 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6326,
      "QtdAbandonadas": 20821
    },
    {
      "Dat_Referencia": "2017-09-07 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4916,
      "QtdAbandonadas": 15069
    },
    {
      "Dat_Referencia": "2017-09-08 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5671,
      "QtdAbandonadas": 18409
    },
    {
      "Dat_Referencia": "2017-09-09 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4917,
      "QtdAbandonadas": 14849
    },
    {
      "Dat_Referencia": "2017-09-10 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4435,
      "QtdAbandonadas": 10805
    },
    {
      "Dat_Referencia": "2017-09-11 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6499,
      "QtdAbandonadas": 20307
    },
    {
      "Dat_Referencia": "2017-09-12 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6078,
      "QtdAbandonadas": 19582
    },
    {
      "Dat_Referencia": "2017-09-13 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6058,
      "QtdAbandonadas": 19261
    },
    {
      "Dat_Referencia": "2017-09-14 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5515,
      "QtdAbandonadas": 19561
    },
    {
      "Dat_Referencia": "2017-09-15 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5440,
      "QtdAbandonadas": 17873
    },
    {
      "Dat_Referencia": "2017-09-16 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4129,
      "QtdAbandonadas": 14601
    },
    {
      "Dat_Referencia": "2017-09-17 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3029,
      "QtdAbandonadas": 10469
    },
    {
      "Dat_Referencia": "2017-09-18 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5537,
      "QtdAbandonadas": 18922
    },
    {
      "Dat_Referencia": "2017-09-19 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4269,
      "QtdAbandonadas": 16070
    },
    {
      "Dat_Referencia": "2017-09-20 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3953,
      "QtdAbandonadas": 14520
    },
    {
      "Dat_Referencia": "2017-09-21 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5022,
      "QtdAbandonadas": 15412
    },
    {
      "Dat_Referencia": "2017-09-22 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4026,
      "QtdAbandonadas": 15298
    },
    {
      "Dat_Referencia": "2017-09-23 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3384,
      "QtdAbandonadas": 12128
    },
    {
      "Dat_Referencia": "2017-09-24 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2008,
      "QtdAbandonadas": 6810
    },
    {
      "Dat_Referencia": "2017-09-25 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4299,
      "QtdAbandonadas": 16852
    },
    {
      "Dat_Referencia": "2017-09-26 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4379,
      "QtdAbandonadas": 16884
    },
    {
      "Dat_Referencia": "2017-09-27 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4538,
      "QtdAbandonadas": 16832
    },
    {
      "Dat_Referencia": "2017-09-28 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4182,
      "QtdAbandonadas": 16814
    },
    {
      "Dat_Referencia": "2017-09-29 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4314,
      "QtdAbandonadas": 16149
    },
    {
      "Dat_Referencia": "2017-09-30 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4378,
      "QtdAbandonadas": 14590
    },
    {
      "Dat_Referencia": "2017-10-01 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3601,
      "QtdAbandonadas": 13423
    },
    {
      "Dat_Referencia": "2017-10-02 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5990,
      "QtdAbandonadas": 22778
    },
    {
      "Dat_Referencia": "2017-10-03 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6909,
      "QtdAbandonadas": 21553
    },
    {
      "Dat_Referencia": "2017-10-04 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5116,
      "QtdAbandonadas": 19675
    },
    {
      "Dat_Referencia": "2017-10-05 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5380,
      "QtdAbandonadas": 20089
    },
    {
      "Dat_Referencia": "2017-10-06 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5162,
      "QtdAbandonadas": 18624
    },
    {
      "Dat_Referencia": "2017-10-07 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4443,
      "QtdAbandonadas": 15989
    },
    {
      "Dat_Referencia": "2017-10-08 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3405,
      "QtdAbandonadas": 11759
    },
    {
      "Dat_Referencia": "2017-10-09 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5719,
      "QtdAbandonadas": 20351
    },
    {
      "Dat_Referencia": "2017-10-10 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6398,
      "QtdAbandonadas": 20330
    },
    {
      "Dat_Referencia": "2017-10-11 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5510,
      "QtdAbandonadas": 18296
    },
    {
      "Dat_Referencia": "2017-10-12 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3870,
      "QtdAbandonadas": 13852
    },
    {
      "Dat_Referencia": "2017-10-13 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4691,
      "QtdAbandonadas": 17342
    },
    {
      "Dat_Referencia": "2017-10-14 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3931,
      "QtdAbandonadas": 14103
    },
    {
      "Dat_Referencia": "2017-10-15 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3223,
      "QtdAbandonadas": 10894
    },
    {
      "Dat_Referencia": "2017-10-16 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5252,
      "QtdAbandonadas": 19283
    },
    {
      "Dat_Referencia": "2017-10-17 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5074,
      "QtdAbandonadas": 18858
    },
    {
      "Dat_Referencia": "2017-10-18 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4844,
      "QtdAbandonadas": 18355
    },
    {
      "Dat_Referencia": "2017-10-19 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5935,
      "QtdAbandonadas": 18008
    },
    {
      "Dat_Referencia": "2017-10-20 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4324,
      "QtdAbandonadas": 16418
    },
    {
      "Dat_Referencia": "2017-10-21 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3470,
      "QtdAbandonadas": 13006
    },
    {
      "Dat_Referencia": "2017-10-22 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2023,
      "QtdAbandonadas": 6879
    },
    {
      "Dat_Referencia": "2017-10-23 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4310,
      "QtdAbandonadas": 16833
    },
    {
      "Dat_Referencia": "2017-10-24 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4453,
      "QtdAbandonadas": 16878
    },
    {
      "Dat_Referencia": "2017-10-25 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4350,
      "QtdAbandonadas": 16917
    },
    {
      "Dat_Referencia": "2017-10-26 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4107,
      "QtdAbandonadas": 16257
    },
    {
      "Dat_Referencia": "2017-10-27 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4125,
      "QtdAbandonadas": 16181
    },
    {
      "Dat_Referencia": "2017-10-28 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3429,
      "QtdAbandonadas": 13050
    },
    {
      "Dat_Referencia": "2017-10-29 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3349,
      "QtdAbandonadas": 9274
    },
    {
      "Dat_Referencia": "2017-10-30 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4684,
      "QtdAbandonadas": 18165
    },
    {
      "Dat_Referencia": "2017-10-31 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5216,
      "QtdAbandonadas": 19332
    },
    {
      "Dat_Referencia": "2017-11-01 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7086,
      "QtdAbandonadas": 27420
    },
    {
      "Dat_Referencia": "2017-11-02 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7133,
      "QtdAbandonadas": 17619
    },
    {
      "Dat_Referencia": "2017-11-03 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5298,
      "QtdAbandonadas": 21568
    },
    {
      "Dat_Referencia": "2017-11-04 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4300,
      "QtdAbandonadas": 16519
    },
    {
      "Dat_Referencia": "2017-11-05 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3377,
      "QtdAbandonadas": 12820
    },
    {
      "Dat_Referencia": "2017-11-06 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6064,
      "QtdAbandonadas": 25011
    },
    {
      "Dat_Referencia": "2017-11-07 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5817,
      "QtdAbandonadas": 23667
    },
    {
      "Dat_Referencia": "2017-11-08 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5426,
      "QtdAbandonadas": 22681
    },
    {
      "Dat_Referencia": "2017-11-09 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5102,
      "QtdAbandonadas": 20871
    },
    {
      "Dat_Referencia": "2017-11-10 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4727,
      "QtdAbandonadas": 19992
    },
    {
      "Dat_Referencia": "2017-11-11 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3958,
      "QtdAbandonadas": 15505
    },
    {
      "Dat_Referencia": "2017-11-12 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2768,
      "QtdAbandonadas": 10425
    },
    {
      "Dat_Referencia": "2017-11-13 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4844,
      "QtdAbandonadas": 20216
    },
    {
      "Dat_Referencia": "2017-11-14 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4361,
      "QtdAbandonadas": 21866
    },
    {
      "Dat_Referencia": "2017-11-15 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3726,
      "QtdAbandonadas": 14781
    },
    {
      "Dat_Referencia": "2017-11-16 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4590,
      "QtdAbandonadas": 20027
    },
    {
      "Dat_Referencia": "2017-11-17 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4457,
      "QtdAbandonadas": 18462
    },
    {
      "Dat_Referencia": "2017-11-18 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4120,
      "QtdAbandonadas": 15125
    },
    {
      "Dat_Referencia": "2017-11-19 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2365,
      "QtdAbandonadas": 8372
    },
    {
      "Dat_Referencia": "2017-11-20 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4598,
      "QtdAbandonadas": 18807
    },
    {
      "Dat_Referencia": "2017-11-21 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4653,
      "QtdAbandonadas": 19609
    },
    {
      "Dat_Referencia": "2017-11-22 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4554,
      "QtdAbandonadas": 18317
    },
    {
      "Dat_Referencia": "2017-11-23 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4569,
      "QtdAbandonadas": 17888
    },
    {
      "Dat_Referencia": "2017-11-24 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4318,
      "QtdAbandonadas": 16419
    },
    {
      "Dat_Referencia": "2017-11-25 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3835,
      "QtdAbandonadas": 13561
    },
    {
      "Dat_Referencia": "2017-11-26 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2947,
      "QtdAbandonadas": 10484
    },
    {
      "Dat_Referencia": "2017-11-27 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4195,
      "QtdAbandonadas": 16746
    },
    {
      "Dat_Referencia": "2017-11-28 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4539,
      "QtdAbandonadas": 17166
    },
    {
      "Dat_Referencia": "2017-11-29 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5032,
      "QtdAbandonadas": 16524
    },
    {
      "Dat_Referencia": "2017-11-30 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5709,
      "QtdAbandonadas": 17356
    },
    {
      "Dat_Referencia": "2017-12-01 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 7141,
      "QtdAbandonadas": 22523
    },
    {
      "Dat_Referencia": "2017-12-02 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6883,
      "QtdAbandonadas": 15357
    },
    {
      "Dat_Referencia": "2017-12-03 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3957,
      "QtdAbandonadas": 11264
    },
    {
      "Dat_Referencia": "2017-12-04 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6199,
      "QtdAbandonadas": 18486
    },
    {
      "Dat_Referencia": "2017-12-05 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5806,
      "QtdAbandonadas": 19324
    },
    {
      "Dat_Referencia": "2017-12-06 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 6003,
      "QtdAbandonadas": 18739
    },
    {
      "Dat_Referencia": "2017-12-07 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5596,
      "QtdAbandonadas": 17904
    },
    {
      "Dat_Referencia": "2017-12-08 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5119,
      "QtdAbandonadas": 15924
    },
    {
      "Dat_Referencia": "2017-12-09 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4332,
      "QtdAbandonadas": 13261
    },
    {
      "Dat_Referencia": "2017-12-10 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3023,
      "QtdAbandonadas": 10419
    },
    {
      "Dat_Referencia": "2017-12-11 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4667,
      "QtdAbandonadas": 17567
    },
    {
      "Dat_Referencia": "2017-12-12 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 5002,
      "QtdAbandonadas": 17495
    },
    {
      "Dat_Referencia": "2017-12-13 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4624,
      "QtdAbandonadas": 16786
    },
    {
      "Dat_Referencia": "2017-12-14 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4496,
      "QtdAbandonadas": 14833
    },
    {
      "Dat_Referencia": "2017-12-15 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4026,
      "QtdAbandonadas": 14118
    },
    {
      "Dat_Referencia": "2017-12-16 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 3466,
      "QtdAbandonadas": 11358
    },
    {
      "Dat_Referencia": "2017-12-17 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 2891,
      "QtdAbandonadas": 8950
    },
    {
      "Dat_Referencia": "2017-12-18 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4148,
      "QtdAbandonadas": 14741
    },
    {
      "Dat_Referencia": "2017-12-19 00:00:00.000",
      "Grupo": "*880 Controle",
      "QtdDerivadas": 0,
      "QtdFinalizadas": 4383,
      "QtdAbandonadas": 14880
    }
  ]`);
//endregion

  constructor() { }

  getDadosAplicacaoMock () : Observable<any> {
    return of(this.dadosAplicacaoMock);
  }

  getDadosPorAplicacaoMock () : Observable<any> {
    let tempObjFinal = {};
    this.dadosAplicacaoMock.forEach((obj,index)=>{
      for(let key in obj){
        let tempKey;
        if(key=='Grupo'){
          tempKey = obj[key];
          if(!Array.isArray(tempObjFinal[tempKey])){
            tempObjFinal[tempKey] = [];
          }
          tempObjFinal[tempKey].push(obj);
        }
      }
    })
    return of(tempObjFinal);
  }
  getDadosPorAplicacaoPorMesMock() : Observable<any> {
  var tempMockDadosRaw;
  this.getDadosPorAplicacaoMock().subscribe((valor)=>{tempMockDadosRaw = valor;});

    var objDadosPorMes = {};
    for(let aplicacao in tempMockDadosRaw){
      objDadosPorMes[aplicacao] = {QtdAbandonadas : [0,0,0,0,0,0,0,0,0,0,0,0], QtdDerivadas : [0,0,0,0,0,0,0,0,0,0,0,0], QtdFinalizadas : [0,0,0,0,0,0,0,0,0,0,0,0] };
      for(let i = 0 ; i<12 ; i++){
        tempMockDadosRaw[aplicacao].filter(linha=>new Date(linha.Dat_Referencia.replace('','T')).getMonth()+1==i+1).forEach(linhaMes => {
          objDadosPorMes[aplicacao]['QtdAbandonadas'][i]+= parseInt(linhaMes.QtdAbandonadas);
          objDadosPorMes[aplicacao]['QtdDerivadas'][i]+= parseInt(linhaMes.QtdDerivadas);
          objDadosPorMes[aplicacao]['QtdFinalizadas'][i]+= parseInt(linhaMes.QtdFinalizadas);
        });
      }
    }
    return of(objDadosPorMes);
  }

  getDadosPorAplicacaoPorMesPorTipoMock() : Observable<any> {
    var tempMockDadosRaw;
    this.getDadosPorAplicacaoPorMesMock().subscribe((valor)=>{tempMockDadosRaw = valor;});
      for(let aplicacao in tempMockDadosRaw){
        tempMockDadosRaw[aplicacao]['Entrantes'] = [];
        tempMockDadosRaw[aplicacao]['Retidas'] = [];
        tempMockDadosRaw[aplicacao]['Retenção'] = [];
        tempMockDadosRaw[aplicacao]['Derivadas'] = [];
        tempMockDadosRaw[aplicacao]['Meta'] = [];
        tempMockDadosRaw[aplicacao]['Retidas'][12]=0;
        tempMockDadosRaw[aplicacao]['Entrantes'][12]=0;
        tempMockDadosRaw[aplicacao]['Retenção'][12]=0;
        tempMockDadosRaw[aplicacao]['Meta'][12]=0;
        tempMockDadosRaw[aplicacao]['Derivadas'][12]=0;
        for(let i = 0 ; i<12 ; i++){
          tempMockDadosRaw[aplicacao]['Retidas'][i] = tempMockDadosRaw[aplicacao]['QtdFinalizadas'][i]+tempMockDadosRaw[aplicacao]['QtdAbandonadas'][i];
          tempMockDadosRaw[aplicacao]['Entrantes'][i] = tempMockDadosRaw[aplicacao]['Retidas'][i] + tempMockDadosRaw[aplicacao]['QtdDerivadas'][i];
          tempMockDadosRaw[aplicacao]['Retenção'][i] = Math.floor((tempMockDadosRaw[aplicacao]['Retidas'][i]/tempMockDadosRaw[aplicacao]['Entrantes'][i])*100);
          tempMockDadosRaw[aplicacao]['Meta'][i] = Math.floor(Math.random()*((0.1*tempMockDadosRaw[aplicacao]['Retenção'][i])*(Math.random() < 0.5 ? -1 : 1))+tempMockDadosRaw[aplicacao]['Retenção'][i]);
          tempMockDadosRaw[aplicacao]['Derivadas'][i] = tempMockDadosRaw[aplicacao]['QtdDerivadas'][i];
        }
        for(let i = 0 ; i<12 ; i++){
          tempMockDadosRaw[aplicacao]['Retidas'][12]+= tempMockDadosRaw[aplicacao]['QtdFinalizadas'][i]+tempMockDadosRaw[aplicacao]['QtdAbandonadas'][i];
          tempMockDadosRaw[aplicacao]['Entrantes'][12]+= tempMockDadosRaw[aplicacao]['Retidas'][i] + tempMockDadosRaw[aplicacao]['QtdDerivadas'][i];
          tempMockDadosRaw[aplicacao]['Retenção'][12]+= Math.floor((tempMockDadosRaw[aplicacao]['Retidas'][i]/tempMockDadosRaw[aplicacao]['Entrantes'][i])*100);
          tempMockDadosRaw[aplicacao]['Meta'][12]+= Math.floor(Math.random()*((0.1*tempMockDadosRaw[aplicacao]['Retenção'][i])*(Math.random() < 0.5 ? -1 : 1))+tempMockDadosRaw[aplicacao]['Retenção'][i]);
          tempMockDadosRaw[aplicacao]['Derivadas'][12]+= tempMockDadosRaw[aplicacao]['QtdDerivadas'][i];
        }
        tempMockDadosRaw[aplicacao]['Retenção'][12] =  Math.round(tempMockDadosRaw[aplicacao]['Retenção'][12]/12);
        tempMockDadosRaw[aplicacao]['Meta'][12] =  Math.round(tempMockDadosRaw[aplicacao]['Meta'][12]/12);
       
       
        
     
      // for(let i = 0 ; i<12 ; i++){
      //   tempMockDadosRaw[aplicacao]['Retidas'][12]+= tempMockDadosRaw[aplicacao]['QtdFinalizadas'][i]+tempMockDadosRaw[aplicacao]['QtdAbandonadas'][i];
      //   tempMockDadosRaw[aplicacao]['Entrantes'][12]+= tempMockDadosRaw[aplicacao]['Retidas'][i] + tempMockDadosRaw[aplicacao]['QtdDerivadas'][i];
      //   tempMockDadosRaw[aplicacao]['Retenção'][12]+= (tempMockDadosRaw[aplicacao]['Retidas'][i]/tempMockDadosRaw[aplicacao]['Entrantes'][i])*100;
      //   tempMockDadosRaw[aplicacao]['Meta'][12]+= Math.floor(Math.random()*((0.1*tempMockDadosRaw[aplicacao]['Retenção'][i])*(Math.random() < 0.5 ? -1 : 1))+tempMockDadosRaw[aplicacao]['Retenção'][i]);
      //   // tempMockDadosRaw[aplicacao]['Derivadas'][12]+= tempMockDadosRaw[aplicacao]['QtdDerivadas'][i];
      // }
      delete  tempMockDadosRaw[aplicacao]['QtdFinalizadas'];
      delete  tempMockDadosRaw[aplicacao]['QtdAbandonadas'];
      delete  tempMockDadosRaw[aplicacao]['QtdDerivadas'];
    }
      
   

    tempMockDadosRaw['Mobilidade'] = {
      Entrantes: [0,0,0,0,0,0,0,0,0,0,0,0,0],
      Retidas:  [0,0,0,0,0,0,0,0,0,0,0,0,0],
      Retenção:  [0,0,0,0,0,0,0,0,0,0,0,0,0],
      Derivadas:  [0,0,0,0,0,0,0,0,0,0,0,0,0],
      Meta:  [0,0,0,0,0,0,0,0,0,0,0,0,0],
    }

    for(let aplicacao in tempMockDadosRaw){
      if(aplicacao!='Mobilidade'){
      for(let i=0;i<12;i++){
        tempMockDadosRaw['Mobilidade']['Entrantes'][i]+= tempMockDadosRaw[aplicacao]['Entrantes'][i];
        tempMockDadosRaw['Mobilidade']['Retidas'][i]+= tempMockDadosRaw[aplicacao]['Retidas'][i];
        tempMockDadosRaw['Mobilidade']['Retenção'][i]+= tempMockDadosRaw[aplicacao]['Retenção'][i];
        tempMockDadosRaw['Mobilidade']['Derivadas'][i]+= tempMockDadosRaw[aplicacao]['Derivadas'][i];
        tempMockDadosRaw['Mobilidade']['Meta'][i]+= tempMockDadosRaw[aplicacao]['Meta'][i];
        
      }
    }
      
    }
    return of(tempMockDadosRaw);
    }

    // for ( let mes = 1 ; mes <= 12 ; mes++ ) {
    //   tempMockDadosRaw.Mobilidade.Retidas.push(
    //     this.dadosAplicacaoMock.filter((x) => x['Dat_Referencia'].substring(5,7) == mes).reduce((anterior,atual) => anterior + atual['QtdFinalizadas'] + atual['QtdAbandonadas'], 0 )
    //   );
    //   tempMockDadosRaw.Mobilidade.Entrantes.push(
    //     this.dadosAplicacaoMock.filter((x) => x['Dat_Referencia'].substring(5,7) == mes).reduce((anterior,atual) => anterior + atual['QtdFinalizadas'] + atual['QtdAbandonadas'] + atual['QtdDerivadas'], 0 )
    //   );
    //   let calculoRetencao = Math.floor(100 * this.dadosAplicacaoMock.filter((x) => x['Dat_Referencia'].substring(5,7) == mes).reduce((anterior,atual) => anterior + atual['QtdAbandonadas'] + atual['QtdFinalizadas'], 0 ) / this.dadosAplicacaoMock.filter((x) => x['Dat_Referencia'].substring(5,7) == mes).reduce((anterior,atual) => anterior + atual['QtdDerivadas'] + atual['QtdFinalizadas'] + atual['QtdAbandonadas'], 0 ))
    //   let calculoMeta = Math.floor(Math.random()*((0.1*calculoRetencao)*(Math.random() < 0.5 ? -1 : 1))+calculoRetencao)

    //   tempMockDadosRaw.Mobilidade.Retenção.push(calculoRetencao);
    //   tempMockDadosRaw.Mobilidade.Derivadas.push(
    //     this.dadosAplicacaoMock.filter((x) => x['Dat_Referencia'].substring(5,7) == mes).reduce((anterior,atual) => anterior + atual['QtdDerivadas'], 0 )
    //   );
    //   tempMockDadosRaw.Mobilidade.Meta.push(calculoMeta);
    // }
    // return of(tempMockDadosRaw);
  
  

// Entrantes = Retidas e derivadas ok
// Retidas = finalizada+abandonadas ok
// Meta = random
// Retenção = retidas/entrantes*100
// Derivadas = Derivadas

  // getDadosPorAplicacaoPorTipo () : Object {
  //   var objPorAplicacaoPorMes = this.getDadosPorAplicacaoPorMesMock();
  //   for(let aplicacao in objPorAplicacaoPorMes){
  //       for(let i = 0 ; i<12 ; i++){
  //         objPorAplicacaoPorMes[aplicacao]['QtdAbandonadas'][i];
  //         objPorAplicacaoPorMes[aplicacao]['QtdDerivadas'][i];
  //         objPorAplicacaoPorMes[aplicacao]['QtdFinalizadas'][i];
  //         objPorAplicacaoPorMes[aplicacao]['QtdFinalizadas'][i];
  //       }
  //     }
    
  //   return {};
  // }





  removeAccents(strAccents)  {
    var strAccents = strAccents.split('');
    var strAccentsOut;
    var strAccentsLen = strAccents.length;
    var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
    var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
    for (var y = 0; y < strAccentsLen; y++) {
      if (accents.indexOf(strAccents[y]) != -1) {
        strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
      } else {
        strAccentsOut[y] = strAccents[y];
      }
    }
    strAccentsOut = strAccentsOut.join('');
    console.log(strAccentsOut);
    return strAccentsOut;
  }

public dadosSeparadosPorGrupo(dadosJson) {
  let agrupados = {
    mobilidade: dadosJson,
    pre: dadosJson.filter((el) => el.Grupo == 'Pré' ),
    pos: dadosJson.filter((el) => el.Grupo == 'Pós' ),
    controle: dadosJson.filter((el) => el.Grupo == 'Controle' ),
    oct: dadosJson.filter((el) => el.Grupo == 'OCT' ),
    oiTotal: dadosJson.filter((el) => el.Grupo == 'Oi Total' ),
    fixoEVelox: dadosJson.filter((el) => el.Grupo == 'Fixo e Velox' ),
    oiTv: dadosJson.filter((el) => el.Grupo == 'Oi TV' ),
    empresarial: dadosJson.filter((el) => el.Grupo == 'Empresarial' ),
    ussdPre: dadosJson.filter((el) => el.Grupo == 'USSD Pré' ),
    ussdControle: dadosJson.filter((el) => el.Grupo == 'USSD Controle' ),
    ussdPos: dadosJson.filter((el) => el.Grupo == 'USSD Pós' ),
    pre880: dadosJson.filter((el) => el.Grupo == '*880 Pré' ),
    controle880: dadosJson.filter((el) => el.Grupo == '*880 Controle' )
  }
  return agrupados
}

public totaisPorMes(dadosPorGrupo, stringGrupo) {
  let totais = {
    retidas: [],
    entrantes: [],
    retencao: [],
    derivadas: []
  }
    for ( let mes = 1 ; mes <= 12 ; mes++ ) {
      totais.retidas.push(
        dadosPorGrupo[stringGrupo].filter((x) => x.Dat_Referencia.substring(5,7) == mes).reduce((anterior,atual) => anterior + atual.QtdFinalizadas + atual.QtdAbandonadas, 0 )
      );
      totais.entrantes.push(
        dadosPorGrupo[stringGrupo].filter((x) => x.Dat_Referencia.substring(5,7) == mes).reduce((anterior,atual) => anterior + atual.QtdFinalizadas + atual.QtdAbandonadas + atual.QtdDerivadas, 0 )
      );
      totais.retencao.push(
        Math.floor(100 * dadosPorGrupo[stringGrupo].filter((x) => x.Dat_Referencia.substring(5,7) == mes).reduce((anterior,atual) => anterior + atual.QtdAbandonadas + atual.QtdFinalizadas, 0 ) / dadosPorGrupo[stringGrupo].filter((x) => x.Dat_Referencia.substring(5,7) == mes).reduce((anterior,atual) => anterior + atual.QtdDerivadas + atual.QtdFinalizadas + atual.QtdAbandonadas, 0 ))
      );
      totais.derivadas.push(
        dadosPorGrupo[stringGrupo].filter((x) => x.Dat_Referencia.substring(5,7) == mes).reduce((anterior,atual) => anterior + atual.QtdDerivadas, 0 )
      );
    }
    return totais
  }


}