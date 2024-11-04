import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, Image, TextInput, FlatList, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addJob, deleteJob } from './redux/jobSlice';

export default function MainApp() {
  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
 // const [newJob, setNewJob] = useState('');
   const [search, setSearch] = useState(''); 


   const handleAddJob = () => {
    dispatch(addJob({ id: Date.now().toString(), job: 'New job' }));
  };

  const filteredJobs  = jobs.filter((job) =>
  job.job && job.job.toLowerCase().includes(search.toLowerCase())
);

  return (
    <View style={styles.container}>
     <View style={{flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,marginTop:50}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('./IconButton12.png')}
          />
        </TouchableOpacity>
        <Image
          source={require('./Avatar.png')}
        />
        <View>
          <Text>Hi Anh!</Text>
          <Text >Have a great day ahead</Text>
        </View>
      </View>
      {/* Khung tìm kiếm */}
      <TextInput
        style={{ borderWidth: 1, height: 30, width: '80%', borderRadius: 10, marginBottom: 16,marginTop:20}}
        placeholder="Search job"
        value={search} // Sử dụng state `search` cho tìm kiếm
        onChangeText={setSearch}
      />
      <Button title="Add Job" onPress={handleAddJob} />

      {/* Danh sách công việc */}
      <FlatList
        data={filteredJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <Text>{item.job}</Text>
            </View>
            <TouchableOpacity onPress={() => dispatch(deleteJob(item.id))}>
              <Text style={{ color: 'red', marginHorizontal: 10 }}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,

  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    justifyContent: 'space-between',
  },
});
