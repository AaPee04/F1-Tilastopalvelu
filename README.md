# F1-Tilastopalvelu
Tämä on F1-Tilastopalvelu Github repositorio, jonka tarkoituksena on:
Vähintään
kaikki kuskit ja heidän yleistietonsa

Tavoite
kisojen tulokset
Sessioiden tulokset
Mestaruustulokset

# Aikataulu
Vaihe 1: Suunnittelu

Itslearning Suunnitelman kirjoitus 15 min
Plan.md:n kirjoitus 30 min
Ensimmäisen toimivan nettisivun version toimiva versio 1 tuntia

Vaihe 2: Perusrunko ja Päätoiminnalisuudet

Eri välisivujen lisäys 30 min
ensimmäisen Tietokannan täyttö 1-2 tuntia

# Vaihe 1: Suunnitelma

## 1.
Verkkosivusto on tarkoitettu ihmisille, jotka ovat kiinnostuneita F1:stä ja haluavat tietää enemmän F1-kausista sekä nykyisistä F1-kuljettajista, kilpailuista ja mestaruudesta. Toivon, että monet F1-fanit käyttävät tätä sivustoa löytääkseen tietoa suosikkikuljettajistaan.

## 2.
Verkkosivustoa on tarkoitus käyttää viikkojen aikana F1-kilpailujen jälkeen tai milloin tahansa, kun haluat tietää, mitä F1:ssä tapahtuu tällä hetkellä. Sivustoa voi käyttää milloin tahansa, koska se ei ole rajoittava, kun haluat etsiä tietoa F1:stä verkossa.

## 3.
Käyttöliittymän osalta voit nähdä etusivun prototyypin käynnistämällä Reactin ja tarkistamalla sen, mutta pyrin tekemään siitä melko tavallisen käyttöliittymän, jossa eri hakemistot ovat ylhäällä ja teksti keskellä sivua mahdollisten myöhemmin lisättävien kuvien kanssa. Aion myöhemmin yrittää tehdä kuljettajien biosivujen käyttöliittymästä sellaisen, että kuljettajan kuva olisi kyseisen kuljettajan kohdalla ja tiedot kuljettajasta olisivat kuvan oikealla puolella ja kuvan alla. Mestaruustaulukoiden osalta teen taulukon, jossa voit helposti nähdä, mikä osa tiedoista on kyseessä, esimerkiksi: nimi, tiimi ja kansallisuus kuljettajien taulukossa, ja kun painat kuljettajan nimeä, kuljettajan bio avautuu.

## 4.
Verkkosivuston toteutuksen aikana käytän Reactia ja SQL:ää. Reactia käytetään verkkosivuston pohjana kaikille verkkosivuston hakemistoille. Käytän SQL:ää kaikille verkkosivuston taulukoille, kuten kuljettajien taulukoille, jotka haetaan, kun klikkaat kuljettajan nimeä kuljettajien sivulla, jossa voit nähdä enemmän kuljettajista. Pyrin saamaan samanlaisia ominaisuuksia muille taulukoille kilpailuista ja mestaruudesta.

## 5.
Teen projektin yksin, joten minulla on yksin hallinta projektin GitHub-repositoriosta. Teen verkkosivuston itse, joten en ole varma, kuinka paljon ja kuinka suuren verkkosivuston voin tehdä, mutta toivon, että kaikki hakemistot täyttyvät, jotka minulla on tällä hetkellä toimivassa prototyypissä. Testaan verkkosivustoa itse lähes jokaisen muutoksen jälkeen. Testaan yleensä verkkosivustoa lähes joka kerta, kun teen pienen muutoksen tiedostoon, esimerkiksi lisään kuvan, mutta tarkistan, että se toimii ennen kuin saatan sitoutua GitHub-repositorioon.

# Vaihe 2: Perusrunko ja Päätoiminnallisuudet
