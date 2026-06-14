export const tables = {
  dim_jenis_kelamin: {
    table: 'dim_jenis_kelamin',
    id: 'ID_JENIS_KELAMIN',
    columns: ['L/P'],
    alias: { 'L/P': 'jenis_kelamin' }
  },
  dim_kabupaten_kota: {
    table: 'dim_kabupaten_kota',
    id: 'ID KABUPATEN KOTA',
    columns: ['KABUPATEN KOTA'],
    alias: { 'KABUPATEN KOTA': 'kabupaten_kota' }
  },
  dim_keterangan: {
    table: 'dim_keterangan',
    id: 'ID KETERANGAN',
    columns: ['Ket'],
    alias: { Ket: 'ket' }
  },
  dim_lama_studi: {
    table: 'dim_lama_studi',
    id: 'ID LAMA STUDI',
    columns: ['Lama Studi'],
    alias: { 'Lama Studi': 'lama_studi' }
  },
  dim_sekolah: {
    table: 'dim_sekolah',
    id: 'ID SEKOLAH',
    columns: ['NAMA SEKOLAH'],
    alias: { 'NAMA SEKOLAH': 'nama_sekolah' }
  }
};

