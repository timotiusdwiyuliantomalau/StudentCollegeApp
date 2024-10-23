import { View, Text, TouchableOpacity } from 'react-native';
import Fa6 from 'react-native-vector-icons/FontAwesome6';
import Ion from 'react-native-vector-icons/Ionicons';

export default function TabTwoScreen() {
  return (
    <View className="flex flex-col h-full mt-12">
      <View className="h-[200]  bg-yellow-400 relative">
      <View className='flex-row items-center space-x-5 justify-center text-center py-4 px-4 absolute w-full top-2'>
        <Text className="text-2xl font-bold">Layanan</Text>
        <Fa6 name="file-circle-question" size={20} color="black" />
        </View>
      </View>

      <View className="flex-col space-y-12 p-6 absolute w-full top-12">
        <View className="rounded-lg relative flex flex-col p-4 items-center space-y-4">
    <View className='absolute -top-[20%] left-[10]'>
          <Fa6 name='ticket-simple' color={'white'} size={270}></Fa6>
    </View>
          <Text className="text-gray-800 w-[250]">
            Buat Tiket anda sekarang untuk memulai layanan. Admisi dan Layanan Terpadu (ALT) siap menjadi tempat pengaduan pertama bagi Anda yang memiliki kendala atau masalah.
          </Text>          
          <TouchableOpacity className="bg-blue-500 text-white px-4 py-2 rounded flex-row items-center space-x-2 w-1/2">
            <Text className="text-white">Buat Tiket Baru</Text>
            <Fa6 name="plus-square" size={15} color="white" />
          </TouchableOpacity>
        </View>

        <View>
        <Text className="text-lg font-bold text-gray-800 mb-2">Tiket & Layanan Saya</Text>
        <View className="bg-white rounded-xl shadow p-4 flex-row items-center">
          <View className="flex-grow ">
            <Text className="text-gray-700 font-bold ">Gagal memuat tiket</Text>
            <Text className="text-gray-500 ">klik icon di samping untuk coba lagi</Text>
          </View>
          <Ion name='refresh-circle' size={30} color={'#4381e5'}></Ion>
        </View>
        </View>

      </View>
    </View>
  );
}