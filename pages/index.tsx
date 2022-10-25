import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/index.module.css'

const oracledb = require('oracledb');


async function getCurrentDate(): Promise<string> {
  let connection = await oracledb.getConnection({ user: "demonode", password: "XXXX", connectionString: "localhost/xepdb1" });

  var result = await connection.execute(
    `select sysdate from dual;`,
    [],
    { resultSet: true, outFormat: oracledb.OUT_FORMAT_OBJECT });

  // const rs = result.resultSet;
  // let row;

  // while ((row = await rs.getRow())) {
  //   if (row.DONE)
  //     console.log(row.DESCRIPTION, "is done");
  //   else
  //     console.log(row.DESCRIPTION, "is NOT done");
  // }
  return "asd";
}


let foo = getCurrentDate();


export default async function render() {

  return (
    <div className={styles.container}>
      <Head>
        <title>${foo}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.logoContainer}>
        <div className={styles.field}>
          <div className={styles.anchor}></div>
        </div>
      </div>

    </div>
  )
}