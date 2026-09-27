import plaImg from '../media/materials/PLA.png';
import petgImg from '../media/materials/PETG.png';
import tpuImg from '../media/materials/TPU.png';
import absImg from '../media/materials/ABS.png';
import asaImg from '../media/materials/ASA.png';

export const materialsData = [
  {
    id: 'pla',
    title: 'PLA',
    img: plaImg,
    text: 'Подходит для аккуратных декоративных и технических деталей, макетов, корпусов и прототипов.'
  },
  {
    id: 'petg',
    title: 'PETG',
    img: petgImg,
    text: 'Оптимален для прочных рабочих деталей, креплений, переходников и элементов с нагрузкой.'
  },
  {
    id: 'abs',
    title: 'ABS',
    img: absImg,
    text: 'Прочный и термостойкий пластик. Подходит для технических деталей, корпусов и изделий, работающих при повышенных температурах.'
  },
  {
    id: 'tpu',
    title: 'TPU',
    img: tpuImg,
    text: 'Используется для гибких и износостойких изделий: прокладок, демпферов и мягких деталей.'
  },
  {
    id: 'asa',
    title: 'ASA',
    img: asaImg,
    text: 'Пластик для эксплуатации на улице. Устойчив к ультрафиолету, влаге, перепадам температур и сохраняет свойства при длительном использовании.'
  }
];