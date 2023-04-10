import { connect } from 'react-redux';

import { RootState } from '../store';
import Table from '../components/Table';
import { fetchContacts } from '../services/contact';
import {
  selectCount,
  selectContacts,
  selectErrorMessage,
  selectStatus,
} from '../entities/contact/selectors';

const mapState = (state: RootState) => ({
  contacts: selectContacts(state),
  count: selectCount(state),
  status: selectStatus(state),
  errorMessage: selectErrorMessage(state),
});

const mapDispatch = {
  fetchContacts: (
    page: number,
    limit: number,
    sort: string,
    order: string,
    q: string
  ) => fetchContacts({ page, limit, order, sort, q }),
};

const connector = connect(mapState, mapDispatch);

export default connector(Table);
