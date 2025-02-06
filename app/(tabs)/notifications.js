import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import dayjs from 'dayjs';

const utcDayjs = require('dayjs/plugin/utc'); // Import the UTC plugin
const isSameOrAfter = require('dayjs/plugin/isSameOrAfter');
const isBetween = require('dayjs/plugin/isBetween');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utcDayjs);
dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);
dayjs.extend(timezone);


const Notifications = () => {

  const localTime = dayjs('2025-02-05T23:02:04.000Z');  // UTC time
  const utcTime = localTime.utc();


  const [allNotifications, setAllNotifications] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const [todayNotifications, setTodayNotifications] = useState([]);
  const [yesterdayNotifications, setYesterdayNotifications] = useState([]);
  const [olderNotifications, setOlderNotifications] = useState([]);

  const getAllNotifications = async () => {

    try {
      await axios.get("http://192.168.0.4:3000/api/notification/all")
        .then((response) => {
          //console.log(response.data);
          const notifications = response.data;
          setAllNotifications(notifications);

          const filteredNotifications = filterNotifications(notifications);
          
          setTodayNotifications(filteredNotifications.today);
          setYesterdayNotifications(filteredNotifications.yesterday);
          setOlderNotifications(filteredNotifications.older);
        })
    } finally {
      
      setIsloading(false);
    }

  };

  useEffect(() => {
    getAllNotifications();
  }, []);

  const filterNotifications = (notificationsArray) => {

    const todayStart = dayjs().utc().startOf('day'); // Midnight today
    const yesterdayStart = todayStart.subtract(1, 'day'); // Midnight yesterday


    return notificationsArray.reduce((categorized, notif) => {


      const notifTime = dayjs(notif.time).utc();
      console.log("todaystart is", todayStart);
      console.log("above notif time", notifTime);



      console.log("below notif time", notifTime);



      if (notifTime.isSameOrAfter(todayStart)) {
        categorized.today.push(notif);
      } else if (notifTime.isBetween(yesterdayStart, todayStart, '[]')) {
        categorized.yesterday.push(notif);
      } else {
        categorized.older.push(notif);
      }




      const sortByTimeDescending = (a, b) => dayjs(b.time).utc() - dayjs(a.time).utc();

      // Sort each category by time (descending)
      categorized.today.sort(sortByTimeDescending);
      categorized.yesterday.sort(sortByTimeDescending);
      categorized.older.sort(sortByTimeDescending);

      console.log("Sorted and categorized notifications", categorized);



      return categorized;

    }, { today: [], yesterday: [], older: [] });
  };

  const renderSection = (title, notifications) => {
    
    //console.log("these are notifications to be rendered", notifications);
    
    console.log("local time is", localTime);
    return (
    <View>
      <Text>{title}</Text>
      <FlatList
        data={notifications}
        renderItem={({ item }) => 
        <View>
          <Text>{item.name} { item.type == "appunlock" ? "unlocked" :null}{ item.type == "cardunlock" ? "unlocked" :null}{ item.type == "enable" ? "enabled" :null}{ item.type == "disable" ? "disabled" :null} the { item.type == "appunlock" ? "door" :null}{ item.type == "cardunlock" ? "door" :null}{ item.type == "enable" ? "exit sensor" :null}{ item.type == "disable" ? "exit sensor" :null} using { item.type == "cardunlock" ? "his card" : "the app"} at {dayjs(item.time).utc().tz(dayjs.tz.guess()).format('hh:mm A')}</Text>
        </View>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>)};

  if (isLoading) {
    return <ActivityIndicator size="large" />
  }

  return (
    <View>
      <Text>notifications</Text>
      <View>
        {renderSection('Today', todayNotifications)}
        {renderSection('Yesterday', yesterdayNotifications)}
        {renderSection('Older', olderNotifications)}
        </View>
    </View>
  )
}

export default Notifications;

