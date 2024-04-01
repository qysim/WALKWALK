import styles from "./Toolbar.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { getEggMoney } from "../../../apis/wallet";
import { useEffect, useState } from "react";


const Toolbar = function(){

    useEffect(()=>{
        getEggMoney()
            .then((res)=>{
                setEgg(res.egg);
                setMoney(res.money);
            })
    }, [])
    const navigate = useNavigate();
    const [egg, setEgg] = useState(0);
    const [money, setMoney] = useState(0);

    const moveToAlarmPage = function () {
        navigate("/Alarm")
    }


    const moveReportPage = function () {
        navigate("/report")
    }

    const moveYesterdayPage = function () {
        navigate("/yesterday")
    }

    const moveTreasurePage = function () {
        navigate("/treasure")
    }

    const moveVoicePage = function () {
        navigate("/voice")
    }

    const moveStorePage = function () {
        navigate("/store")
    }

    const [opened, setOpened] = useState(false);

    const handleSidebarClickEvent = ()=>{
        setOpened(!opened);
    }
    const handleSidebarCloseEvent = ()=>{
        setOpened(false);
    }

    return(
        <> 

                <div className={`${styles.sidebar_container} ${opened && styles.sidebar_container_opened}`}>
                <div className={`${styles.hamburger_container} ${opened ? styles.hamburger_container_opened : styles.change_opacity_0}`} onClick={handleSidebarClickEvent}>
                    <div className={`${styles.hamburger} ${opened && styles.hamburger_1_opened}`}></div>
                    <div className={`${styles.hamburger} ${opened && styles.hamburger_2_opened}`}></div>
                    <div className={`${styles.hamburger} ${opened && styles.hamburger_3_opened}`}></div>
                </div>
                <div className={styles.profile_container}>
                    <div className={styles.profile_img_container}>
                        <img src='/imgs/profile_img1.jpg' alt='프로필 이미지' className={styles.profile_img}></img>
                        <div className={styles.profile_detail_container}>
                            <p className={styles.profile_name}>김이박최고다이순신</p>
                            <p className={styles.profile_intro}>이것은 자기소개를 테스트하기 위한 자기소개입니다.</p>
                        </div>
                    </div>
                    <div className={styles.all_money_container}>
                        <div className={styles.egg_container}>
                            <img src="/imgs/egg.png" alt="황금알" className={styles.egg}></img>
                            <p className={styles.egg_txt}>30000 에그</p>
                        </div>
                        <div className={styles.money_container}>
                            <img src="/imgs/money.png" alt="황금알" className={styles.money}></img>
                            <p className={styles.money_txt}>300000 머니</p>
                        </div>
                    </div>
                </div>
                <div className={styles.bar}></div>
                <div className={styles.page_container}>
                    <div className={styles.report_container} onClick={moveReportPage}>
                        <img src='/imgs/report_icon.png' alt='리포트 아이콘' className={styles.report_icon}></img>
                        <p className={styles.report_txt}>운동 리포트</p>
                    </div>
                    <div className={styles.yesterday_container} onClick={moveYesterdayPage}>
                        <img src='/imgs/yesterday_me_icon.png' alt='어제의 나 아이콘' className={styles.yesterday_icon}></img>
                        <p className={styles.yesterday_txt}>어제의 나</p>

                    </div>
                    <div className={styles.treasure_container} onClick={moveTreasurePage}>
                        <img src='/imgs/treasure_icon.png' alt='보물찾기 아이콘' className={styles.treasure_icon}></img>
                        <p className={styles.treasure_txt}>보물찾기</p>

                    </div>
                    <div className={styles.voice_container} onClick={moveVoicePage}>
                        <img src='/imgs/voice_icon.png' alt='응원 메시지 아이콘' className={styles.voice_icon}></img>
                        <p className={styles.voice_txt}>응원 메시지</p>

                    </div>
                    <div className={styles.store_container} onClick={moveStorePage}>
                        <img src='/imgs/store_icon.png' alt='상점 아이콘' className={styles.store_icon}></img>
                        <p className={styles.store_txt}>상점</p>

                    </div>
                </div>
            </div>

        
            <div className={styles.tool_container}>          

                <div className={`${styles.tool_hamburger_container} ${opened ? styles.hamburger_container_opened : styles.change_opacity_1}`} onClick={handleSidebarClickEvent}>
                    <div className={`${styles.tool_hamburger} ${opened && styles.hamburger_1_opened}`}></div>
                    <div className={`${styles.tool_hamburger} ${opened && styles.hamburger_2_opened}`}></div>
                    <div className={`${styles.tool_hamburger} ${opened && styles.hamburger_3_opened}`}></div>
                </div>

                <div className={styles.tool_all_money_container} >
                    <div className={styles.tool_egg_container}>
                        <img src="/imgs/egg.png" alt="황금알" className={styles.tool_egg}></img>
                        <p className={styles.tool_egg_txt}>{egg}</p>
                    </div>
                    <div className={styles.tool_money_container}>
                        <img src="/imgs/money.png" alt="황금알" className={styles.tool_money}></img>
                        <p className={styles.tool_money_txt}>{money}</p>
                    </div>
                </div>
                <img src="/imgs/bell.png" alt="알람" className={styles.bell} onClick={moveToAlarmPage}></img>
            </div>
        </>
    );
}

export default Toolbar; 