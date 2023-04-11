import useCommonEmployeeBasePage from '../../hooks/useCommonEmployeeBasePage';
import Container from '../../components/Container';
import PanelContainer from '../../containers/PanelContainer';
import TableContainer from '../../containers/TableContainer';

import styles from './index.module.scss';
import { Contact } from '../../entities/contact';

type Props = {
  contacts: Contact[] | null;
};

function CommonEmployeeBasePage({ contacts }: Props) {
  const { editData, isEdit, search, setEditHandler, setSearch, setEditData } =
    useCommonEmployeeBasePage(contacts);

  return (
    <Container>
      <div className={styles.root}>
        <h1>Общая база сотрудников</h1>
        <PanelContainer
          setSearch={setSearch}
          search={search}
          isEdit={isEdit}
          setIsEdit={setEditHandler}
          editData={editData}
        />
        <TableContainer
          search={search}
          isEdit={isEdit}
          setIsEdit={setEditHandler}
          editData={editData}
          setEditData={setEditData}
        />
      </div>
    </Container>
  );
}

export default CommonEmployeeBasePage;
