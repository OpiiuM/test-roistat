import storageService from '@/services/storage-service';

export default function (store) {
  store.$localStore = storageService;
}
