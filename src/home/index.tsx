import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.name}>
        <Text style={styles.nameText}>luows</Text>
      </View>
      <View style={styles.underline}>
        <Text style={styles.underlineText}></Text>
      </View>
      <View style={styles.headImg}>
        <Image
          style={styles.headImgUrl}
          source={{
            uri:
              'https://6865-heixongjun-ok4ws-1302448573.tcb.qcloud.la/myApp/my.jpg',
          }}
        />
      </View>
      <View style={styles.experience}>
        <View>
          <Text style={styles.experienceText}>
            一、3年前端开发作经验，曾担任一年半的前端主管。
          </Text>
        </View>
        <View>
          <Text style={styles.experienceText}>
            二、负责/参与的产品涉及PC端、小程序、H5、APP 开发。
          </Text>
        </View>
        <View>
          <Text style={styles.experienceText}>
            三、拥有良好的团队组织协调能力，擅长组件化开发。
          </Text>
        </View>
      </View>
      <View style={styles.info}>
        <View style={styles.infoItem}>
          <Text style={styles.infoItemText}>年龄：26</Text>
          <Text style={styles.infoItemText}>住址：杭州</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoItemText}>手机：185****0643</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoItemText}>邮箱：17865922869@163.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    padding: 20,
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 48,
    lineHeight: 70,
    color: '#fff',
  },
  underline: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 26,
    marginBottom: 40,
  },
  underlineText: {
    width: 80,
    height: 2,
    backgroundColor: '#fff',
  },
  headImg: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headImgUrl: {
    width: 190,
    height: 190,
    borderRadius: 95,
    borderWidth: 4,
    borderColor: '#36B0AC',
  },
  experience: {
    marginTop: 35,
    padding: 18,
    paddingLeft: 26,
    paddingRight: 26,
    backgroundColor: '#36B0AC',
  },
  experienceText: {
    fontSize: 16,
    lineHeight: 30,
    color: '#fff',
  },
  info: {
    marginTop: 18,
    borderWidth: 2,
    borderColor: '#fff',
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'row',
  },
  infoItemText: {
    fontSize: 16,
    lineHeight: 30,
    color: '#fff',
    flex: 1,
  },
});

export default Home;
