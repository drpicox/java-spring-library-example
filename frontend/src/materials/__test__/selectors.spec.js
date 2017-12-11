import { getMaterialsList, getMaterial } from '../selectors';

const MATERIAL_1 = { id: 1, title: 'material 1' };
const MATERIAL_2 = { id: 2, title: 'material 2' };
const MATERIAL_3 = { id: 3, title: 'material 3' };
const STATE = {
  materials: {
    1: MATERIAL_1,
    2: MATERIAL_2,
    3: MATERIAL_3,
  },
};

describe('getMaterial', () => {
  it('should return the requested material', () => {
    const material = getMaterial(STATE, { materialId: 1 });

    expect(material).toBe(MATERIAL_1);
  });

  it('should return an empty object if it does not exists', () => {
    const material = getMaterial(STATE, { materialId: 'UNEXISTING' });

    expect(material).toEqual({});
  });
});

describe('getMaterialsList', () => {
  it('should return the list of materials inverse order by id', () => {
    const materials = getMaterialsList(STATE);
    expect(materials).toEqual([MATERIAL_3, MATERIAL_2, MATERIAL_1]);
  });

  it('should return the same instance if called twice without changes', () => {
    const materials1 = getMaterialsList(STATE);
    const materials2 = getMaterialsList(STATE);

    expect(materials1).toBe(materials2);
  });
});
