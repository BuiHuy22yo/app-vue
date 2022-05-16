import { isNotEmptyArray } from '@/utils/lib';
import importService from '@/services/import.service';

export default {
  data() {
    const estimateTypes = [
      { name: '新規(入札時)', value: '1' },
      { name: '修正(再見積)', value: '2' },
      { name: '最終(契約時)', value: '3' },
      // { name: '最終(決裁時)', value: '4' },
      { name: '最終(精算時)', value: '5' },
    ];

    const quotationSegments = [
      { name: '新築', value: '1' },
      { name: '増床', value: '2' },
      { name: '活性化', value: '3' },
    ];

    const buildings = [
      { name: '本体棟', value: '1' },
      { name: '立体駐車場', value: '2' },
    ];

    const statusLogicalDelete = [
      {
        name: '有効',
        value: '0',
      },
      {
        name: '無効',
        value: '1',
      },
    ];

    const propertyNames = [{ name: '空白', value: '' }];
    const contractorNames = [{ name: '空白', value: '' }];
    const constantCodes = [{ name: '空白', value: '' }];
    const areas = [{ name: '空白', value: '' }];
    const users = [{ name: '空白', value: '' }];

    const propertyStructures = [{ name: '空白', value: '' }];
    const locationCharss = [{ name: '空白', value: '' }];
    const businessTypes = [{ name: '空白', value: '' }];
    const statusNames = [];
    const quotationSegmentForAssessment = [{ name: '空白', value: '' }];
    const assessorLists = [{ name: '空白', value: '' }];

    const departments = [{ name: '空白', value: '' }];
    const roles = [{ name: '空白', value: '' }];
    const propertyNamesHasArea = [{ name: '空白', value: '' }];
    const userConstruction = [{ name: '空白', value: '' }];
    const assessorListsRequest = [{ name: '空白', value: '' }];
    const autoCompleteContractors = [];
    const propertyPerson = [];

    // using in master user
    const listUsers = [];

    return {
      estimateTypes,
      quotationSegments,
      buildings,
      propertyNames,
      contractorNames,
      constantCodes,
      areas,
      users,

      // for search box master
      propertyStructures,
      locationCharss,
      businessTypes,
      statusNames,

      // assessment
      quotationSegmentForAssessment,
      assessorLists,
      departments,
      roles,
      statusLogicalDelete,
      propertyNamesHasArea,
      userConstruction,
      assessorListsRequest,
      autoCompleteContractors,
      propertyPerson,
      listUsers,
    };
  },

  methods: {
    estimateTypeName(value) {
      const estimateType = this.estimateTypes.find(item => item.value === value);
      return estimateType?.name ?? '';
    },
    quotationSegmentName(value) {
      const quotationSegment = this.quotationSegments.find(item => item.value === value);
      return quotationSegment?.name ?? '';
    },
    buildingName(value) {
      const building = this.buildings.find(item => item.value === value);
      return building?.name ?? '';
    },
    propertyName(value) {
      const propertyName = this.propertyNames.find(item => item.value === value);
      return propertyName?.name ?? '';
    },

    propertyStructure(value) {
      const propertyStructure = this.propertyStructures.find(item => item.value === value);
      return propertyStructure?.name ?? '';
    },
    locationChars(value) {
      const locationChars = this.locationCharss.find(item => item.value === value);
      return locationChars?.name ?? '';
    },
    businessType(value) {
      const businessType = this.businessTypes.find(item => item.value === value);
      return businessType?.name ?? '';
    },

    contractorName(value) {
      const contractorName = this.contractorNames.find(item => item.value === value);
      return contractorName?.name ?? '';
    },
    constantCode(value) {
      const constantCode = this.constantCodes.find(item => item.value === value);
      return constantCode?.name ?? '';
    },
    areaName(value) {
      const areaName = this.areaNames.find(item => item.value === value);
      return areaName?.name ?? '';
    },
    // TODO: check user name duplicate key
    // userName(value) {
    //   const userName = this.userNames.find(item => item.value === value);
    //   return userName?.name ?? '';
    // },
    statusName(value) {
      const statusName = this.statusNames.find(item => item.value === value);
      return statusName?.name ?? '';
    },
    quotationSegmentForAssessmentName(value) {
      const est_type_for_assessment = this.quotationSegmentForAssessment.find(item => item.value === value);
      return est_type_for_assessment?.name ?? '';
    },

    departmentName(value) {
      const departmentName = this.departments.find(item => item.value === value);
      return departmentName?.name ?? '';
    },

    roleName(value) {
      const roleName = this.roles.find(item => item.value === value);
      return roleName?.name ?? '';
    },

    userName(value) {
      const userName = this.assessorLists.find(item => item.value === value);
      return userName?.name ?? '';
    },
  },

  async created() {
    try {
      const data = await importService.getInitTypes();

      // this.estimateTypes = data.default_data.estimate_type.map(item => ({
      //   value: item.constant_key,
      //   name: item.constant,
      // }));

      // this.quotationSegments = data.default_data.quotation_segment.map(item => ({
      //   value: item.constant_key,
      //   name: item.constant,
      // }));

      this.propertyNames = [{ name: '空白', value: '' }].concat(
        isNotEmptyArray(data.property)
          ? data.property.map(item => ({
              name: item.property_name,
              value: item.property_code,
            }))
          : [],
      );

      this.contractorNames = [{ name: '空白', value: '' }].concat(
        isNotEmptyArray(data.contractor)
          ? data.contractor.map(item => ({
              name: item.contractor_name,
              value: item.contractor_code,
            }))
          : [],
      );

      this.autoCompleteContractors = isNotEmptyArray(data.contractor)
        ? data.contractor.map(item => ({
            value: item.contractor_name,
            code: item.contractor_code,
          }))
        : [];

      this.constantCodes = [{ name: '空白', value: '' }].concat(
        isNotEmptyArray(data.default_data.area)
          ? data.default_data.area.map(item => ({
              name: item.constant_code,
              value: item.constant_key,
            }))
          : [],
      );

      this.areas = [{ name: '空白', value: '' }].concat(
        isNotEmptyArray(data.default_data.area)
          ? data.default_data.area.map(item => ({
              name: item.constant,
              value: item.constant_key,
            }))
          : [],
      );

      this.users = [{ name: '空白', value: '' }].concat(
        isNotEmptyArray(data.user)
          ? data.user
              .filter(function (item) {
                return (item.department == '5201' || item.department == '5202') && !item.logical_delete;
              })
              .map(item => ({
                name: item.user_name,
                value: item.user_id,
              }))
          : [],
      );

      this.propertyStructures = [{ name: '空白', value: '' }].concat(
        isNotEmptyArray(data.default_data.building_structure)
          ? data.default_data.building_structure.map(item => ({
              name: item.constant,
              value: item.constant_key,
            }))
          : [],
      );

      this.locationCharss = [{ name: '空白', value: '' }].concat(
        isNotEmptyArray(data.default_data.location_characteristics)
          ? data.default_data.location_characteristics.map(item => ({
              name: item.constant,
              value: item.constant_key,
            }))
          : [],
      );

      this.businessTypes = [{ name: '空白', value: '' }].concat(
        isNotEmptyArray(data.default_data.business_format)
          ? data.default_data.business_format.map(item => ({
              name: item.constant,
              value: item.constant_key,
            }))
          : [],
      );

      this.statusNames = data.default_data.status_assessment.map(item => ({
        name: item.constant,
        value: item.constant_key,
      }));

      this.quotationSegmentForAssessment = [{ name: '空白', value: '' }].concat(
        isNotEmptyArray(data.default_data.quotation_segment_for_assessment)
          ? data.default_data.quotation_segment_for_assessment.map(item => ({
              name: item.constant,
              value: item.constant_key,
            }))
          : [],
      );

      this.assessorLists = [{ name: '空白', value: '' }].concat(
        isNotEmptyArray(data.user)
          ? data.user.map(item => ({
              name: item.user_name,
              value: item.user_id,
            }))
          : [],
      );

      // for upload and remand request
      this.assessorListsRequest = [{ name: '空白', value: '' }].concat(
        isNotEmptyArray(data.user)
          ? data.user
              .filter(v => Number(v.department) === 1901 && !v.logical_delete)
              .map(item => ({
                name: item.user_name,
                value: item.user_id,
              }))
          : [],
      );

      this.departments = [{ name: '空白', value: '' }].concat(
        data.default_data.department.map(item => ({
          name: item.constant,
          value: item.constant_key,
        })),
      );

      this.roles = [{ name: '空白', value: '' }].concat(
        data.default_data.role.map(item => ({
          name: item.constant,
          value: item.constant_key,
        })),
      );

      this.propertyNamesHasArea = [{ name: '空白', value: '' }].concat(
        isNotEmptyArray(data.property)
          ? data.property.map(item => ({
              name: item.property_name,
              value: item.property_code,
              area: item.area,
            }))
          : [],
      );

      const departmentConstruction = ['5202', '5201'];
      const userConstruction = data.user.filter(user => departmentConstruction.includes(user.department));
      this.userConstruction = [{ name: '空白', value: '' }].concat(
        isNotEmptyArray(userConstruction)
          ? userConstruction.map(item => ({
              name: item.user_name,
              value: item.user_id,
            }))
          : [],
      );

      this.propertyPerson = data.property_person;

      // list user
      this.listUsers = data.user;
    } catch (error) {
      console.error(error);
    }
  },
};
