import AbstractPagedController from 'hospitalrun/pods/application/controllers/abstract-paged-controller';
import UserSession from 'hospitalrun/mixins/user-session';
export default AbstractPagedController.extend(UserSession, {
  startKey: [],
  addPermission: 'add_imaging'
});
