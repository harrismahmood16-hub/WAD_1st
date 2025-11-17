/* ──────────────────────────────────────────────
   ROBERTOS MICHELIN-LUXURY THEME — COLOURS
   ────────────────────────────────────────────── */

:root {
  --white: #FFFFFF;
  --black: #111111;
  --grey: #B7B7B7;
  --gold: #C5A059;
  --red: #BD2A2E;
  --soft-red: #F8E6E7;
  --line: #E0E0E0;
  --radius: 12px;
  --max-width: 1100px;
}

/* RESET */
* { margin:0; padding:0; box-sizing:border-box; }
body {
  font-family: 'Source Sans Pro', sans-serif;
  background: var(--white);
  color: var(--black);
  line-height: 1.7;
}

/* HEADER */
.lux-header {
  background: var(--white);
  border-bottom: 2px solid var(--line);
  padding: 30px 20px;
  text-align: center;
}
.lux-logo {
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  color: var(--black);
  letter-spacing: 2px;
  font-weight: 700;
}
.nav {
  margin-top: 18px;
}
.nav a {
  margin: 0 16px;
  font-weight: 600;
  color: var(--black);
  text-decoration: none;
  font-size: 16px;
  letter-spacing: 0.8px;
  position: relative;
}
.nav a:hover,
.nav a.active {
  color: var(--red);
}

/* CONTAINER */
.container {
  max-width: var(--max-width);
  margin: 40px auto;
  padding: 0 20px;
}

/* TITLES */
.page-title {
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  color: var(--black);
  font-weight: 700;
  margin-bottom: 12px;
}
.sub {
  font-size: 18px;
  color: var(--grey);
  margin-bottom: 30px;
}

/* CARD */
.card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 30px;
  margin-bottom: 35px;
  transition: 0.3s;
}
.card:hover {
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

/* TABLES */
.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border: 1px solid var(--line);
}
.table th {
  font-family: 'Playfair Display', serif;
  text-align: left;
  padding: 14px;
  background: var(--gold);
  color: var(--white);
  font-size: 18px;
  border-bottom: 1px solid var(--line);
}
.table td {
  padding: 14px;
  border-bottom: 1px solid var(--line);
  vertical-align: top;
  font-size: 16px;
  color: var(--black);
}
.table tr:last-child td {
  border-bottom: none;
}
.price {
  font-weight: 700;
  color: var(--red);
  text-align: right;
}

/* FORM */
input, textarea, select {
  width: 100%;
  padding: 12px;
  margin: 8px 0 20px 0;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  font-size: 16px;
}
textarea { resize: vertical; }
label {
  font-weight: 600;
  color: var(--black);
  margin-bottom: 6px;
  display: block;
}
.btn {
  background: var(--black);
  color: var(--white);
  padding: 14px 24px;
  font-weight: 600;
  border-radius: var(--radius);
  text-decoration: none;
  display: inline-block;
  transition: 0.3s;
}
.btn:hover {
  background: var(--red);
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 30px;
}
@media (max-width:820px){.grid{grid-template-columns:1fr;}}

/* FOOTER */
.lux-footer {
  text-align: center;
  padding: 30px 20px;
  border-top: 1px solid var(--line);
  color: var(--grey);
  font-size: 15px;
  margin-top: 60px;
}

/* HOVER EFFECTS FOR TABLE ROWS */
.table tr:hover td {
  background: var(--soft-red);
}
