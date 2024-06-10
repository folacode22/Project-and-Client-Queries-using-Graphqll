import Clients from '../components/Clients';
import Projects from '../components/Projects';
import AddClientModal from '../components/AddClientModel';
import AddProjectModal from '../components/AddProjectModel';

export default function Home() {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}