import React from 'react'
import s from "./Main.module.css"
import settingsBaseStyles from "../settings/Settings.module.css";
import ClientTable from '../../base/ClientTable';
import MainTable from '../../base/MainTable';

const Main = () => {
  return (
    <div className='container'>
        <h3>Добро пожаловать, доктор С. А. Аттокуровна</h3>
        
        <div className={s.appoint_cont}>
            <div /* className={s.card_cont} */>
                <div className={s.card}><h3>3</h3><p>Записи</p></div>
                <div className={s.card_2}><h3>5</h3><p>Количество пациентов</p></div>
                <div className={s.card_3}><h3>19</h3><p>Консультация</p></div>
            </div>
            <div>
                <h5>Все записи</h5>
                <ul className={s.list_cont}>
                    <li className={s.list_items}>
                        <img style={{width:50, borderRadius: 50}} src='https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg'/>
                        <div style={{height: 46}} className={settingsBaseStyles.fld}>
                            <p>Акмат Акматов</p>
                            <p>09.06.2022</p>
                        </div>
                    </li>
                    <li className={s.list_items}>
                        <img style={{width:50, borderRadius: 50}} src='https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg'/>
                        <div style={{height: 46}} className={settingsBaseStyles.fld}>
                            <p>Аяна Бектемирова</p>
                            <p>06.06.2022</p>
                        </div>
                    </li>
                    <li className={s.list_items}>
                        <img style={{width:50, borderRadius: 50}} src='https://ieltsrewind.com/wp-content/uploads/2021/01/Describe-a-polite-person-whom-you-know.jpg?ezimgfmt=ng%3Awebp%2Fngcb21%2Frs%3Adevice%2Frscb21-2'/>
                        <div style={{height: 46}} className={settingsBaseStyles.fld}>
                            <p>Клара Исанова</p>
                            <p>08.06.2022</p>
                        </div>
                    </li>
                </ul>
                </div>
                <div>
                    <h5>Записи на сегодня</h5>
                <ul className={s.list_cont}>
                    <li className={s.list_items}>
                        <img style={{width:50, borderRadius: 50}} src='https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg'/>
                        <div style={{height: 46}} className={settingsBaseStyles.fld}>
                            <p>Акмат Акматов</p>
                            <p>09.06.2022</p>
                        </div>
                    </li>
                    <li className={s.list_items}>
                        <img style={{width:50, borderRadius: 50}} src='https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg'/>
                        <div style={{height: 46}} className={settingsBaseStyles.fld}>
                            <p>Аяна Бектемирова</p>
                            <p>06.06.2022</p>
                        </div>
                    </li>
                    <li className={s.list_items}>
                        <img style={{width:50, borderRadius: 50}} src='https://ieltsrewind.com/wp-content/uploads/2021/01/Describe-a-polite-person-whom-you-know.jpg?ezimgfmt=ng%3Awebp%2Fngcb21%2Frs%3Adevice%2Frscb21-2'/>
                        <div style={{height: 46}} className={settingsBaseStyles.fld}>
                            <p>Клара Исанова</p>
                            <p>08.06.2022</p>
                        </div>
                    </li>
                </ul>
            </div>
            
        </div><div>
                <h5 style={{marginBottom: 10, marginTop: 20 }}>Недавние пациенты</h5>
                <MainTable />
                {/* <table>
                    <thead>
                       <tr>
                        <th>ФИО</th>
                        <th>Дата</th>
                        <th>Номер</th>
                        <th>Заболевание</th>
                    </tr> 
                    </thead>
                    
                    <tbody>
                       <tr>
                        <td>Канат Муратов</td>
                        <td>02.06.2022</td>
                        <td>0222890967</td>
                        <td>Артроз</td>
                    </tr> 
                    </tbody>
                    
                </table> */}
            </div>
    </div> 
  )
}

export default Main